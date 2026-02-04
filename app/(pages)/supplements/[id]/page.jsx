import shopData from "@/app/data/shopData.json";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    const product = shopData.products.find((p) => p.id === id);
    if (!product) notFound();

    return <ProductDetailClient product={product} />;
}
