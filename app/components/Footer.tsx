import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#services", label: "Services" },
      { href: "/tools", label: "Free tools" },
      { href: "/tools/notes", label: "Notes for Mac" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "mailto:hello@kasamd.com", label: "Contact" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-900/10 bg-brand-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-x-8 gap-y-12 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-3 md:col-span-2">
            <img src="/kasamd_green.png" alt="KasaMD" className="h-8" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Patient messaging, scheduling, refills, prior auth, referrals and
              billing for independent practices. Plus free clinical tools,
              starting with Notes for Mac.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold tracking-wider text-brand-900 uppercase">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-brand-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brand-900/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Kasa Labs. All rights reserved.
          </p>
          <a
            href="mailto:hello@kasamd.com"
            className="text-sm font-medium text-brand-900 hover:text-brand-600"
          >
            hello@kasamd.com
          </a>
        </div>
      </div>
    </footer>
  );
}
