import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Briefcase, Mail, Package, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getProjectBySlug, projects } from '@/lib/projects-data';
import { siteConfig } from '@/lib/site-config';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (project) {
      document.title = `${project.title} — ${siteConfig.name}`;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', project.tagline);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Button variant="hero" asChild>
          <Link to="/#projects">Back to projects</Link>
        </Button>
      </div>
    );
  }

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="glass-nav sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" aria-label="Back to home" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
              MS
            </span>
            <span className="hidden sm:block text-sm text-muted-foreground">
              Product Portfolio
            </span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              All projects
            </Link>
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <Badge className="bg-primary/90 text-primary-foreground mb-4">{project.category}</Badge>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl">{project.tagline}</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <Card className="glass p-4 flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">My role</div>
              <div className="font-medium">{project.role}</div>
            </div>
          </Card>
          <Card className="glass p-4 flex items-start gap-3">
            <Package className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Product</div>
              <div className="font-medium">{project.product}</div>
            </div>
          </Card>
        </div>

        <div className="h-72 md:h-96 rounded-lg border border-card-border bg-muted/20 p-6 mb-10 flex items-center justify-center">
          <img
            src={project.image}
            alt={`${project.title} — high-fidelity product screen by ${siteConfig.name}`}
            width={1200}
            height={800}
            className="w-auto h-full max-w-full object-contain"
          />
        </div>

        {project.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {project.metrics.map((m) => (
              <Card key={m.label} className="glass p-6 text-center">
                <div className="text-3xl font-bold text-primary">
                  {m.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
              </Card>
            ))}
          </div>
        )}

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">From wireframes to shipped product</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            How the work moved from early flows to the real screens released to customers and clients.
          </p>

          {project.wireframe && (
            <figure className="glass rounded-lg overflow-hidden mb-6">
              <div className="h-72 md:h-96 bg-muted/20 p-5 flex items-center justify-center">
                <img
                  src={project.wireframe.src}
                  alt={`${project.title} wireframe — ${project.wireframe.title}`}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="w-auto h-full max-w-full object-contain"
                />
              </div>
              <figcaption className="p-5">
                <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                  Wireframe
                </div>
                <div className="font-medium text-foreground mb-1">{project.wireframe.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.wireframe.caption}
                </p>
              </figcaption>
            </figure>
          )}

          {project.hiFi && (
            <div className="grid md:grid-cols-2 gap-6">
              {project.hiFi.map((wf) => (
                <figure key={wf.src} className="glass rounded-lg overflow-hidden">
                  <div className="h-80 md:h-[26rem] bg-muted/20 p-5 flex items-center justify-center">
                    <img
                      src={wf.src}
                      alt={`${project.title} shipped product screen — ${wf.title}`}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="w-auto h-full max-w-full object-contain"
                    />
                  </div>
                  <figcaption className="p-5">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                       Shipped product
                    </div>
                    <div className="font-medium text-foreground mb-1">{wf.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{wf.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="space-y-4">
            {project.overview.map((p) => (
              <p key={p} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Sections */}
        <div className="space-y-12">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>
              {section.intro && (
                <p className="text-muted-foreground leading-relaxed mb-4">{section.intro}</p>
              )}
              {section.bullets && (
                <ul className="space-y-3">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.flow && (
                <Card className="glass mt-4 p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed">
                    {section.flow}
                  </pre>
                </Card>
              )}
            </section>
          ))}
        </div>

        {/* Responsibilities */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">What I owned</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.responsibilities.map((r) => (
              <Card key={r} className="glass p-4 text-sm text-muted-foreground leading-relaxed">
                {r}
              </Card>
            ))}
          </div>
        </section>

        {/* Impact + tools */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Impact & toolkit</h2>
          <Card className="glass p-6">
            <div className="flex items-start mb-6">
              <TrendingUp className="w-5 h-5 mr-3 mt-0.5 text-accent shrink-0" />
              <p className="text-muted-foreground">{project.impact}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((t) => (
                <Badge key={t} variant="outline" className="border-primary/30">
                  {t}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((s) => (
                <Badge key={s} className="bg-secondary/20 text-foreground">
                  {s}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        {/* Next / CTA */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Want to go deeper?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(project.title)}`}>
                <Mail className="w-5 h-5 mr-2" />
                Talk about this project
              </a>
            </Button>
            {others.map((o) => (
              <Button key={o.slug} variant="outline" size="lg" asChild>
                <Link to={`/projects/${o.slug}`}>
                  {o.title}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
