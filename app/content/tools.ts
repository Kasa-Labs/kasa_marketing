export type FreeTool = {
  slug: string;
  name: string;
  platform: string;
  summary: string;
  capabilities: { name: string; description: string }[];
  href: string;
};

export const notesForMac: FreeTool = {
  slug: "notes",
  name: "Notes for Mac",
  platform: "macOS 14+ · Apple Silicon",
  summary:
    "Record the visit and get a finished clinical note. Transcription runs on your Mac, so audio never leaves it.",
  capabilities: [
    {
      name: "Offline AI transcription",
      description:
        "Speech becomes text through AI models running on your Mac. No internet needed.",
    },
    {
      name: "Clinical notes & templates",
      description:
        "Turn the conversation into a SOAP, HPI or custom note, from built-in templates or your own.",
    },
    {
      name: "Patient & session management",
      description:
        "Keep patients organized and every visit's session saved automatically.",
    },
    {
      name: "Medical text editor",
      description:
        "Refine the note in a rich-text editor built for clinical writing, then export to PDF.",
    },
  ],
  href: "/tools/notes",
};

export const tools: FreeTool[] = [notesForMac];
