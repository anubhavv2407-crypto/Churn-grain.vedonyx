import InfoPage from "@/components/InfoPage";

export default function PrivacyPage() {
  return <InfoPage eyebrow="CLEAR BY DESIGN" title="Your information, handled carefully." intro="This frontend demonstration does not submit checkout, account or payment information to a live commerce backend." blocks={[{ heading: "Data collection", body: "The current experience uses only temporary browser state for visual interactions such as the local pantry drawer." }, { heading: "Payments", body: "No live payment gateway is connected and no card or banking details are requested by this build." }, { heading: "Future service", body: "A production privacy policy should be reviewed and published when the commerce, analytics and customer-service systems are connected." }]} action={{ label: "RETURN HOME", href: "/" }} />;
}
