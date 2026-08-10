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
    ],
  }),
  component: Index,
});
