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
          <Card key={release.version} className="glass overflow-hidden flex flex-col transition-colors duration-300 hover:border-primary/30">
            <figure className="h-64 bg-muted/20 border-b border-card-border p-4">
              <img
                src={release.screens[release.screens.length - 1]?.src}
                alt={`${release.title} — ${release.screens[release.screens.length - 1]?.caption}`}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </figure>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="text-xs uppercase tracking-wide text-primary font-medium">
                  {release.version}
                </div>
                <div className="flex flex-wrap gap-2">
                  {release.surfaces.slice(0, 2).map((surface) => (
                    <Badge key={surface} variant="outline" className="border-primary/30">
                      {surface}
                    </Badge>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{release.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{release.summary}</p>

              <ul className="space-y-3 mb-6">
                {release.highlights.slice(0, 2).map((highlight) => (
                  <li key={highlight} className="flex items-start text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                    <span className="leading-relaxed text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>

              {release.caseStudySlug && (
                <Link
                  to={`/projects/${release.caseStudySlug}`}
                  className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read the related case study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ReleasesSection;
