import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Target, 
  Users, 
  BarChart, 
  Rocket, 
  Code, 
  Lightbulb,
  Figma
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Product Strategy',
      icon: Target,
      skills: [
        'Roadmapping',
        'Market Research',
        'Competitive Analysis',
        'Product Vision',
      ],
    },
    {
      title: 'Analytics & Data',
      icon: BarChart,
      skills: [
        'Data Analytics',
        'A/B Testing',
        'SQL',
        'Product Metrics',
      ],
    },
    {
      title: 'Leadership',
      icon: Users,
      skills: [
        'Team Management',
        'Stakeholder Management',
        'Cross-functional Collaboration',
        'Agile / Scrum',
      ],
    },
    {
      title: 'Technical',
      icon: Code,
      skills: [
        'API Integration',
        'Technical Documentation',
        'System Architecture',
        'Cloud Platforms',
      ],
    },
  ];

  const tools = [
    'Figma', 'Jira', 'Confluence', 'Mixpanel', 'Amplitude', 'Tableau', 
    'Notion', 'GitHub', 'SQL'
  ];

  const certifications = [
    { name: 'Product Management\nwith Gen AI', icon: Brain },
    { name: 'AI Product Management\nCertificate', icon: Lightbulb },
    { name: 'Figma\nCertified', icon: Figma },
  ];

  return (
    <section id="skills" className="portfolio-section bg-gradient-to-br from-background to-muted/10">
      <div className="portfolio-container">
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning strategy, analytics, leadership, and technology
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass p-6 transition-colors duration-300 hover:border-primary/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="px-3 py-2 border-primary/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="glass p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="glass p-6 text-center transition-colors duration-300 hover:border-primary/30">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-sm font-semibold text-foreground leading-tight whitespace-pre-line">
                {cert.name}
              </h4>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;