import { Card } from '@/components/ui/card';
import { Search, LineChart, Users } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import portrait from '@/assets/srinivas-portrait.jpeg';

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
'Mixpanel adoption and drop-off data, plus real customer conversations, decide what gets built next and whether a release worked.',
    },
    {
      icon: Users,
      title: 'Built with the team',
      description:
        'Close, daily collaboration with design, development and QA — clear requirements, tight feedback loops, calm releases.',
    },
  ];

  return (
    <section id="about" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-heading">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How I approach discovery, decisions and delivery as a product manager
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Story */}
          <div className="glass p-8 rounded-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <img
                src={portrait}
                 alt={`${siteConfig.name}, Associate Product Manager — professional portrait in the About section`}
                 loading="lazy"
                width={776}
                height={788}
                className="w-28 h-28 rounded-lg object-cover object-top ring-1 ring-primary/40 shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-foreground">{siteConfig.name}</h3>
                <p className="text-primary font-medium">{siteConfig.role} · {siteConfig.location}</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm an Associate Product Manager on Rekart, a SaaS platform that runs subscriptions and
              deliveries for 300+ milk, tiffin and grocery businesses across a customer app, web app,
              client dashboard and driver app. I spend my days connecting what customers need with what
              operations, clients and engineering can realistically ship — and I care most about
              everyday moments like ordering, subscribing, paying and tracking a delivery. Building
              Rekart's WhatsApp assistant made me especially interested in AI products for people who
              never want to open an app.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="glass p-6 transition-colors duration-300 hover:border-primary/30">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 shrink-0">
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
