import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Poppins, Inter } from "next/font/google";
import {
    Star,
    ArrowLeft,
    ShieldCheck,
    Zap,
    ShoppingCart,
    CheckCircle2,
    Truck,
    ChevronRight,
    Package,
    Clock,
    Award,
    CreditCard,
    Heart,
    Share2,
    Layers,
    Droplets,
    Wheat,
    Flame,
    Info,
    Check,

} from "lucide-react";
import shopData from "@/app/data/shopData.json";
import ProductImageGallery from "@/app/components/ProductImageGallery";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

// Theme color constant
const THEME = {
    primary: "#93D2D9",
    primaryLight: "#E8F6F8",
    primaryDark: "#6BBCC6",
    dark: "#0F172A",
    gray: "#64748B"
};

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = shopData.products.find((p) => p.id === id);

    if (!product) notFound();

    const discount = product.regular_price && product.sale_price
        ? Math.round(((product.regular_price - product.sale_price) / product.regular_price) * 100)
        : null;

    const relatedProducts = shopData.products
        .filter((p) => p.vendor === product.vendor && p.id !== id)
        .slice(0, 4);

    return (
        <div className={`min-h-screen  text-slate-900 ${inter.className}`}>

            {/* Top Trust Bar */}
            <div
                className="text-white text-center py-2 px-4 text-[0.5rem] md:text-[0.8rem] font-semibold tracking-[0.15em] uppercase"
                style={{ backgroundColor: THEME.dark }}
            >
                <span className="inline-flex items-center gap-2">
                    <Zap size={14} style={{ color: THEME.primary }} />
                    {shopData.payment_offers} • {shopData.delivery_info.timeline || shopData.delivery_info}
                </span>
            </div>

            {/* Professional Navbar */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60">
                <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
                    <Link
                        href="/shop/supplements"
                        className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                            style={{ backgroundColor: THEME.primaryLight }}
                        >
                            <ArrowLeft size={16} style={{ color: THEME.primaryDark }} />
                        </div>
                        <span className="hidden sm:block text-sm font-medium text-slate-600 group-hover:text-slate-900">
                            Back to Store
                        </span>
                    </Link>

                    {/* Desktop Certifications */}
                    <div className="hidden md:flex items-center gap-3">
                        {shopData.certifications?.map((cert) => (
                            <span
                                key={cert}
                                className="flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-full border"
                                style={{
                                    backgroundColor: THEME.primaryLight,
                                    borderColor: THEME.primary,
                                    color: THEME.primaryDark
                                }}
                            >
                                <ShieldCheck size={12} />
                                {cert}
                            </span>
                        ))}
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center gap-2">
                        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors">
                            <Share2 size={18} className="text-slate-500" />
                        </button>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors">
                            <Heart size={18} className="text-slate-500" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Breadcrumb */}
            <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex items-center gap-2 text-xs text-slate-400">
                    <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <Link href="/shop/supplements" className="hover:text-slate-600 transition-colors">Shop</Link>
                    <ChevronRight size={12} />
                    <span className="text-slate-600 font-medium">{product.name}</span>
                </nav>
            </div>

            {/* Main Content */}
            <main className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16">

                    {/* Left Column - Images & Specs */}
                    <div className="lg:col-span-7 xl:col-span-8">
                        <ProductImageGallery
                            src={product.image_url}
                            alt={product.name}
                            discount={discount}
                            themeColor={THEME.primary}
                        />
                        <div className="lg:sticky lg:top-24 space-y-6">

                            {/* Image Gallery */}

                            {/* Macros Grid */}

                            <div className="bg-white rounded-lg border border-gray-100  p-4 sm:p-5 max-w-full">
                                {/* Compact Header */}
                                <div className="flex items-center justify-between mb-1">
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Nutrition Facts</h3>
                                        <p className="text-[10px] text-slate-400">Per Serving (30g)</p>
                                    </div>
                                    <Layers size={16} className="text-[#93D2D9] opacity-70" />
                                </div>

                                {/* Dense Macros Grid */}
                                <div className="grid grid-cols-4 md:grid-cols-4 gap-1">
                                    {Object.entries(product.macros || {}).map(([key, value], index) => {
                                        const iconMap = {
                                            protein: { icon: Droplets, color: "#93D2D9" },
                                            carbs: { icon: Wheat, color: "#F59E0B" },
                                            fats: { icon: Droplets, color: "#EF4444" },
                                            calories: { icon: Flame, color: "#F97316" }
                                        };

                                        const { icon: Icon, color } = iconMap[key.toLowerCase()] || { icon: Info, color: "#93D2D9" };

                                        return (
                                            <div key={key} className="p-2 ">
                                                <div className="flex items-center gap-1 mb-1.5">
                                                    <Icon size={12} style={{ color }} />
                                                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{key}</span>
                                                </div>

                                                <div className="flex items-baseline gap-0.5">
                                                    <span className="text-lg font-bold text-slate-900">{value.replace(/[a-zA-Z]/g, '')}</span>
                                                    <span className="text-[10px] font-medium text-slate-500">{value.replace(/[0-9]/g, '')}</span>
                                                </div>

                                                <div className="mt-2 h-1 bg-slate-200/50 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full rounded-full transition-all"
                                                        style={{
                                                            width: index === 0 ? '80%' : index === 1 ? '50%' : index === 2 ? '30%' : '65%',
                                                            backgroundColor: color
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Minimal Footer */}
                                <p className="mt-1 text-[9px] text-green-900 leading-tight ">
                                    % Daily Values based on a 2,000 calorie diet.
                                </p>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5">
                                {[
                                    { icon: Truck, label: "Fast Delivery", sub: "2-3 Days", color: "#93D2D9" },
                                    { icon: Award, label: "Premium Quality", sub: "Lab Tested", color: "#F59E0B" },
                                    { icon: Clock, label: "Fresh Stock", sub: "2024 Batch", color: "#10B981" },
                                ].map((badge, i) => (
                                    <div
                                        key={i}
                                        className="group bg-white border border-slate-100 rounded-xl p-1 flex items-center gap-4 hover:border-slate-200 hover:shadow-md transition-all duration-300"
                                    >
                                        <div
                                            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                                            style={{ backgroundColor: `` }}
                                        >
                                            <badge.icon size={20} style={{ color: badge.color }} strokeWidth={2} />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-semibold text-slate-900">{badge.label}</p>
                                            <p className="text-[11px] text-slate-400">{badge.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Info */}
                    <div className="lg:col-span-5 xl:col-span-4">
                        <div className="xl:sticky lg:top-24 space-y-6">

                            {/* Vendor & Title */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ backgroundColor: THEME.primary }}
                                    />
                                    <span
                                        className="text-xs font-semibold uppercase tracking-[0.2em]"
                                        style={{ color: THEME.primaryDark }}
                                    >
                                        {product.vendor}
                                    </span>
                                </div>

                                <h1 className={`${poppins.className} text-2xl sm:text-4xl xl:text-[2.75rem] font-semibold leading-[1.1] tracking-tight`}>
                                    {product.name}
                                </h1>

                                <p className="mt-4 text-slate-600 leading-relaxed text-xs sm:text-base">
                                    {product.description}
                                </p>
                            </div>

                            {/* Rating Summary */}
                            <div className="flex items-center gap-2 py-1 md:py-2 border-y border-slate-100">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs font-bold">{product.rating}</span>
                                <span className="text-xs md:text-sm text-slate-400">({product.reviews} verified reviews)</span>
                            </div>

                            {/* Price Card */}
                            <div
                                className="rounded-lg md:rounded-xl p-4 md:p-6 text-white relative overflow-hidden"
                                style={{ backgroundColor: THEME.dark }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full -mr-10 -mt-10" style={{ backgroundColor: THEME.primary }} />

                                <div className="relative z-10 flex justify-between items-end">
                                    <div>
                                        <p className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-widest text-white/60 mb-1">Current Price</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-lg font-medium text-white/80">USD</span>
                                            <span className="text-2xl md:text-3xl font-bold tracking-tight">
                                                {product.sale_price.toLocaleString()}
                                            </span>
                                        </div>
                                        {product.regular_price && (
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-xs line-through text-white/40">
                                                    USD {product.regular_price.toLocaleString()}
                                                </span>
                                                <span
                                                    className="text-[10px] font-bold px-2 py-1 rounded-full"
                                                    style={{ backgroundColor: THEME.primary, color: THEME.dark }}
                                                >
                                                    SAVE {discount}%
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="text-right">
                                        <div
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-2"
                                            style={{ backgroundColor: THEME.primary }}
                                        >
                                            <Package size={20} style={{ color: THEME.dark }} />
                                        </div>
                                        <p className="text-[10px] text-white/60">In Stock</p>
                                    </div>
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="bg-white rounded-lg border border-gray-100 p-2 ">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                                    Key Benefits
                                </h3>
                                <div className="space-y-3">
                                    {product.benefits?.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-1">
                                            <div
                                                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 "
                                                style={{ backgroundColor: THEME.primaryLight }}
                                            >
                                                <CheckCircle2 size={12} style={{ color: THEME.primaryDark }} />
                                            </div>
                                            <span className="text-xs text-slate-600 leading-relaxed">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Desktop CTA */}
                            <div className="hidden lg:block space-y-3">
                                <button
                                    className="w-full h-14 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                                    style={{ backgroundColor: THEME.dark, color: "white" }}
                                >
                                    <ShoppingCart size={20} />
                                    Add to Cart
                                </button>

                                <button
                                    className="w-full h-14 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 border-2 transition-all hover:bg-slate-50"
                                    style={{ borderColor: THEME.primary, color: THEME.primaryDark }}
                                >
                                    <CreditCard size={20} />
                                    Buy Now
                                </button>

                                <p className="text-center text-xs text-slate-400 pt-2">
                                    Free shipping on orders over Rs 5,000 • 30-day returns
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <section className="mt-12 lg:mt-22">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <span
                                className="text-xs font-semibold uppercase tracking-widest mb-2 block"
                                style={{ color: THEME.primaryDark }}
                            >
                                You May Also Like
                            </span>
                            <h2 className={`${poppins.className} text-2xl sm:text-3xl font-semibold`}>
                                Related Products
                            </h2>
                        </div>
                        <Link
                            href="/shop/supplements"
                            className="hidden sm:flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
                            style={{ color: THEME.primaryDark }}
                        >
                            View All <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {relatedProducts.map((item) => (
                            <Link
                                key={item.id}
                                href={`/supplements/${item.id}`}
                                className="group bg-white rounded-2xl border border-slate-50 overflow-hidden  hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="aspect-square p-6 flex items-center justify-center  relative">
                                    <Image
                                        src={item.image_url}
                                        alt={item.name}
                                        width={200}
                                        height={200}
                                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {item.regular_price && (
                                        <span
                                            className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full"
                                            style={{ backgroundColor: THEME.primary, color: THEME.dark }}
                                        >
                                            {Math.round(((item.regular_price - item.sale_price) / item.regular_price) * 100)}% OFF
                                        </span>
                                    )}
                                </div>
                                <div className="p-1 md:p-4">
                                    <p className="text-[0.6rem] md:text-[0.7rem] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                                        {item.vendor}
                                    </p>
                                    <h3 className="font-semibold text-slate-900 text-[0.7rem] md:text-[0.9rem] line-clamp-2 mb-2 group-hover:text-slate-600 transition-colors">
                                        {item.name}
                                    </h3>
                                    <div className="inline-flex items-center gap-4 px-2 py-2  shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)]">
                                        <div className="flex flex-col">
                                            <span className="text-[1.1rem] font-bold text-slate-800 tracking-tight">
                                                ${item.sale_price.toLocaleString()}
                                            </span>
                                            {item.regular_price && (
                                                <span className="text-[0.5rem] font-medium text-emerald-600">
                                                    YOU SAVE {Math.round(((item.regular_price - item.sale_price) / item.regular_price) * 100)}%
                                                </span>
                                            )}
                                        </div>
                                        <div className="w-px h-8 bg-slate-200"></div>
                                        <div className="text-right">
                                            <span className="text-[0.6rem] font-medium text-slate-400 line-clamp-2">
                                                Rs {item.regular_price.toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>

            {/* Mobile Sticky CTA */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-2.5 flex gap-3 z-50 safe-area-pb">
                <button
                    className="flex-1 h-10 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 text-white"
                    style={{ backgroundColor: THEME.dark }}
                >
                    <ShoppingCart size={18} />
                    Add to Cart
                </button>
                <button
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 text-green-500"

                >
                    <Heart size={18} className="text-green-500" />
                </button>
            </div>
        </div>
    );
}