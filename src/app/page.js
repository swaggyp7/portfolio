import { DesktopShell } from "@/components/desktop-shell";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return <DesktopShell currentPath="/" showWindow={false} />;
}
