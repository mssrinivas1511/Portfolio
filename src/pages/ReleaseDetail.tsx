import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react';
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
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" aria-label="Back to home" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">MS</span>
            <span className="hidden sm:block text-sm text-muted-foreground">Product Portfolio</span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/#releases"><ArrowLeft className="w-4 h-4 mr-2" />All launches</Link>
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <Badge className="bg-primary/90 text-primary-foreground mb-4">{release.version}</Badge>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{release.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">{release.summary}</p>

        <Card className="glass p-5 mb-12 flex items-start gap-4">
          <Briefcase className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">My contribution</div>
            <p className="text-foreground">Discovery, requirements, prioritisation, cross-functional delivery, release validation and client launch communication.</p>
          </div>
        </Card>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">What shipped</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {release.highlights.map((highlight) => (
              <Card key={highlight} className="glass p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-2">Real release screens</h2>
          <p className="text-muted-foreground mb-6">Screens taken from the client release communication for this launch.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {release.screens.map((screen) => (
              <figure key={screen.src} className="glass rounded-lg overflow-hidden">
                <div className="h-72 bg-muted/20 p-5">
                  <img src={screen.src} alt={`${release.title} — ${screen.caption}`} className="w-full h-full object-contain" />
                </div>
                <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">{screen.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-2 mb-10">
          {release.surfaces.map((surface) => <Badge key={surface} variant="outline" className="border-primary/30">{surface}</Badge>)}
        </div>

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