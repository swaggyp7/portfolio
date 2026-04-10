import Link from "next/link";
import { DesktopShell } from "@/components/desktop-shell";
import { focusAreas, siteConfig, skillGroups, systemStats, timeline } from "@/lib/site-data";

export const metadata = {
  title: "Computer",
};

function SectionPanel({ title, children, tone = "blue" }) {
  return (
    <section className={`retro-panel retro-panel-${tone}`}>
      <div className="panel-title">{title}</div>
      <div className="panel-body">{children}</div>
    </section>
  );
}

export default function ComputerPage() {
  const educationTimeline = timeline.filter((item) =>
    item.subtitle.includes("Diploma") || item.subtitle.includes("B.Sc.")
  );
  const workTimeline = timeline.filter((item) => item.subtitle === "Full-Stack Developer");

  return (
    <DesktopShell title="Yuteng's Computer" currentPath="/computer" address="yuteng://desktop/computer">
      <div className="space-y-5">
        <section className="hero-grid">
          <div className="hero-copy">
            <div className="boot-label">System.boot</div>
            <p className="text-sm uppercase tracking-[0.28em] text-os-green">{siteConfig.role}</p>
            <h1 className="font-display text-[clamp(1.55rem,2vw,1.25rem)] leading-[1.28] text-os-navy">
              {siteConfig.headline}
            </h1>
            <p className="max-w-3xl text-[1.8rem] leading-[1.15] text-os-slate">{siteConfig.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/portfolio" className="pixel-button">
                Explore projects
              </Link>
              <Link href="/contact" className="pixel-button secondary">
                Contact me
              </Link>
            </div>
          </div>

          <div className="system-card">
            <div className="font-display text-[11px] uppercase tracking-[0.18em] text-os-purple">
              Device status
            </div>
            <div className="mt-4 space-y-4 text-[1.5rem] leading-[1.05] text-os-slate">
              {systemStats.map((item) => (
                <div key={item.label} className="system-row">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid gap-5 xl:grid-cols-[1.18fr_0.82fr]">
          <div className="space-y-5">
            <SectionPanel title="Focus Areas" tone="blue">
              <div className="space-y-3">
                {focusAreas.map((item) => (
                  <div key={item} className="list-row">
                    <span className="list-bullet" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionPanel>

            <SectionPanel title="Education" tone="green">
              <div className="space-y-4">
                {educationTimeline.map((item) => (
                  <div key={item.period} className="timeline-row">
                    <div className="font-display text-[10px] text-os-green">{item.period}</div>
                    <div className="text-[1.55rem] leading-[1.02] text-os-navy">
                      <div className="font-display text-[11px] leading-[1.4]">{item.title}</div>
                      <div className="mt-1 text-[1.25rem] uppercase tracking-[0.16em] text-os-purple">
                        {item.subtitle}
                      </div>
                      <p className="mt-2 text-os-slate">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionPanel>

            <SectionPanel title="Professional Experience" tone="orange">
              <div className="space-y-4">
                {workTimeline.map((item) => (
                  <div key={item.period} className="timeline-row">
                    <div className="font-display text-[10px] text-os-orange">{item.period}</div>
                    <div className="text-[1.55rem] leading-[1.02] text-os-navy">
                      <div className="font-display text-[11px] leading-[1.4]">{item.title}</div>
                      <div className="mt-1 text-[1.25rem] uppercase tracking-[0.16em] text-os-purple">
                        {item.subtitle}
                      </div>
                      <p className="mt-2 text-os-slate">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionPanel>
          </div>

          <div className="space-y-5">
            <SectionPanel title="Core Skills" tone="purple">
              <div className="grid gap-4">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-none border-2 border-os-line bg-white px-4 py-3">
                    <div className="font-display text-[11px] uppercase tracking-[0.16em] text-os-purple">
                      {group.title}
                    </div>
                    <p className="mt-2 text-[1.5rem] leading-[1.05] text-os-slate">
                      {group.items.join(" / ")}
                    </p>
                  </div>
                ))}
              </div>
            </SectionPanel>
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}
