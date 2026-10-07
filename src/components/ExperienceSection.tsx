import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const roles = [
  {
    title: 'Associate Product Manager',
    company: 'Abmiro Solutions Pvt Ltd',
    period: 'Dec 2025 - Present',
    location: 'Pune, Maharashtra',
    product:
      'Rekart - SaaS delivery management platform for subscription and recurring-delivery businesses (300+ client businesses, typically 300-500+ end customers each)',
    highlights: [
      'Owned product definition for an NLP-based WhatsApp AI Assistant - user journeys, conversational flows, intents and requirements; shipped Phase 1 (Jun 2026) and Phase 2 (Aug 2026), now live with 130+ client businesses.',
      "Post-launch, ~30% of registered customers engage with the assistant and 90%+ of supported queries are resolved successfully.",
      'Led execution of 20+ enhancements across the Admin Panel, Customer App and Delivery Rider App with Engineering, Design, QA, Business and Customer Support.',
      'Replaced sales-territory selection with delivery-address-driven personalised catalogues, enabling customers to order across multiple locations.',
      'Wrote PRDs, user stories and acceptance criteria and tightened UAT and release validation; following these releases, customer-reported issues fell ~30% and adoption of shipped features rose ~25%.',
      'Tracked engagement, feature usage, payment success/failure and repeat orders in Mixpanel; prioritised the roadmap using RICE and MoSCoW.',
    ],
    tags: ['Product Discovery', 'Conversational AI', 'Payments', 'Mixpanel', 'Jira', 'Confluence'],
  },
  {
    title: 'Product Growth Intern',
    company: 'Beep App',
    period: 'Oct 2025 - Dec 2025',
    location: 'Remote',
    product: null,
    highlights: [
      "Spoke with 100+ learners and job seekers weekly to understand needs and communicate the platform's value.",
      'Supported acquisition and engagement initiatives that contributed to a 20%+ increase in user engagement.',
    ],
    tags: null,
  },
];

const ExperienceSection = () => (
  <section id="experience" className="portfolio-section">
    <div className="portfolio-container">
      <div className="section-heading">
        <h2 className="text-4xl font-bold mb-6">Professional Experience</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Impact, not duties — what I owned and what changed because of it
        </p>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          aria-hidden="true"
          className="absolute left-[9px] top-2 bottom-2 w-px bg-border hidden sm:block"
        />

        <div className="space-y-8">
          {roles.map((role) => (
            <div key={role.title} className="relative sm:pl-10">
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-9 w-[19px] h-[19px] rounded-full border-2 border-primary bg-background hidden sm:block"
              />

              <Card className="glass p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{role.title}</h3>
                    <p className="text-primary font-medium">{role.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {role.period} · {role.location}
                    </p>
                  </div>
                  <Badge variant="outline" className="border-primary/30 self-start shrink-0">
                    {role.period}
                  </Badge>
                </div>

                {role.product && (
                  <p className="text-muted-foreground leading-relaxed mb-6">{role.product}</p>
                )}

                <ul className="space-y-3 mb-6">
                  {role.highlights.map((h) => (
                    <li key={h} className="flex items-start text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                {role.tags && (
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-primary/10 border border-primary/20">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
