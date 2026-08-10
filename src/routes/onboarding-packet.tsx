import { createFileRoute } from "@tanstack/react-router";
import OnboardingPacket from "@/pages/OnboardingPacket";

export const Route = createFileRoute("/onboarding-packet")({
  head: () => ({
    meta: [
      { title: "Onboarding Packet | Kairos Security" },
      {
        name: "description",
        content:
          "New Kairos Security hires: complete I-9, W-4, direct deposit, and policy acknowledgements.",
      },
      { property: "og:title", content: "Onboarding Packet" },
      {
        property: "og:description",
        content: "Complete your Kairos Security onboarding paperwork online.",
      },
    ],
  }),
  component: OnboardingPacket,
});
