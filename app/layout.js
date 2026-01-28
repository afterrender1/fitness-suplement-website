import "./globals.css";


export const metadata = {
  title: "Prime Supps | Trusted Wellness Experts",
  description:
    "Shop high-quality health and wellness supplements recommended by experts. Clean ingredients, proven results, and fast delivery. Call now for guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="selection:bg-[#93D2D9] selection:text-black"
      >
        {children}
      </body>
    </html>
  );
}
