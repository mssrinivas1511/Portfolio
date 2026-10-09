import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { customerAppCaseStudy, type Project } from '@/lib/projects-data';
import { BeforeAfterJourney, CustomerJourney } from '@/components/CaseStudyDiagrams';
import { siteConfig } from '@/lib/site-config';

interface CustomerAppProjectCaseStudyProps {
  project: Project;
}

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="max-w-[720px] space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start text-muted-foreground">
        <span className="mt-3 mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const CustomerAppProjectCaseStudy = ({ project }: CustomerAppProjectCaseStudyProps) => {
  const screens = [
    project.wireframe && { ...project.wireframe, label: 'Wireframes' },
    ...(project.hiFi?.map((screen) => ({ ...screen, label: 'Shipped product' })) ?? []),
  ].filter((screen): screen is { src: string; title: string; caption: string; label: string } => Boolean(screen));

  return (
    <>
      <Badge className="mb-4 bg-primary text-primary-foreground">{project.category}</Badge>
      <h1 className="mb-4">{project.title}</h1>
      <p className="mb-10 max-w-[720px] text-lg text-muted-foreground md:text-xl">{project.tagline}</p>

      <section className="mb-16" aria-labelledby="customer-app-tldr">
        <Card className="glass p-6 sm:p-8">
          <h2 id="customer-app-tldr" className="mb-6">TL;DR</h2>
          <dl className="grid gap-x-10 gap-y-5 md:grid-cols-2">
            {customerAppCaseStudy.tldr.map((item) => (
              <div key={item.label} className={item.label === 'Outcomes' ? 'md:col-span-2' : ''}>
                <dt className="eyebrow mb-1">{item.label}</dt>
                <dd className="text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </section>

      <div className="space-y-16">
        <section>
          <p className="eyebrow mb-2">Context</p>
          <h2 className="mb-4">The product and my role</h2>
          <p className="max-w-[720px] text-muted-foreground">{customerAppCaseStudy.context}</p>
        </section>

        <section>
          <h2 className="mb-4">The problem</h2>
          <BulletList items={customerAppCaseStudy.problem} />
        </section>

        <section>
          <h2 className="mb-6">Users</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {customerAppCaseStudy.users.map((user) => (
              <Card key={user.name} className="glass p-5">
                <h3 className="mb-2">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.need}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <p className="eyebrow mb-2">Key decision</p>
          <h2 className="mb-4">Sales Territory → Delivery Address</h2>
          <p className="mb-7 max-w-[720px] text-muted-foreground">{customerAppCaseStudy.decision.intro}</p>
          <BeforeAfterJourney />
          <p className="mt-6 max-w-[720px] font-medium text-foreground">{customerAppCaseStudy.decision.outcome}</p>
        </section>

        <section>
          <h2 className="mb-5">Trade-offs</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {customerAppCaseStudy.tradeoffs.map((tradeoff) => (
              <Card key={tradeoff} className="glass p-5 text-muted-foreground">{tradeoff}</Card>
            ))}
          </div>
        </section>

        <section>
          <p className="eyebrow mb-2">Phase 1 and Phase 2</p>
          <h2 className="mb-4">Other improvements</h2>
          <BulletList items={customerAppCaseStudy.improvements} />
        </section>

        <section>
          <h2 className="mb-4">Payment experience & status clarity</h2>
          <p className="mb-5 max-w-[720px] text-muted-foreground">Payment screens are a high-risk conversion point, so I focused the redesign on making what the customer is paying, how much, and what happens next immediately clear.</p>
          <BulletList items={customerAppCaseStudy.payments} />
        </section>

        <section>
          <h2 className="mb-4">Customer journey</h2>
          <CustomerJourney />
        </section>

        <section>
          <h2 className="mb-2">From wireframes to shipped product</h2>
          <p className="mb-6 max-w-[720px] text-muted-foreground">Early customer-journey wireframes followed by the real experiences released to customers.</p>
          <div className="grid gap-5 lg:grid-cols-3">
            {screens.map((screen) => (
              <figure key={screen.src} className="glass overflow-hidden">
                <div className="flex h-80 items-center justify-center bg-muted/30 p-5">
                  <div className="flex h-full max-w-full items-center justify-center overflow-hidden rounded-[24px] border-[5px] border-foreground/90 bg-card">
                    <img
                      src={screen.src}
                       alt={`${project.title} ${screen.label.toLowerCase()} — ${screen.title}, product work by ${siteConfig.name}`}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="h-full w-auto max-w-full object-contain"
                    />
                  </div>
                </div>
                <figcaption className="p-5">
                  <p className="eyebrow mb-1">{screen.label}</p>
                  <h3 className="mb-1">{screen.title}</h3>
                  <p className="text-sm text-muted-foreground">{screen.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6">Measurement</h2>
          <div className="max-w-[720px] divide-y divide-border border-y border-border">
            {customerAppCaseStudy.measurements.map((measurement) => (
              <div key={measurement.name} className="py-4 sm:grid sm:grid-cols-[200px_1fr] sm:gap-6">
                <h3 className="text-base">{measurement.name}</h3>
                <p className="text-muted-foreground">{measurement.definition}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6">Results</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {customerAppCaseStudy.results.map((result) => (
              <Card key={result.label} className="glass p-6">
                <p className="mb-2 text-3xl font-bold text-primary">{result.value}</p>
                <p className="text-sm text-muted-foreground">{result.label}</p>
              </Card>
            ))}
          </div>
          <p className="mt-6 max-w-[720px] text-muted-foreground">After these releases, customer-reported issues fell ~30% and adoption of shipped features rose ~25%.</p>
        </section>

        <section>
          <h2 className="mb-4">What I learned</h2>
          <BulletList items={customerAppCaseStudy.learnings} />
        </section>

        <section className="pb-8">
          <h2 className="mb-5">Toolkit</h2>
          <div className="mb-10 flex flex-wrap gap-2">
            {customerAppCaseStudy.toolkit.map((tool) => (
              <Badge key={tool} variant="outline" className="border-primary/30">{tool}</Badge>
            ))}
          </div>
          <Link to="/projects/rekart-whatsapp-ai-assistant" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            Next case study: Rekart WhatsApp AI Assistant
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </>
  );
};

export default CustomerAppProjectCaseStudy;