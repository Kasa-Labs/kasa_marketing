"use client";

import { useEffect } from "react";
import { DOWNLOAD_URL } from "@/components/DownloadButton";

const STORAGE_KEY = "kasamd-referrer";

// The site a visitor first arrived from, e.g. "linkedin.com". The download counter only sees kasamd.com as the
// referrer, so download links carry it as ?src= instead.
function rememberReferrer() {
  if (!document.referrer) return;
  const host = new URL(document.referrer).hostname.replace(/^www\./, "");
  if (host === "kasamd.com" || host.endsWith(".kasamd.com")) return;
  if (!localStorage.getItem(STORAGE_KEY)) localStorage.setItem(STORAGE_KEY, host);
}

function tagDownloadLink(event: MouseEvent) {
  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(`a[href^="${DOWNLOAD_URL}"]`);
  if (!link) return;
  try {
    const source = localStorage.getItem(STORAGE_KEY);
    if (source) link.href = `${DOWNLOAD_URL}?src=${encodeURIComponent(source)}`;
  } catch {}
}

export function ReferrerTracker() {
  useEffect(() => {
    try {
      rememberReferrer();
    } catch {}
    document.addEventListener("click", tagDownloadLink, true);
    document.addEventListener("auxclick", tagDownloadLink, true);
    return () => {
      document.removeEventListener("click", tagDownloadLink, true);
      document.removeEventListener("auxclick", tagDownloadLink, true);
    };
  }, []);
  return null;
}
