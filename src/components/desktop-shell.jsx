import Link from "next/link";
import { desktopShortcuts, navigation, siteConfig, socialLinks } from "@/lib/site-data";
import { OSIcon } from "@/components/os-icon";

function NavButton({ href, label, icon, active }) {
  return (
    <Link
      href={href}
      className={`task-button min-w-[148px] justify-center text-[13px] sm:min-w-[172px] ${
        active ? "task-button-active" : ""
      }`}
    >
      <OSIcon type={icon} />
      <span>{label}</span>
    </Link>
  );
}

function Shortcut({ href, icon, label }) {
  return (
    <Link href={href} className="desktop-shortcut">
      <span className="desktop-icon">
        <OSIcon type={icon} />
      </span>
      <span className="desktop-shortcut-label">{label}</span>
    </Link>
  );
}

function SocialButton({ href, label, code }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="task-button min-w-0 px-3 text-[12px]"
      aria-label={label}
    >
      <span className="social-chip">{code}</span>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

export function DesktopShell({ title, currentPath, address, children, showWindow = true }) {
  return (
    <div className="desktop-wallpaper min-h-screen pb-28">
      <div className="mx-auto flex w-full max-w-[1440px] gap-6 px-3 py-5 sm:px-5 md:px-6">
        <aside className="hidden w-[126px] shrink-0 lg:block">
          <div className="sticky top-6 flex flex-col gap-6">
            {desktopShortcuts.map((shortcut) => (
              <Shortcut key={shortcut.href} {...shortcut} />
            ))}
          </div>
        </aside>

        <div className="flex-1">
          <div className="mb-4 flex gap-3 overflow-x-auto lg:hidden">
            {desktopShortcuts.map((shortcut) => (
              <Link key={shortcut.href} href={shortcut.href} className="desktop-quick-link">
                <OSIcon type={shortcut.icon} />
                <span>{shortcut.label}</span>
              </Link>
            ))}
          </div>

          {showWindow ? (
            <div className="pixel-window overflow-hidden">
              <div className="title-bar">
                <div className="flex items-center gap-3">
                  <span className="title-dot" />
                  <span className="truncate">{title}</span>
                </div>
                <Link href="/" className="window-close-button" aria-label="Close window and return to desktop">
                  <span className="window-control danger">x</span>
                </Link>
              </div>

              <div className="menu-bar">
                {["File", "Edit", "View", "Go", "Favourites", "Help"].map((item) => (
                  <span key={item} className="menu-link">
                    {item}
                  </span>
                ))}
              </div>

              <div className="toolbar">
                <a href={currentPath} className="toolbar-button">
                  <span className="icon-tile small">
                    <OSIcon type="chat" />
                  </span>
                  Refresh
                </a>
                <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer" className="toolbar-button">
                  <span className="icon-tile small">
                    <OSIcon type="pencil" />
                  </span>
                  Resume
                </a>
                <Link href="/" className="toolbar-button">
                  <span className="icon-tile small">
                    <OSIcon type="home" />
                  </span>
                  Home
                </Link>
                <Link href="/contact" className="toolbar-button">
                  <span className="icon-tile small">
                    <OSIcon type="mail" />
                  </span>
                  Contact
                </Link>
              </div>

              <div className="address-bar">
                <span className="font-display text-[10px] text-os-navy">Address</span>
                <div className="address-input">{address}</div>
              </div>

              <main className="content-surface">{children}</main>
            </div>
          ) : (
            <div className="desktop-workspace" />
          )}
        </div>
      </div>

      <div className="taskbar">
        <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-2 px-2 py-2 sm:px-4">
          {navigation.map((item) => (
            <NavButton
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={currentPath === item.href}
            />
          ))}

          <div className="mx-1 hidden h-10 w-px bg-os-steel shadow-[1px_0_0_#fff] sm:block" />

          <div className="flex flex-wrap gap-2">
            {socialLinks.map((item) => (
              <SocialButton key={item.href} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
