import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Employment Application | Kairos Security" },
      {
        name: "description",
        content:
          "Apply for a position at Kairos Security. Complete your employment application online.",
      },
      { property: "og:title", content: "Kairos Security Careers" },
      {
        property: "og:description",
        content:
          "Apply for a position at Kairos Security. Complete your employment application online.",
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
