import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, Rocket } from 'lucide-react';
import { releases } from '@/lib/releases-data';

const ReleasesSection = () => (
  <section id="releases" className="py-24 bg-gradient-to-br from-background to-muted/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Shipped <span className="bg-gradient-primary bg-clip-text text-transparent">Releases</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Real Rekart releases I shipped and announced to national and international clients —
          the actual features, the actual screens.
        </p>
      </div>

      <div className="space-y-10">
        {releases.map((release) => (
          <Card key={release.version} className="glass p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0">
                  <Rocket className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-primary font-medium mb-1">
                    {release.version}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{release.title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {release.surfaces.map((s) => (
                  <Badge key={s} variant="outline" className="border-primary/30 self-start">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{release.summary}</p>

            <div className="grid lg:grid-cols-2 gap-8">
              <ul className="space-y-3">
                {release.highlights.map((h) => (
                  <li key={h} className="flex items-start text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                    <span className="leading-relaxed text-sm">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-4">
                {release.screens.map((screen) => (
                  <figure
                    key={screen.src}
                    className="rounded-xl overflow-hidden border border-card-border bg-muted/20"
                  >
                    <img
                      src={screen.src}
                      alt={`${release.title} — ${screen.caption}`}
                      loading="lazy"
                      className="w-full h-56 object-cover object-top"
                    />
                    <figcaption className="p-3 text-xs text-muted-foreground leading-relaxed">
                      {screen.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {release.caseStudySlug && (
              <Link
                to={`/projects/${release.caseStudySlug}`}
                className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read the full case study
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            )}
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ReleasesSection;
