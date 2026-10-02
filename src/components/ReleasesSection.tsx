import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { releases } from '@/lib/releases-data';

const ReleasesSection = () => (
  <section id="releases" className="portfolio-section bg-gradient-to-br from-background to-muted/10">
    <div className="portfolio-container">
      <div className="section-heading">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Selected <span className="bg-gradient-primary bg-clip-text text-transparent">Launches</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A concise record of releases I helped take from customer insight and requirements to
          validation, launch communication and adoption.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {releases.map((release) => (
          <Card key={release.slug} className="glass overflow-hidden flex flex-col transition-colors duration-300 hover:border-primary/30">
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide text-primary font-medium mb-2">
                    {release.version}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{release.title}</h3>
                </div>
                <img
                  src={release.screens[release.screens.length - 1]?.src}
                  alt={`${release.title} — ${release.screens[release.screens.length - 1]?.caption}`}
                  loading="lazy"
                  className="w-24 h-20 sm:w-28 sm:h-24 object-contain rounded-lg border border-card-border bg-muted/20 p-2 shrink-0"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {release.surfaces.slice(0, 2).map((surface) => (
                  <Badge key={surface} variant="outline" className="border-primary/30">
                    {surface}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5">{release.summary}</p>

              <ul className="space-y-3 mb-6">
                {release.highlights.slice(0, 2).map((highlight) => (
                  <li key={highlight} className="flex items-start text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                    <span className="leading-relaxed text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/launches/${release.slug}`}
                className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                View launch case study
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ReleasesSection;
