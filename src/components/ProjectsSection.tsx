import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, TrendingUp, Mail } from 'lucide-react';
import { projects } from '@/lib/projects-data';
import { siteConfig } from '@/lib/site-config';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background/50 to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Product work on Rekart — a SaaS platform for milk, tiffins and groceries subscriptions
            and delivery management, serving national and international clients. Click a project to
            see the full case study and my role.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.slug}
              className="glass overflow-hidden group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/projects/${project.slug}`} className="flex flex-col flex-1">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — high-fidelity product screens designed by ${siteConfig.name}`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.tagline}
                  </p>

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

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <span className="mt-auto inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                    View full case study
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg" className="px-8" asChild>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              See more on LinkedIn
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button variant="hero" size="lg" className="px-8" asChild>
            <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Project enquiry')}`}>
              <Mail className="w-5 h-5 mr-2" />
              Discuss a project
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
