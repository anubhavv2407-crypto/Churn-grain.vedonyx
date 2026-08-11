export default function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand-mark ${light ? "brand-mark--light" : ""}`}
      href="/"
      aria-label="Churn and Grain Co. home"
    >
      <span className="brand-wordmark-exact" aria-hidden="true" />
    </a>
  );
}
