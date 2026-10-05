import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, TrendingUp, Mail } from 'lucide-react';
import { projects } from '@/lib/projects-data';
import { siteConfig } from '@/lib/site-config';

const ProjectsSection = () => {
  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two case studies showing how I moved from discovery and product decisions to
            launch, cross-functional delivery and measurable outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="glass overflow-hidden group transition-colors duration-300 hover:border-primary/30 flex flex-col"
            >
              <Link to={`/projects/${project.slug}`} className="flex flex-col flex-1">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-muted/20 flex items-center justify-center p-5">
                  <img
                    src={project.image}
                    alt={`${project.title} — shipped product screen from work led by ${siteConfig.name}`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="w-auto h-full max-w-full object-contain"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                  <Badge variant="outline" className="w-fit text-xs border-primary/30 mb-3">
                    {project.caseStudyLabel}
                  </Badge>
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
