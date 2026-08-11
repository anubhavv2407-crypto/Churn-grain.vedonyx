import InfoPage from "@/components/InfoPage";

export default function ShippingPage() {
  return <InfoPage eyebrow="DELIVERED WITH CARE" title="From our pantry to yours." intro="This is the current customer-facing shipping guidance for the Churn & Grain Co. storefront." blocks={[{ heading: "Dispatch", body: "Orders are typically prepared within one to three working days, with extra care for glass jars and premium ingredients." }, { heading: "Delivery", body: "Estimated delivery is two to seven working days after dispatch, depending on the destination and courier network." }, { heading: "Complimentary shipping", body: "Complimentary standard delivery is planned for orders above ₹1,499 across serviceable Indian pin codes." }]} action={{ label: "EXPLORE THE PANTRY", href: "/shop" }} />;
}
