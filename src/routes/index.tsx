import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kairos Security Portal | Officer Forms" },
      {
        name: "description",
        content:
          "Complete Kairos Security employment applications and onboarding paperwork online.",
      },
      { property: "og:title", content: "Kairos Security Portal" },
      {
        property: "og:description",
        content:
          "Complete Kairos Security employment applications and onboarding paperwork online.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cozy-copy-maker.lovable.app/" },
      { property: "og:image", content: "https://cozy-copy-maker.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://cozy-copy-maker.lovable.app/og-image.jpg" },
    ],
  }),
  component: Index,
});
