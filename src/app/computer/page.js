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
            <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
              <SectionPanel title="Contents" tone="orange">
                <div className="space-y-3">
                  {[
                    ["01", "Introduction", siteConfig.summary],
                    ["02", "Navigation", "Browse projects, writing, and contact info from the taskbar below."],
                    ["03", "Resume", "Open the resume shortcut for a clean PDF-style handoff."],
                    ["04", "Contact", "Best reached by email, with LinkedIn and GitHub one click away."],
                  ].map(([code, heading, body]) => (
                    <div key={code} className="contents-row">
                      <div className="contents-index">{code}</div>
                      <div>
                        <div className="font-display text-[12px] text-os-navy">{heading}</div>
                        <p className="mt-2 text-[1.4rem] leading-[1.05] text-os-slate">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionPanel>

              <SectionPanel title="Introduction" tone="green">
                <div className="space-y-4 text-[1.7rem] leading-[1.12] text-os-slate">
                  <p>{siteConfig.summary}</p>
                  <p>
                    I like practical product work: improving consistency with shared UI, tuning SQL behind dashboards,
                    cleaning up flows for internal teams, and debugging the kind of bugs that only show up right before release.
                  </p>
                  <div className="status-line">
                    <span className="status-dot" />
                    <span>{siteConfig.availability}</span>
                  </div>
                </div>
              </SectionPanel>
            </div>
          </div>

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

            <SectionPanel title="Timeline" tone="orange">
              <div className="space-y-4">
                {timeline.map((item) => (
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
        </div>
      </div>
    </DesktopShell>
  );
}
