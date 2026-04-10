import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { projects } from "@/lib/site-data";

export const metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return <PortfolioExplorer projects={projects} />;
}
