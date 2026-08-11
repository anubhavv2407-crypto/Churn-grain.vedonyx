import InfoPage from "@/components/InfoPage";

export default function ContactPage() {
  return <InfoPage eyebrow="A HUMAN PANTRY" title="Talk to the people behind the jar." intro="For product, ingredient, order or partnership questions, the brand team can be reached through the channels below once commerce operations open." blocks={[{ heading: "Customer care", body: "Order and product support will be available Monday to Saturday during standard business hours." }, { heading: "Brand address", body: "Plot No. 37, OSHB Colony, Lewis Road, Bhubaneswar, Odisha 751002." }, { heading: "Wholesale & partnerships", body: "Retailers, chefs and hospitality partners can share their requirements with the brand team." }]} action={{ label: "SHOP THE RANGE", href: "/shop" }} />;
}
