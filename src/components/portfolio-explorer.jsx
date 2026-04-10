"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { DesktopShell } from "@/components/desktop-shell";

function XPImageIcon({ src, alt, className = "" }) {
  return <Image src={src} alt={alt} width={64} height={64} className={className} />;
}

function TreeItem({ iconSrc, label, active, indent = false }) {
  return (
    <div className={`explorer-tree-item ${active ? "explorer-tree-item-active" : ""} ${indent ? "pl-10" : ""}`}>
      <span className="inline-flex h-5 w-5 items-center justify-center">
        <XPImageIcon src={iconSrc} alt="" className="h-5 w-5 object-contain" />
      </span>
      <span>{label}</span>
    </div>
  );
}

function IconEntry({ iconSrc, name, meta, onClick, href, variant = "folder" }) {
  const content = (
    <>
      <span className={`explorer-icon-frame ${variant === "folder" ? "explorer-icon-frame-folder" : ""}`}>
        <XPImageIcon src={iconSrc} alt="" className="explorer-icon-image" />
      </span>
      <span className="explorer-icon-label">{name}</span>
      {meta ? <span className="explorer-icon-meta">{meta}</span> : null}
    </>
  );

  if (href) {
    if (href.startsWith("/")) {
      return <Link href={href} className="explorer-icon-item">{content}</Link>;
    }

    return (
      <a href={href} target="_blank" rel="noreferrer" className="explorer-icon-item">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="explorer-icon-item">
      {content}
    </button>
  );
}

function ReadmeWindow({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="explorer-modal-wrap" role="dialog" aria-modal="true" aria-label={`${project.name} README`}>
      <button type="button" className="explorer-modal-backdrop" onClick={onClose} aria-label="Close README" />
      <div className="explorer-text-window">
        <div className="title-bar">
          <div className="flex items-center gap-3">
            <span className="title-dot" />
            <span className="truncate">README.txt - {project.name}</span>
          </div>
          <button type="button" onClick={onClose} className="window-close-button" aria-label="Close README window">
            <span className="window-control danger">x</span>
          </button>
        </div>

        <div className="menu-bar">
          {["File", "Edit", "Search", "Help"].map((item) => (
            <span key={item} className="menu-link">
              {item}
            </span>
          ))}
        </div>

        <div className="explorer-text-body">
          <p><strong>Project:</strong> {project.name}</p>
          <p><strong>Description:</strong> {project.summary}</p>
          <p><strong>Tech Stack:</strong> {project.stack.join(" / ")}</p>
        </div>
      </div>
    </div>
  );
}

export function PortfolioExplorer({ projects }) {
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [readmeSlug, setReadmeSlug] = useState(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === selectedSlug) ?? null,
    [projects, selectedSlug]
  );
  const readmeProject = useMemo(
    () => projects.find((project) => project.slug === readmeSlug) ?? null,
    [projects, readmeSlug]
  );

  const address = selectedProject
    ? `C:\\Portfolio\\Projects\\${selectedProject.slug}\\`
    : "C:\\Portfolio\\Projects\\";

  function openProject(slug) {
    setSelectedSlug(slug);
    setReadmeSlug(null);
  }

  return (
    <>
      <DesktopShell
        title="Project Explorer"
        currentPath="/portfolio"
        address={address}
      >
        <div className="explorer-surface">
          <aside className="explorer-sidebar">
            <div className="explorer-sidebar-title">Folders</div>

            <div className="space-y-1">
              <TreeItem iconSrc="/xp-icons/computer.ico" label="This Portfolio" indent={false} />
              <TreeItem iconSrc="/xp-icons/folder.ico" label="Projects (C:)" active indent />
              <TreeItem iconSrc="/xp-icons/network.ico" label="Network" indent />
              <TreeItem iconSrc="/xp-icons/linux.ico" label="Linux" indent />
            </div>
          </aside>

          <section className="explorer-main">
            {!selectedProject ? (
              <div className="explorer-grid">
                {projects.map((project) => (
                  <IconEntry
                    key={project.slug}
                    iconSrc="/xp-icons/folder.ico"
                    name={project.name}
                    meta={project.year}
                    onClick={() => openProject(project.slug)}
                    variant="folder"
                  />
                ))}
              </div>
            ) : (
              <div className="explorer-grid explorer-grid-files">
                <IconEntry
                  iconSrc="/xp-icons/document.ico"
                  name="README.txt"
                  meta="Project description and tech stack"
                  onClick={() => setReadmeSlug(selectedProject.slug)}
                  variant="file"
                />
                <IconEntry
                  iconSrc="/xp-icons/application.ico"
                  name="DEMO.exe"
                  meta="Open online demo"
                  href={selectedProject.demoUrl}
                  variant="file"
                />
              </div>
            )}
          </section>
        </div>
      </DesktopShell>

      <ReadmeWindow project={readmeProject} onClose={() => setReadmeSlug(null)} />
    </>
  );
}
