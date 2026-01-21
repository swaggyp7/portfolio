import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {PROFILE, MAIN_SKILLS, SKILLS, EXPERIENCE, PROJECTS, EDUCATION, SECTIONS} from './data'

function cx(...xs) {
  return xs.filter(Boolean).join(" ");
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || "about");

  useEffect(() => {
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      {
        threshold: [0.15, 0.25, 0.4, 0.6],
        rootMargin: "-10% 0px -70% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds.join("|")]);

  return active;
}

function Card({ id, className, children, ...rest }) {
  return (
    <section id={id} className={cx("card", className)} {...rest}>
      {children}
    </section>
  );
}

function Button({ href, children, variant = "default" }) {
  const isHash = href?.startsWith("#");
  return (
    <a
      className={cx("btn", variant === "primary" && "primary")}
      href={href}
      target={!isHash ? "_blank" : undefined}
      rel={!isHash ? "noreferrer" : undefined}
      onClick={(e) => {
        if (isHash) {
          e.preventDefault();
          scrollToId(href.slice(1));
        }
      }}
    >
      {children}
    </a>
  );
}

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function ProjectGallery({ title, images = [] }) {
  const portalRoot = typeof document !== "undefined" ? document.body : null;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const shown = images.slice(0, 4);
  const remaining = images.length - shown.length;

  function openAt(i) {
    setIndex(i);
    setOpen(true);
  }

  function close() {
    setOpen(false);
  }

  function prev() {
    setIndex((v) => (v - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((v) => (v + 1) % images.length);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  useEffect(() => {
    if (!open) return;
    if (!portalRoot) return;

    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;

    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [open, portalRoot]);

  if (!images.length) return null;

  return (
    <>
      <div className="gallery">
        <div className="galleryGrid">
          {shown.map((src, i) => {
            const isLast = i === shown.length - 1 && remaining > 0;
            return (
              <button
                key={src + i}
                className="thumb"
                type="button"
                onClick={() => openAt(i)}
                aria-label={`Open screenshot ${i + 1} of ${images.length}`}
              >
                <img src={src} alt={`${title} screenshot ${i + 1}`} loading="lazy" />
                {isLast && <span className="moreOverlay">+{remaining}</span>}
              </button>
            );
          })}
        </div>
        <div className="galleryHint">Click images to view · {images.length} screenshots</div>
      </div>

      {open && portalRoot &&
        createPortal(
          <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} screenshots`}>
            <button className="lightboxBackdrop" type="button" onClick={close} aria-label="Close" />

            <div className="lightboxBody">
              <div className="lightboxTop">
                <div className="lightboxTitle">{title}</div>
                <div className="lightboxMeta mono">
                  {index + 1} / {images.length}
                </div>
                <button className="lightboxClose" type="button" onClick={close} aria-label="Close">
                  ✕
                </button>
              </div>

              <div className="lightboxMain">
                <button className="navBtn" type="button" onClick={prev} aria-label="Previous">
                  ‹
                </button>
                <img className="lightboxImg" src={images[index]} alt={`${title} screenshot ${index + 1}`} />
                <button className="navBtn" type="button" onClick={next} aria-label="Next">
                  ›
                </button>
              </div>

              <div className="lightboxThumbs" aria-label="Thumbnails">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    className={cx("miniThumb", i === index && "miniThumbActive")}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to screenshot ${i + 1}`}
                  >
                    <img src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>,
          portalRoot
        )}
    </>
  );
}

function ProjectDetails({ project }) {
  const sections = useMemo(
    () => [
      { key: "intro", label: "Intro", type: "text" },
      { key: "challenges", label: "Challenge", type: "list" },
      { key: "whatIDid", label: "What I did", type: "list" },
      { key: "results", label: "Result", type: "list" },
    ],
    []
  );

  const [open, setOpen] = useState("intro");

  function toggle(key) {
    setOpen((v) => (v === key ? "" : key));
  }

  function renderBody(s) {
    if (s.type === "text") {
      const val = project[s.key] || "—";
      return (
        <ul className="plist pFade">
          <li>{val}</li>
        </ul>
      );
    }
    const arr = project[s.key] || [];
    if (!arr.length) return <p className="muted pFade">—</p>;
    return (
      <ul className="plist pFade">
        {arr.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="pdetails">
      {sections.map((s) => (
        <div key={s.key} className={cx("acc", open === s.key && "accOpen")}>
          <button
            className="accBtn"
            type="button"
            onClick={() => toggle(s.key)}
            aria-expanded={open === s.key}
          >
            <span>{s.label}</span>
            <span className={cx("chev", open === s.key && "chevOpen")} aria-hidden="true">
              <svg className="chevIcon" viewBox="0 0 24 24" width="14" height="14" focusable="false" aria-hidden="true">
                <path d="M8.5 10l3.5 4 3.5-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          <div className="accPanel" aria-hidden={open !== s.key}>
            <div className="accInner">{renderBody(s)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const sectionIds = useMemo(() => SECTIONS.map((s) => s.id), []);
  const active = useActiveSection(sectionIds);

  // reveal-on-scroll + reduced-motion friendly (with safe fallback so content never stays hidden)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const revealAll = () => els.forEach((el) => el.classList.add("revealIn"));

    if (prefersReduced) {
      revealAll();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealIn");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-5% 0px -10% 0px" }
    );

    els.forEach((el) => io.observe(el));

    const t = window.setTimeout(() => {
      const anyVisible = els.some((el) => el.classList.contains("revealIn"));
      if (!anyVisible) revealAll();
    }, 700);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return (
    <div className="page" id="top">
      <header className="nav">
        <div className="navInner">
          <div className="brand" role="button" tabIndex={0} onClick={() => scrollToId("top")}
               onKeyDown={(e)=>{ if(e.key==="Enter") scrollToId("top"); }}>
            <div className="logo" aria-hidden="true" />
            <div>
              <div className="brandName">{PROFILE.name}</div>
              <div className="brandMeta">{PROFILE.title} · {PROFILE.location}</div>
            </div>
          </div>

          <nav className="navLinks" aria-label="primary">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                className={cx("pill", active === s.id && "pillActive")}
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(s.id);
                }}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero reveal" data-reveal>
          <div className="card heroLeft hoverCard reveal" data-reveal>
            <div className="kicker">
              {PROFILE.highlights.map((h) => (
                <span className="badge" key={h}>{h}</span>
              ))}
            </div>

            <h1>{PROFILE.heroTitle}</h1>
            <p className="subtitle">{PROFILE.summary}</p>

            <div className="ctaRow">
              <Button href="#projects" variant="primary">View Projects</Button>
              <Button href="#contact">Contact Me</Button>
              <Button href={PROFILE.links.resume}>Download Résumé</Button>
            </div>

            <div className="hr" />
            <p className="muted smallText">{PROFILE.interests}</p>
          </div>

          <aside className="card heroRight hoverCard reveal" data-reveal>
            <div className="stat">
              <b>{PROFILE.location}</b>
              <span>Open to local roles · Canada</span>
            </div>
            <div className="stat">
              <b>Full-stack skill set</b>
              <span>TypeScript · Vue/React · Node/PHP · SQL</span>
            </div>
            <div className="stat">
              <b>Real-world delivery</b>
              <span>Agile sprints · Production debugging · Documentation</span>
            </div>
            <div className="stat">
              <b>Contact</b>
              <span className="mono">{PROFILE.email} · {PROFILE.phone}</span>
            </div>
          </aside>
        </section>

        <Card id="about" className="section hoverCard reveal" data-reveal>
          <h2>About</h2>
          <div className="twoCol">
            <div>
              <p className="muted" style={{ marginTop: -2 }}>
                {PROFILE.summary}
              </p>
              <p className="muted" style={{ marginTop: 10 }}>
                I like working on real products: building features end-to-end, keeping UI consistent with reusable components, optimizing API/SQL performance, and debugging production issues.
              </p>
            </div>
            <div className="item" style={{ padding: 14 }}>
              <div className="itemTop" style={{ marginBottom: 6 }}>
                <b>What I bring</b>
                <em className="mono">Fast ramp-up</em>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
                <li>4 years delivering web & internal tools (Vue/React/Node/PHP/SQL)</li>
                <li>Strong debugging: logs, stack traces, reproduction, fix + verification</li>
                <li>Performance mindset: indexing, caching, profiling, and clean UI state</li>
                <li>Clear communication: docs, handoffs, and collaboration in sprints</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card id="skills" className="section hoverCard reveal" data-reveal>
          <h2>Technical Skills</h2>
          <p className="muted" style={{ marginTop: -2 }}>
            Core stack proficiency (self-assessed).
          </p>

          <div className="skillBars">
            {MAIN_SKILLS.map((s) => (
              <div className="barRow" key={s.name} style={{ "--w": `${s.level}%` }}>
                <div className="barTop">
                  <span className="barLabel">{s.name}</span>
                  <span className="barValue mono">{s.level}%</span>
                </div>
                <div className="barTrack" aria-label={`${s.name} proficiency ${s.level}%`} role="img">
                  <div className="barFill" />
                </div>
              </div>
            ))}
          </div>

          <div className="twoCol" style={{ marginTop: 14 }}>
            {SKILLS.map((g) => (
              <div className="skillGroup" key={g.group}>
                <p className="muted">
                  <b>{g.group}</b>
                </p>
                <div className="chips">
                  {g.items.map((it) => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card id="projects" className="section hoverCard reveal" data-reveal>
          <div className="sectionHeader">
            <h2>Project Highlights</h2>
          </div>

          <div className="projGrid">
            {PROJECTS.map((p) => (
              <article className="proj hoverCard reveal" data-reveal key={p.name}>
                <div className="projLayout">
                  {/* Left: Project info */}
                  <div className="projInfo">
                    <div className="projHead">
                      <div>
                        <h3>{p.name}</h3>
                        <div className="meta mono">{p.stack}</div>
                      </div>
                    </div>

                    <ProjectDetails project={p} />

                    <div className="tags">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>

                  <div className="projMedia">
                    {p.images?.length ? (
                      <>
                        <div className="mediaTitle">Screenshots</div>
                        <ProjectGallery title={p.name} images={p.images} />
                      </>
                    ) : (
                      <div className="noShots">
                        <div className="mediaTitle">Backend project</div>
                        <p className="muted">
                          No UI screenshots for this one. It’s a crawler + reporting pipeline. I can share sample CSV/Excel outputs and the data model on request.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Card>

        <Card id="experience" className="section hoverCard reveal" data-reveal>
          <h2>Experience</h2>
          <div className="timeline">
            {EXPERIENCE.map((x) => (
              <div className="item" key={`${x.company}-${x.role}`}> 
                <div className="itemTop">
                  <b>
                    {x.role} · {x.company}
                  </b>
                  <em className="mono">
                    {x.period} · {x.location}
                  </em>
                </div>
                <ul>
                  {x.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card id="education" className="section hoverCard reveal" data-reveal>
          <h2>Education</h2>
          <div className="timeline">
            {EDUCATION.map((e) => (
              <div className="item" key={`${e.school}-${e.program}`}>
                <div className="itemTop">
                  <b>{e.program} · {e.school}</b>
                  <em className="mono">{e.period ? `${e.period} · ` : ""}{e.location}</em>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card id="contact" className="section hoverCard reveal" data-reveal>
          <h2>Contact</h2>
          <p className="muted">Best way to reach me is email. I’m happy to share more project details, code samples, and discuss how I can help your team.</p>

          <div className="ctaRow" style={{ marginTop: 14 }}>
            <a className="btn primary" href={`mailto:${PROFILE.email}`}>Email: {PROFILE.email}</a>
            <a className="btn" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={PROFILE.links.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </Card>

        <footer className="footer">© {new Date().getFullYear()} {PROFILE.name} · Built with React</footer>
      </main>
    </div>
  );
}
