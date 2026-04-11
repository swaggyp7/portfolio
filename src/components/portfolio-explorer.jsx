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
    <div
      className={`explorer-tree-item ${active ? "explorer-tree-item-active" : ""} ${indent ? "pl-10" : ""}`}
      style={
        active
          ? {
              color: "#ffffff",
              borderColor: "#5f86ad",
              background: "linear-gradient(180deg, #7ca6d1 0%, #5f86ad 100%)",
              boxShadow: "inset -1px -1px 0 rgba(40, 60, 90, 0.6), inset 1px 1px 0 rgba(255, 255, 255, 0.35)",
            }
          : { color: "var(--navy)" }
      }
    >
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
      <span className="explorer-icon-label" style={{ color: "var(--navy)" }}>{name}</span>
      {meta ? <span className="explorer-icon-meta" style={{ color: "var(--color-os-slate)" }}>{meta}</span> : null}
    </>
  );

  if (href) {
    return (
      <button
        type="button"
        onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
        className="explorer-icon-item"
      >
        {content}
      </button>
    );
  }

  return (
    <button type="button" onClick={onClick} className="explorer-icon-item">
      {content}
    </button>
  );
}

function ReadmeWindow({ project, onClose }) {
  const [tab, setTab] = useState("overview");

  if (!project) return null;

  const tabs = [
    { key: "overview", label: "Overview" },
    ...(project.features?.length ? [{ key: "features", label: "Features" }] : []),
    ...(project.responsibilities?.length
      ? [{ key: "responsibilities", label: "Responsibilities" }]
      : []),
    ...(project.results?.length ? [{ key: "results", label: "Results" }] : []),
  ];

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
          {tabs.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setTab(item.key)}
              className={`menu-tab ${tab === item.key ? "menu-tab-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="explorer-text-body">
          {tab === "overview" ? (
            <>
              <p><strong>Project:</strong> {project.name}</p>
              <p><strong>Description:</strong> {project.summary}</p>
              <p><strong>Tech Stack:</strong> {project.stack.join(" / ")}</p>
            </>
          ) : null}

          {tab === "responsibilities" && project.responsibilities?.length ? (
            <>
              <p><strong>Responsibilities:</strong></p>
              <ul className="list-disc pl-6">
                {project.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}

          {tab === "features" && project.features?.length ? (
            <>
              <p><strong>Features:</strong></p>
              <ul className="list-disc pl-6">
                {project.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}

          {tab === "results" && project.results?.length ? (
            <>
              <p><strong>Results:</strong></p>
              <ul className="list-disc pl-6">
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}
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
      <DesktopShell title="Project Explorer" currentPath="/portfolio" address={address}>
        <div className="mb-4 flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setSelectedSlug(null);
              setReadmeSlug(null);
            }}
            className="explorer-back-button"
            aria-label="Back to project directory"
            disabled={!selectedProject}
          >
            {"<"}
          </button>
          <span className="text-[1.45rem] leading-none text-os-slate">
            {selectedProject ? "Back to Projects (C:)" : "Projects Root"}
          </span>
        </div>

        <div
          className="explorer-surface"
          style={{
            borderColor: "#b8c8d6",
            background:
              "linear-gradient(180deg, rgba(220, 239, 255, 0.86), rgba(245, 248, 252, 0.95))",
          }}
        >
          <aside
            className="explorer-sidebar"
            style={{
              borderRightColor: "#b8c8d6",
              background: "rgba(255, 255, 255, 0.62)",
              color: "var(--navy)",
            }}
          >
            <div className="space-y-1">
              <TreeItem iconSrc="/xp-icons/computer.ico" label="This Computer" indent={false} />
              <TreeItem iconSrc="/xp-icons/folder.ico" label="Projects (C:)" active indent />
              <TreeItem iconSrc="/xp-icons/network.ico" label="Network" indent />
              <TreeItem iconSrc="/xp-icons/linux-penguin.svg" label="Linux" indent />
            </div>
          </aside>

          <section className="explorer-main" style={{ background: "transparent", color: "var(--navy)" }}>
            {!selectedProject ? (
              <div className="explorer-grid">
                {projects.map((project) => (
                  <IconEntry
                    key={project.slug}
                    iconSrc="/xp-icons/folder.ico"
                    name={project.name}
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
                  onClick={() => setReadmeSlug(selectedProject.slug)}
                  variant="file"
                />
                <IconEntry
                  iconSrc="/xp-icons/application.ico"
                  name="DEMO.exe"
                  href={selectedProject.demoUrl}
                  variant="file"
                />
              </div>
            )}
          </section>
        </div>
      </DesktopShell>

      <ReadmeWindow
        key={readmeProject?.slug ?? "empty"}
        project={readmeProject}
        onClose={() => setReadmeSlug(null)}
      />
    </>
  );
}
