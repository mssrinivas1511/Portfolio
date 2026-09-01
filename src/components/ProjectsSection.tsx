import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, TrendingUp, Mail } from 'lucide-react';
import aiAssistantImg from '@/assets/project-ai-assistant.jpg';
import fintechAppImg from '@/assets/project-fintech-app.jpg';
import healthcareImg from '@/assets/project-healthcare.jpg';
import { siteConfig } from '@/lib/site-config';

const ProjectsSection = () => {
  const projects = [{
    id: 1,
    title: 'AI Analytics Assistant',
    description:
      'Conversational analytics layer that lets business teams ask questions of their data in plain language. I owned discovery, the MVP scope and the launch plan, working with design and engineering through weekly release cycles.',
    image: aiAssistantImg,
    role: 'Product Manager',
    impact: 'Cut manual reporting effort from hours to minutes',
    technologies: ['AI/ML', 'React', 'Python', 'Analytics'],
    category: 'Enterprise SaaS',
  }, {
    id: 2,
    title: 'Personal Finance Mobile App',
    description:
      'Mobile-first money app with spending insights, UPI payments and goal-based saving. I ran user research, defined the onboarding funnel and prioritised the roadmap against activation and retention metrics.',
    image: fintechAppImg,
    role: 'Product Manager',
    impact: 'Improved onboarding completion and week-4 retention',
    technologies: ['React Native', 'Node.js', 'Mixpanel', 'UX Research'],
    category: 'Fintech',
  }, {
    id: 3,
    title: 'Healthcare Records Dashboard',
    description:
      'Unified dashboard that brings patient records from multiple systems into one view for clinicians. I mapped the workflows with practitioners, wrote the PRDs and coordinated compliance requirements.',
    image: healthcareImg,
    role: 'Associate Product Manager',
    impact: 'Faster record lookup and fewer duplicate entries',
    technologies: ['Vue.js', 'FHIR', 'Cloud', 'Data Modelling'],
    category: 'HealthTech',
  }];

  return <section id="projects" className="py-20 bg-gradient-to-br from-background/50 to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of products I've helped shape — from discovery through launch
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => <Card key={project.id} className="glass overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img src={project.image} alt={`${project.title} — ${project.category} product managed by ${siteConfig.name}`} loading="lazy" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {project.category}
                </Badge>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="space-y-2 mb-5">
                  <div className="flex items-start text-sm">
                    <Briefcase className="w-4 h-4 mr-2 mt-0.5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{project.role}</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <TrendingUp className="w-4 h-4 mr-2 mt-0.5 text-accent shrink-0" />
                    <span className="text-muted-foreground">{project.impact}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>)}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8" asChild>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              See more on LinkedIn
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button variant="hero" size="lg" className="px-8 ml-0 sm:ml-4 mt-4 sm:mt-0" asChild>
            <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Project enquiry')}`}>
              <Mail className="w-5 h-5 mr-2" />
              Discuss a project
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;
