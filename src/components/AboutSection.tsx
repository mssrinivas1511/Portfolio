import { Card } from '@/components/ui/card';
import { User, Search, LineChart, Users } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const AboutSection = () => {
  const values = [
    {
      icon: Search,
      title: 'Discovery first',
      description:
        'I start with customer and client conversations, market research and competitor analysis before a single ticket is written.',
    },
    {
      icon: LineChart,
      title: 'Data over opinion',
      description:
        'Mixpanel funnels, adoption and drop-off data decide what gets built next and whether a release actually worked.',
    },
    {
      icon: Users,
      title: 'Built with the team',
      description:
        'Close, daily collaboration with design, development and QA — clear requirements, tight feedback loops, calm releases.',
    },
  ];

  return (
    <section id="about" className="portfolio-section bg-gradient-to-br from-background to-background/80">
      <div className="portfolio-container">
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How I approach discovery, decisions and delivery as a product manager
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Story */}
          <div className="glass p-8 rounded-xl space-y-5">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 shrink-0">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{siteConfig.name}</h3>
                <p className="text-primary font-medium">{siteConfig.role} · {siteConfig.location}</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm an Associate Product Manager working on Rekart, a SaaS platform for milk, tiffins and
              groceries subscriptions and delivery management used by national and international clients.
              The product spans a customer app, a web app, a client dashboard and a driver app for
              delivery logistics — so most of my days are spent connecting what customers need with what
              operations, clients and engineering can realistically deliver.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work sits at the intersection of research and execution: gathering insights from
              customers and clients, running market and competitor analysis, translating findings into
              requirements and use cases, and then shipping with design, development and QA. I care
              about reducing friction in everyday journeys — ordering, subscribing, paying, tracking a
              delivery — because those are the moments that decide whether a subscriber stays.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm especially drawn to AI-assisted product experiences. Leading Rekart's NLP-based
              WhatsApp assistant showed me how much a conversational layer can do for users who never
              want to open an app. When I'm not working on the roadmap, I'm exploring AI and analytics
              tooling, sharpening my UX craft in Figma, and learning from the wider product community.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="glass p-6 transition-colors duration-300 hover:border-primary/30">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
