import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  CircleOff,
  ClipboardCheck,
  ListChecks,
  Target,
  Users,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { releases } from '@/lib/releases-data';
import { siteConfig } from '@/lib/site-config';

const ReleaseDetail = () => {
  const { slug } = useParams();
  const release = releases.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (release) document.title = `${release.title} — ${siteConfig.name}`;
  }, [release]);

  if (!release) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-3xl font-bold">Launch not found</h1>
        <Button variant="hero" asChild><Link to="/#releases">Back to launches</Link></Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="glass-nav sticky top-0 z-50">
        <div className="portfolio-container h-16 flex items-center justify-between">
          <Link to="/" aria-label="Back to home" className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-semibold text-foreground sm:text-base">Manda Sai Srinivas</span>
            <span className="truncate text-[11px] text-muted-foreground sm:text-xs">Associate Product Manager</span>
          </Link>
          <Link to="/#releases" className="ml-4 inline-flex shrink-0 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            All launches
          </Link>
        </div>
      </header>

      <main className="portfolio-container py-12 md:py-16">
        <Badge className="bg-primary/90 text-primary-foreground mb-4">{release.version}</Badge>
        <h1 className="text-3xl font-bold mb-4">{release.title}</h1>
        <p className="max-w-[720px] text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">{release.summary}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {release.surfaces.map((surface) => (
            <Badge key={surface} variant="outline" className="border-primary/30">{surface}</Badge>
          ))}
        </div>

        <Card className="glass p-6 mb-14 flex items-start gap-4">
          <Briefcase className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">My contribution</div>
            <p className="max-w-[720px] text-foreground">Discovery, requirements, prioritisation, cross-functional delivery, release validation and client launch communication.</p>
          </div>
        </Card>

        <section className="mb-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <Card className="glass p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">The actual problem</h2>
            </div>
            <p className="max-w-[720px] text-muted-foreground leading-relaxed">{release.problem}</p>
          </Card>
          <Card className="glass p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Primary user personas</h2>
            </div>
            <div className="space-y-4">
              {release.personas.map((persona) => (
                <div key={persona.name}>
                  <h3 className="font-semibold text-foreground mb-1">{persona.name}</h3>
                  <p className="max-w-[720px] text-sm text-muted-foreground leading-relaxed">{persona.need}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardCheck className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Requirements and product decisions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {release.requirements.map((requirement) => (
              <Card key={requirement} className="glass p-5">
                <p className="max-w-[720px] text-sm text-muted-foreground leading-relaxed">{requirement}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="glass p-6">
              <div className="flex items-center gap-3 mb-5">
                <ListChecks className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">In scope</h2>
              </div>
              <ul className="space-y-3">
                {release.scope.map((item) => (
                  <li key={item} className="flex items-start text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-3 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="glass p-6">
              <div className="flex items-center gap-3 mb-5">
                <CircleOff className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-2xl font-bold">Out of scope</h2>
              </div>
              <ul className="space-y-3">
                {release.outOfScope.map((item) => (
                  <li key={item} className="flex items-start text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 mr-3 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">Functional requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {release.functionalRequirements.map((requirement, index) => (
              <Card key={requirement} className="glass p-5 flex items-start gap-4">
                <span className="w-7 h-7 rounded-md bg-primary/15 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="max-w-[720px] text-sm text-muted-foreground leading-relaxed">{requirement}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-2">Shipped solution</h2>
          <p className="max-w-[720px] text-muted-foreground mb-6 max-w-3xl">Verified capabilities documented in the client release communication.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {release.highlights.map((highlight) => (
              <Card key={highlight} className="glass p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="max-w-[720px] text-sm text-muted-foreground leading-relaxed">{highlight}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-2">Release evidence</h2>
          <p className="max-w-[720px] text-muted-foreground mb-6">Original product screens from the newsletters shared with clients.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {release.screens.map((screen) => (
              <figure key={screen.src} className="glass rounded-lg overflow-hidden">
                <div className="h-80 md:h-[28rem] bg-muted/20 p-5 flex items-center justify-center">
                  <img
                    src={screen.src}
                    alt={`${release.title} — ${screen.caption}`}
                    loading="lazy"
                    className="w-auto h-full max-w-full object-contain"
                  />
                </div>
                <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">{screen.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">My product process</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {release.process.map((step, index) => (
              <Card key={step} className="glass p-5 flex items-start gap-4">
                <span className="w-8 h-8 rounded-md bg-secondary/20 text-foreground text-sm font-bold flex items-center justify-center shrink-0">{index + 1}</span>
                <p className="max-w-[720px] text-sm text-muted-foreground leading-relaxed">{step}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Success metrics and KPIs</h2>
          </div>
          <p className="max-w-[720px] text-muted-foreground mb-6 max-w-3xl">Measurement framework for evaluating adoption and operational impact. Values are not shown where the supplied release notes did not include measured results.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {release.successMetrics.map((item) => (
              <Card key={item.metric} className="glass p-5">
                <h3 className="font-semibold text-foreground mb-2">{item.metric}</h3>
                <p className="max-w-[720px] text-sm text-muted-foreground leading-relaxed">{item.signal}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card className="glass p-6 md:p-8 border-primary/20">
            <div className="text-xs uppercase tracking-wide text-primary font-medium mb-2">Outcome</div>
            <p className="max-w-[720px] text-lg text-foreground leading-relaxed">{release.outcome}</p>
          </Card>
        </section>

        {release.caseStudySlug && (
          <Button variant="hero" size="lg" asChild>
            <Link to={`/projects/${release.caseStudySlug}`}>Read the broader product case study<ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        )}
      </main>
    </div>
  );
};

export default ReleaseDetail;