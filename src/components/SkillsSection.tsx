import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Target, 
  Users, 
  BarChart, 
  Rocket, 
  Code, 
  Lightbulb,
  Shield,
  Figma
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Product Strategy',
      icon: Target,
      skills: [
        { name: 'Roadmapping', level: 95 },
        { name: 'Market Research', level: 90 },
        { name: 'Competitive Analysis', level: 88 },
        { name: 'Product Vision', level: 93 },
      ],
    },
    {
      title: 'Analytics & Data',
      icon: BarChart,
      skills: [
        { name: 'Data Analytics', level: 92 },
        { name: 'A/B Testing', level: 89 },
        { name: 'SQL', level: 85 },
        { name: 'Product Metrics', level: 94 },
      ],
    },
    {
      title: 'Leadership',
      icon: Users,
      skills: [
        { name: 'Team Management', level: 91 },
        { name: 'Stakeholder Management', level: 93 },
        { name: 'Cross-functional Collaboration', level: 96 },
        { name: 'Agile/Scrum', level: 88 },
      ],
    },
    {
      title: 'Technical',
      icon: Code,
      skills: [
        { name: 'API Integration', level: 83 },
        { name: 'Technical Documentation', level: 90 },
        { name: 'System Architecture', level: 79 },
        { name: 'Cloud Platforms', level: 82 },
      ],
    },
  ];

  const tools = [
    'Figma', 'Jira', 'Confluence', 'Mixpanel', 'Amplitude', 'Tableau', 
    'Notion', 'Slack', 'GitHub', 'Balsamiq', 'Google Analytics', 'Hotjar'
  ];

  const certifications = [
    { name: 'Certified UI/UX Designer', icon: Shield },
    { name: 'Google Analytics Certified', icon: BarChart },
    { name: 'Figma Expert', icon: Figma },
    { name: 'Product Management Certificate', icon: Lightbulb },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning strategy, analytics, leadership, and technology
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="glass p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-foreground leading-tight">
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