import Image from "next/image";
import { DesktopShell } from "@/components/desktop-shell";
import { projects, siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Portfolio",
};

function ProjectCard({ project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-header">
        <div>
          <div className="font-display text-[10px] uppercase tracking-[0.16em] text-os-purple">
            {project.year}
          </div>
          <h2 className="mt-2 font-display text-[13px] leading-[1.45] text-os-navy">{project.name}</h2>
        </div>
        <div className="status-pill">{project.stack.join(" / ")}</div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="rounded-none border-2 border-os-line bg-white px-4 py-4 text-[1.6rem] leading-[1.1] text-os-slate">
            {project.summary}
          </div>

          <div className="rounded-none border-2 border-os-line bg-white px-4 py-4">
            <div className="font-display text-[11px] uppercase tracking-[0.18em] text-os-orange">Impact</div>
            <div className="mt-3 space-y-3 text-[1.55rem] leading-[1.05] text-os-slate">
              {project.impact.map((item) => (
                <div key={item} className="list-row">
                  <span className="list-bullet" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-none border-2 border-os-line bg-os-screen px-4 py-4">
          <div className="font-display text-[11px] uppercase tracking-[0.18em] text-os-blue">Explorer View</div>
          {project.images.length ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.images.map((image, index) => (
                <div key={image} className="screenshot-shell">
                  <Image
                    src={image}
                    alt={`${project.name} screenshot ${index + 1}`}
                    width={960}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-none border-2 border-dashed border-os-line bg-white px-4 py-6 text-[1.55rem] leading-[1.05] text-os-slate">
              Backend-heavy project. The work here focused on data collection, classification, and recurring reports rather than a public interface.
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <DesktopShell
      title="Project Explorer"
      currentPath="/portfolio"
      address="yuteng://desktop/portfolio"
    >
      <div className="grid gap-5 xl:grid-cols-[312px_1fr]">
        <aside className="space-y-5">
          <section className="retro-panel retro-panel-green">
            <div className="panel-title">Profile Disk</div>
            <div className="panel-body">
              <div className="portrait-shell">
                <div className="portrait-core">YL</div>
              </div>
              <h1 className="mt-4 font-display text-[14px] leading-[1.55] text-os-navy">{siteConfig.name}</h1>
              <p className="text-[1.9rem] leading-[1.05] text-os-slate">{siteConfig.role}</p>
              <div className="mt-5 rounded-none border-2 border-os-line bg-white px-4 py-4 text-[1.55rem] leading-[1.05] text-os-slate">
                Building production-ready products with a bias toward maintainable UI, clean data flows, and steady shipping.
              </div>
            </div>
          </section>

          <section className="retro-panel retro-panel-blue">
            <div className="panel-title">Directory</div>
            <div className="panel-body">
              <div className="space-y-3 text-[1.6rem] leading-[1.05] text-os-slate">
                <div className="list-row"><span className="list-bullet" />Campaign platforms</div>
                <div className="list-row"><span className="list-bullet" />Admin systems</div>
                <div className="list-row"><span className="list-bullet" />Reporting pipelines</div>
                <div className="list-row"><span className="list-bullet" />Performance fixes</div>
              </div>
            </div>
          </section>
        </aside>

        <section className="space-y-5">
          <div className="hero-banner">
            <div className="font-display text-[12px] uppercase tracking-[0.2em] text-os-purple">Work archive</div>
            <h1 className="mt-3 font-display text-[17px] leading-[1.5] text-os-navy">
              Case studies from shipping campaigns, dashboards, and feedback systems.
            </h1>
            <p className="mt-4 max-w-3xl text-[1.75rem] leading-[1.08] text-os-slate">
              These projects lean practical: configuration-heavy apps, internal tools, debugging-heavy delivery, and systems that had to keep working after launch.
            </p>
          </div>

          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </section>
      </div>
    </DesktopShell>
  );
}
