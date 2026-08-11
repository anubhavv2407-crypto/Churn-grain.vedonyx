import { notFound } from "next/navigation";
import ProductDetailsPage from "@/components/ProductDetailsPage";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <ProductDetailsPage product={product} />;
}
