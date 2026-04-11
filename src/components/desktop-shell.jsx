import Link from "next/link";
import { desktopShortcuts, navigation, socialLinks } from "@/lib/site-data";
import { XPIcon } from "@/components/xp-icon";
import { TaskbarClock } from "@/components/taskbar-clock";

function NavButton({ href, label, icon, active }) {
  return (
    <Link
      href={href}
      className={`task-button min-w-[148px] justify-center text-[13px] sm:min-w-[172px] ${
        active ? "task-button-active" : ""
      }`}
    >
      <XPIcon type={icon} className="h-[18px] w-[18px] object-contain" size={18} />
      <span>{label}</span>
    </Link>
  );
}

function DesktopTaskIcon({ href, icon, active }) {
  return (
    <Link
      href={href}
      aria-label="Desktop"
      title="Desktop"
      className={`taskbar-desktop-icon ${active ? "taskbar-desktop-icon-active" : ""}`}
    >
      <XPIcon type={icon} className="h-6 w-6 object-contain" size={24} />
    </Link>
  );
}

function Shortcut({ href, icon, label }) {
  return (
    <Link href={href} className="desktop-shortcut">
      <span className="desktop-icon">
        <XPIcon type={icon} className="h-[42px] w-[42px] object-contain" size={42} />
      </span>
      <span className="desktop-shortcut-label">{label}</span>
    </Link>
  );
}

function SocialButton({ href, label, icon }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="social-brand-link"
      aria-label={label}
      title={label}
    >
      <XPIcon type={icon} className="h-5 w-5 object-contain" size={20} />
    </a>
  );
}

export function DesktopShell({ title, currentPath, address, children, showWindow = true }) {
  return (
    <div className="desktop-wallpaper min-h-screen pb-28">
      <div className="mx-auto flex w-full max-w-[1440px] gap-4 px-1 py-3 sm:px-3 md:px-4">
        <aside className="hidden w-[96px] shrink-0 lg:block">
          <div className="sticky top-3 flex flex-col gap-10">
            {desktopShortcuts.map((shortcut) => (
              <Shortcut key={shortcut.href} {...shortcut} />
            ))}
          </div>
        </aside>

        <div className="flex-1">
          <div className="mb-4 flex gap-3 overflow-x-auto lg:hidden">
            {desktopShortcuts.map((shortcut) => (
              <Link key={shortcut.href} href={shortcut.href} className="desktop-quick-link">
                <XPIcon type={shortcut.icon} className="h-8 w-8 object-contain" size={32} />
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
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-3 px-2 py-1.5 sm:px-4">
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <DesktopTaskIcon
              href={navigation[0].href}
              icon={navigation[0].icon}
              active={currentPath === navigation[0].href}
            />

            <div className="taskbar-separator hidden sm:block" />

            <div className="flex flex-wrap items-center gap-3 px-1">
              {socialLinks.map((item) => (
                <SocialButton key={item.href} {...item} />
              ))}
            </div>

            <div className="taskbar-separator hidden sm:block" />

            <NavButton
              href={navigation[1].href}
              label={navigation[1].label}
              icon={navigation[1].icon}
              active={currentPath === navigation[1].href}
            />
          </div>

          <TaskbarClock />
        </div>
      </div>
    </div>
  );
}
