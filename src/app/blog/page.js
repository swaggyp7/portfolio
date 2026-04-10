import { DesktopShell } from "@/components/desktop-shell";
import { blogPosts } from "@/lib/site-data";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <DesktopShell title="Blog" currentPath="/blog" address="yuteng://desktop/blog">
      <div className="space-y-5">
        <section className="blog-hero">
          <div className="max-w-3xl">
            <div className="font-display text-[12px] uppercase tracking-[0.2em] text-white/75">[theBlog]</div>
            <h1 className="mt-4 font-display text-[18px] leading-[1.55] text-white">
              Notes on product work, debugging, and building software that stays usable after the first release.
            </h1>
          </div>
        </section>

        <section className="retro-panel retro-panel-blue">
          <div className="panel-title">Welcome to TheBlog!</div>
          <div className="panel-body space-y-4 text-[1.7rem] leading-[1.08] text-os-slate">
            <p>
              This section is a writing archive for the parts of engineering work that rarely fit inside a screenshot:
              the bug hunts, the tradeoffs in internal tools, and the small decisions that make delivery smoother for the whole team.
            </p>
            <p>
              The visual language is intentionally nostalgic, but the topics are current: modern product work, clearer
              systems, and the behind-the-scenes craft that makes a web app feel reliable.
            </p>
          </div>
        </section>

        <div className="grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
          <section className="space-y-5">
            {blogPosts.map((post) => (
              <article key={post.title} className="post-card">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="status-pill">{post.tag}</span>
                  <span className="font-display text-[10px] uppercase tracking-[0.16em] text-os-blue">
                    {post.date}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-[14px] leading-[1.55] text-os-navy">{post.title}</h2>
                <p className="mt-4 text-[1.65rem] leading-[1.08] text-os-slate">{post.excerpt}</p>
              </article>
            ))}
          </section>

          <aside className="space-y-5">
            <section className="retro-panel retro-panel-purple">
              <div className="panel-title">Topics</div>
              <div className="panel-body space-y-3 text-[1.6rem] leading-[1.05] text-os-slate">
                <div className="list-row"><span className="list-bullet" />UI architecture</div>
                <div className="list-row"><span className="list-bullet" />SQL performance</div>
                <div className="list-row"><span className="list-bullet" />Production debugging</div>
                <div className="list-row"><span className="list-bullet" />Internal tools</div>
              </div>
            </section>

            <section className="retro-panel retro-panel-green">
              <div className="panel-title">Newsletter</div>
              <div className="panel-body text-[1.6rem] leading-[1.08] text-os-slate">
                No mailing list yet. For now, the fastest way to reach me is still email. If you want to talk shop, the Contact page is one click away.
              </div>
            </section>
          </aside>
        </div>
      </div>
    </DesktopShell>
  );
}
