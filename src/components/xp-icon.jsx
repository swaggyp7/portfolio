import Image from "next/image";

const iconMap = {
  computer: "/xp-icons/computer.ico",
  folder: "/xp-icons/folder.ico",
  "folder-open": "/xp-icons/folder-open.ico",
  mail: "/xp-icons/documents.ico",
  home: "/xp-icons/desktop.ico",
  pencil: "/xp-icons/folder-open.ico",
  blog: "/xp-icons/notepad.ico",
  chat: "/xp-icons/internet.ico",
  exe: "/xp-icons/application.ico",
  file: "/xp-icons/document.ico",
  refresh: "/xp-icons/update.ico",
  resume: "/xp-icons/documents.ico",
  network: "/xp-icons/network.ico",
  globe: "/xp-icons/globe.ico",
  linux: "/xp-icons/linux-penguin.svg",
  linkedin: "/xp-icons/globe.ico",
  github: "/xp-icons/globe.ico",
  email: "/xp-icons/documents.ico",
  "github-brand": "/brands/github.svg",
  "linkedin-brand": "/brands/linkedin.svg",
  "gmail-brand": "/brands/gmail.svg",
};

export function XPIcon({ type, alt = "", className = "", size = 64 }) {
  const src = iconMap[type] ?? iconMap.file;

  return <Image src={src} alt={alt} width={size} height={size} className={className} />;
}
