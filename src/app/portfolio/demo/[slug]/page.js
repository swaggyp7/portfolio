import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return { title: "Demo Not Found" };
  }

  return {
    title: `${project.name} Demo`,
  };
}

export default function PortfolioDemoPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-os-desktop-dark px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl border-[3px] border-[#bcbcbc] bg-[#ebebeb] shadow-[inset_-2px_-2px_0_rgba(88,88,88,0.85),inset_2px_2px_0_rgba(255,255,255,0.95)]">
        <div className="title-bar">
          <div className="flex items-center gap-3">
            <span className="title-dot" />
            <span className="truncate">{project.name} Demo</span>
          </div>
          <Link href="/portfolio" className="window-close-button" aria-label="Close demo and return to portfolio">
            <span className="window-control danger">x</span>
          </Link>
        </div>

        <div className="menu-bar">
          {["File", "Edit", "View", "Demo", "Help"].map((item) => (
            <span key={item} className="menu-link">
              {item}
            </span>
          ))}
        </div>

        <div className="toolbar">
          <Link href="/portfolio" className="toolbar-button">
            <span className="icon-tile small">←</span>
            Back
          </Link>
        </div>

        <div className="address-bar">
          <span className="font-display text-[10px] text-os-navy">Address</span>
          <div className="address-input">yuteng://portfolio/demo/{project.slug}</div>
        </div>

        <section className="content-surface space-y-5">
          <div className="hero-banner">
            <div className="font-display text-[12px] uppercase tracking-[0.2em] text-os-purple">
              Live Preview
            </div>
            <h1 className="mt-3 font-display text-[17px] leading-[1.5] text-os-navy">{project.name}</h1>
            <p className="mt-4 max-w-4xl text-[1.75rem] leading-[1.08] text-os-slate">{project.summary}</p>
          </div>

          <div className="grid gap-5 xl:grid-cols-[0.78fr_1.22fr]">
            <section className="retro-panel retro-panel-orange">
              <div className="panel-title">Execution Log</div>
              <div className="panel-body">
                <div className="space-y-3 text-[1.55rem] leading-[1.05] text-os-slate">
                  <div className="list-row"><span className="list-bullet" />Category: {project.category}</div>
                  <div className="list-row"><span className="list-bullet" />Stack: {project.stack.join(" / ")}</div>
                  <div className="list-row"><span className="list-bullet" />Archive year: {project.year}</div>
                </div>

                <div className="mt-5 rounded-none border-2 border-os-line bg-white px-4 py-4">
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
            </section>

            <section className="retro-panel retro-panel-blue">
              <div className="panel-title">Demo Preview</div>
              <div className="panel-body">
                {project.images.length ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.images.map((image, index) => (
                      <div key={image} className="screenshot-shell">
                        <Image
                          src={image}
                          alt={`${project.name} demo preview ${index + 1}`}
                          width={1200}
                          height={750}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-none border-2 border-os-line bg-white px-4 py-6 text-[1.65rem] leading-[1.08] text-os-slate">
                    This demo route acts as an online preview page for a backend-heavy project. The primary deliverable here was a running pipeline that collected, categorized, and reported review signals rather than a public-facing UI.
                  </div>
                )}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
