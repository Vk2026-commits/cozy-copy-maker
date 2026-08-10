import { createFileRoute } from "@tanstack/react-router";
import EmploymentApplication from "@/pages/EmploymentApplication";

export const Route = createFileRoute("/employment-application")({
  head: () => ({
    meta: [
      { title: "Employment Application | Kairos Security" },
      {
        name: "description",
        content:
          "Apply to become a Kairos Security officer: employment history, licenses, and references.",
      },
      { property: "og:title", content: "Employment Application" },
      {
        property: "og:description",
        content: "Apply to become a Kairos Security officer.",
      },
    ],
  }),
  component: EmploymentApplication,
});
