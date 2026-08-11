import InfoPage from "@/components/InfoPage";

export default function AccountPage() {
  return <InfoPage eyebrow="YOUR PANTRY" title="Account access is arriving soon." intro="The storefront experience is ready. Saved orders, subscriptions and account access will be connected when the commerce backend goes live." blocks={[{ heading: "Save favourites", body: "Build a personal pantry of ghee, saffron, oils and daily wellness essentials." }, { heading: "Track every batch", body: "Future orders will connect directly to lab reports and source information." }, { heading: "Reorder simply", body: "Repeat the products your household trusts without rebuilding the basket." }]} action={{ label: "CONTINUE SHOPPING", href: "/shop" }} />;
}
