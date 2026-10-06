import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { type Project, whatsappCaseStudy } from '@/lib/projects-data';

interface WhatsappProjectCaseStudyProps {
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

const FlowDiagram = ({ flow }: { flow?: string }) => {
  if (!flow) return null;

  return (
    <Card className="glass mt-5 overflow-x-auto p-5 sm:p-7">
      <pre className="min-w-max text-xs leading-relaxed text-muted-foreground sm:text-sm">
        {flow}
      </pre>
    </Card>
  );
};

const WhatsappProjectCaseStudy = ({ project }: WhatsappProjectCaseStudyProps) => {
  const problem = project.sections.find((section) => section.heading === 'The problem');
  const architecture = project.sections.find((section) => section.heading === 'Conversational architecture I defined');
  const phaseOne = project.sections.find((section) => section.heading === 'Phase 1 — Core self-service');
  const phaseTwo = project.sections.find((section) => section.heading === 'Phase 2 — Expanding the conversational journey');
  const failureLoop = project.sections.find((section) => section.heading === 'Failure handling & continuous improvement loop');
  const goToMarket = project.sections.find((section) => section.heading === 'Go-to-market');
  const screens = [
    project.wireframe && { ...project.wireframe, label: 'Wireframe' },
    ...(project.hiFi?.map((screen) => ({ ...screen, label: 'Shipped product' })) ?? []),
  ].filter((screen): screen is { src: string; title: string; caption: string; label: string } => Boolean(screen));

  return (
    <>
      <Badge className="mb-4 bg-primary text-primary-foreground">{project.category}</Badge>
      <h1 className="mb-4">{project.title}</h1>
      <p className="mb-10 max-w-[720px] text-lg text-muted-foreground md:text-xl">{project.tagline}</p>

      <section className="mb-16" aria-labelledby="tldr-heading">
        <Card className="glass p-6 sm:p-8">
          <h2 id="tldr-heading" className="mb-6">TL;DR</h2>
          <dl className="grid gap-x-10 gap-y-5 md:grid-cols-2">
            {whatsappCaseStudy.tldr.map((item) => (
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
          <h2 className="mb-4">Overview</h2>
          <p className="max-w-[720px] text-muted-foreground">{whatsappCaseStudy.context}</p>
        </section>

        <section>
          <h2 className="mb-4">The problem</h2>
          {problem?.intro && <p className="mb-5 max-w-[720px] text-muted-foreground">{problem.intro}</p>}
          {problem?.bullets && <BulletList items={problem.bullets} />}
        </section>

        <section>
          <h2 className="mb-6">Users</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {whatsappCaseStudy.users.map((user) => (
              <Card key={user.name} className="glass p-5">
                <h3 className="mb-2">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.need}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="glass p-6">
              <h3 className="mb-4">In scope</h3>
              <BulletList items={whatsappCaseStudy.scope} />
            </Card>
            <Card className="glass p-6">
              <h3 className="mb-4">Out of scope</h3>
              <BulletList items={whatsappCaseStudy.outOfScope} />
            </Card>
          </div>
        </section>

        <section>
          <p className="eyebrow mb-2">Discovery</p>
          <h2 className="mb-4">Why these workflows first</h2>
          <BulletList items={whatsappCaseStudy.discovery} />
        </section>

        <section>
          <h2 className="mb-5">Key product decisions & trade-offs</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {whatsappCaseStudy.decisions.map((decision) => (
              <Card key={decision} className="glass p-5 text-muted-foreground">
                {decision}
              </Card>
            ))}
          </div>
        </section>

        <section>
          <p className="eyebrow mb-2">Solution</p>
          <h2 className="mb-6">Phase 1 and Phase 2</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[phaseOne, phaseTwo].map((phase) => phase && (
              <Card key={phase.heading} className="glass p-6">
                <h3 className="mb-2">{phase.heading}</h3>
                {phase.intro && <p className="mb-4 text-sm text-muted-foreground">{phase.intro}</p>}
                {phase.bullets && <BulletList items={phase.bullets} />}
              </Card>
            ))}
          </div>
          <h3 className="mt-10 mb-4">Functional requirements</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {whatsappCaseStudy.functionalRequirements.map((requirement, index) => (
              <Card key={requirement} className="glass flex items-start gap-4 p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-muted-foreground">{requirement}</p>
              </Card>
            ))}
          </div>
          <h3 className="mt-10 mb-2">Conversational architecture</h3>
          <p className="max-w-[720px] text-muted-foreground">How a customer message moves from intent detection to a confirmed Rekart action.</p>
          <FlowDiagram flow={architecture?.flow} />
        </section>

        <section>
          <h2 className="mb-2">From wireframes to shipped product</h2>
          <p className="mb-6 max-w-[720px] text-muted-foreground">The early conversation map and the real flows released to customers.</p>
          <div className="grid gap-5 lg:grid-cols-3">
            {screens.map((screen) => (
              <figure key={screen.src} className="glass overflow-hidden">
                <div className="flex h-80 items-center justify-center bg-muted/30 p-5">
                  <div className="flex h-full max-w-full items-center justify-center overflow-hidden rounded-[24px] border-[5px] border-foreground/90 bg-card">
                    <img
                      src={screen.src}
                      alt={`${project.title} ${screen.label.toLowerCase()} — ${screen.title}`}
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
          <h2 className="mb-2">Failure handling & improvement loop</h2>
          <p className="max-w-[720px] text-muted-foreground">Unsupported and unsuccessful conversations fed directly into flow and prompt improvements.</p>
          <FlowDiagram flow={failureLoop?.flow} />
        </section>

        <section>
          <h2 className="mb-6">How I measured AI quality</h2>
          <div className="max-w-[720px] divide-y divide-border border-y border-border">
            {whatsappCaseStudy.measurements.map((measurement) => (
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
            {whatsappCaseStudy.results.map((result) => (
              <Card key={result.label} className="glass p-6">
                <p className="mb-2 text-3xl font-bold text-primary">{result.value}</p>
                <p className="text-sm text-muted-foreground">{result.label}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4">Go-to-market</h2>
          {goToMarket?.intro && <p className="mb-5 max-w-[720px] text-muted-foreground">{goToMarket.intro}</p>}
          {goToMarket?.bullets && <BulletList items={goToMarket.bullets} />}
        </section>

        <section>
          <h2 className="mb-4">What’s next</h2>
          <p className="max-w-[720px] text-muted-foreground">{whatsappCaseStudy.next}</p>
        </section>

        <section>
          <h2 className="mb-4">What I learned</h2>
          <BulletList items={whatsappCaseStudy.learnings} />
        </section>

        <section className="pb-8">
          <h2 className="mb-5">Toolkit</h2>
          <div className="mb-10 flex flex-wrap gap-2">
            {whatsappCaseStudy.toolkit.map((tool) => (
              <Badge key={tool} variant="outline" className="border-primary/30">{tool}</Badge>
            ))}
          </div>
          <Link to="/projects/rekart-customer-app" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            Next case study: Rekart Customer App
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </>
  );
};

export default WhatsappProjectCaseStudy;