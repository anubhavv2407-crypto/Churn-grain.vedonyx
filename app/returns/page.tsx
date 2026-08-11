import InfoPage from "@/components/InfoPage";

export default function ReturnsPage() {
  return <InfoPage eyebrow="WE WILL MAKE IT RIGHT" title="Simple, thoughtful support." intro="Food products need careful handling. If a parcel reaches you damaged or incorrect, our support process is designed to resolve it clearly." blocks={[{ heading: "Check the parcel", body: "Please inspect the package when it arrives and retain the outer carton if anything appears damaged." }, { heading: "Share the details", body: "Contact us with your order details and clear photographs within the stated support window." }, { heading: "Resolution", body: "Eligible damaged or incorrect items will be reviewed for a replacement or suitable resolution." }]} action={{ label: "CONTACT SUPPORT", href: "/contact" }} />;
}
