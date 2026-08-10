import { createFileRoute } from "@tanstack/react-router";
import Admin from "@/pages/Admin";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin Portal | Kairos Security" },
      {
        name: "description",
        content:
          "Kairos Security admin dashboard for reviewing applications and call logs.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Portal" },
      {
        property: "og:description",
        content: "Kairos Security admin dashboard.",
      },
    ],
  }),
  component: Admin,
});
