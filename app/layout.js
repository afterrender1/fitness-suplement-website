import "./globals.css";


export const metadata = {
  title: "Premium Health Supplements | Trusted Wellness Experts",
  description:
    "Shop high-quality health and wellness supplements recommended by experts. Clean ingredients, proven results, and fast delivery. Call now for guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
