import "./globals.css";

export const metadata = {
  title: {
    default: "Yuteng.exe | Retro Portfolio",
    template: "%s | Yuteng.exe",
  },
  description:
    "A retro operating-system-inspired portfolio for Yuteng, a full-stack developer based in Winnipeg.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
