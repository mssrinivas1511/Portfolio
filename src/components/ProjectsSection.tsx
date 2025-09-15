import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';
import aiAssistantImg from '@/assets/project-ai-assistant.jpg';
import fintechAppImg from '@/assets/project-fintech-app.jpg';
import healthcareImg from '@/assets/project-healthcare.jpg';
const ProjectsSection = () => {
  const projects = [{
    id: 1,
    title: 'AI-Powered Analytics Platform',
    description: 'Revolutionary AI assistant that analyzes business data and provides actionable insights. Increased user productivity by 60% and reduced analysis time from hours to minutes.',
    image: aiAssistantImg,
    role: 'Senior Product Manager',
    impact: '2M+ users, 60% productivity increase',
    technologies: ['AI/ML', 'React', 'Python', 'AWS'],
    category: 'Enterprise SaaS'
  }, {
    id: 2,
    title: 'Next-Gen Fintech Mobile App',
    description: 'Complete financial ecosystem with AI-driven insights, seamless payments, and personalized investment recommendations. Achieved 300% user growth in 12 months.',
    image: fintechAppImg,
    role: 'Lead Product Manager',
    impact: '300% user growth, $5M ARR',
    technologies: ['React Native', 'Node.js', 'Blockchain', 'ML'],
    category: 'Fintech'
  }, {
    id: 3,
    title: 'Healthcare Data Intelligence',
    description: 'HIPAA-compliant platform that aggregates patient data across systems, providing real-time insights for healthcare providers. Improved patient outcomes by 40%.',
    image: healthcareImg,
    role: 'Product Manager',
    impact: '40% improved outcomes, 100+ hospitals',
    technologies: ['Vue.js', 'FHIR', 'Azure', 'Analytics'],
    category: 'HealthTech'
  }];
  return <section id="projects" className="py-20 bg-gradient-to-br from-background/50 to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of impactful products I've managed from conception to market success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => <Card key={project.id} className="glass overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {project.category}
                </Badge>
              </div>

              {/* Project Content */}
              
            </Card>)}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;