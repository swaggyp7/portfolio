import { ContactConsole } from "@/components/contact-console";
import { DesktopShell } from "@/components/desktop-shell";
import { contactMethods, siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <DesktopShell title="Contact" currentPath="/contact" address="yuteng://desktop/contact">
      <div className="space-y-5">
        <section className="hero-banner">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="font-display text-[12px] uppercase tracking-[0.2em] text-os-purple">
                Communications hub
              </div>
              <h1 className="mt-3 font-display text-[17px] leading-[1.5] text-os-navy">Contact me here.</h1>
            </div>
            <div className="status-line text-[1.55rem]">
              <span className="status-dot" />
              <span>{siteConfig.availability}</span>
            </div>
          </div>
        </section>

        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="retro-panel retro-panel-blue">
            <div className="panel-title">Message Form</div>
            <div className="panel-body">
              <ContactConsole email={siteConfig.email} />
            </div>
          </section>

          <aside className="space-y-5">
            <section className="retro-panel retro-panel-green">
              <div className="panel-title">Direct Channels</div>
              <div className="panel-body space-y-4">
                {contactMethods.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") || item.href.startsWith("tel:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") || item.href.startsWith("tel:") ? undefined : "noreferrer"}
                    className="contact-row"
                  >
                    <span className="font-display text-[10px] uppercase tracking-[0.18em] text-os-purple">
                      {item.label}
                    </span>
                    <span className="text-right text-[1.55rem] leading-[1.05] text-os-slate">{item.value}</span>
                  </a>
                ))}
              </div>
            </section>

            <section className="retro-panel retro-panel-orange">
              <div className="panel-title">What to send</div>
              <div className="panel-body space-y-3 text-[1.55rem] leading-[1.05] text-os-slate">
                <div className="list-row"><span className="list-bullet" />Role details and timeline</div>
                <div className="list-row"><span className="list-bullet" />Tech stack and product stage</div>
                <div className="list-row"><span className="list-bullet" />What kind of help your team needs most</div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </DesktopShell>
  );
}
