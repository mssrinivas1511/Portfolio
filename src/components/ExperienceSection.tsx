import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const roles = [
  {
    title: 'Associate Product Manager',
    company: 'Abmiro Solutions Pvt Ltd',
    product: 'Rekart - a SaaS delivery management platform for subscription and recurring-delivery businesses (milk, tiffin, grocery), used by 300+ client businesses.',
    period: 'Dec 2025 — Present',
    summary:
      'Own discovery and delivery across Rekart - a SaaS delivery management platform for subscription and recurring-delivery businesses (milk, tiffin, grocery), used by 300+ client businesses.',
    highlights: [
      'Owned product definition and launch of the NLP-based WhatsApp AI Assistant — achieving 30% user engagement and a 90%+ successful response rate.',
      'Shipped targeted customer-app improvements in every release and increased feature adoption across client accounts.',
      'Replaced internal Sales Territory selection with delivery-address-driven personalised catalogues, enabling multi-location ordering.',
      'Ran customer and client interviews, market research and competitor analysis to shape the roadmap and prioritise releases.',
      'Partnered daily with design, development and QA — requirements, use cases, release validation and post-launch measurement in Mixpanel.',
    ],
    tags: ['Product Discovery', 'Roadmapping', 'Conversational AI', 'Payments', 'Mixpanel', 'Jira', 'Confluence'],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="portfolio-section">
    <div className="portfolio-container">
      <div className="section-heading">
        <h2 className="text-4xl font-bold mb-6">
          Professional <span className="text-primary">Experience</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Impact, not duties — what I owned and what changed because of it
        </p>
      </div>

      <div className="space-y-8">
        {roles.map((role) => (
          <Card key={role.title} className="glass p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{role.title}</h3>
                  <p className="text-primary">{role.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{role.product}</p>
                </div>
              </div>
              <Badge variant="outline" className="border-primary/30 self-start">
                {role.period}
              </Badge>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{role.summary}</p>

            <ul className="space-y-3 mb-6">
              {role.highlights.map((h) => (
                <li key={h} className="flex items-start text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {role.tags.map((t) => (
                <Badge key={t} variant="secondary" className="bg-primary/10 border border-primary/20">
                  {t}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
