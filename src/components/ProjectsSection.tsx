import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects-data';
import { siteConfig } from '@/lib/site-config';

const ProjectsSection = () => {
  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-heading">
          <h2>Selected work</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Two case studies on how I go from customer problem to shipped product.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="glass overflow-hidden group transition-colors duration-300 hover:border-primary/40 flex flex-col"
            >
              <Link to={`/projects/${project.slug}`} className="flex flex-col flex-1">
                <div className="h-80 sm:h-96 overflow-hidden bg-muted/30 flex items-center justify-center p-6 sm:p-8">
                  <div className="h-full max-w-full overflow-hidden rounded-[28px] border-[6px] border-foreground/90 bg-card shadow-sm">
                    <img
                      src={project.image}
                      alt={`${project.selectedWork.title} — shipped product screen from work led by ${siteConfig.name}`}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="w-auto h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <Badge variant="outline" className="w-fit text-xs border-primary/30 mb-5">
                    {project.selectedWork.tag}
                  </Badge>
                  <h3 className="text-foreground mb-3">{project.selectedWork.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {project.selectedWork.summary}
                  </p>

                  <div className="border-y border-border py-4 mb-5 text-sm text-muted-foreground">
                    {project.role} · {project.selectedWork.timeline}
                  </div>

                  <p className="text-sm text-foreground leading-relaxed mb-6">
                    <span className="font-semibold">Outcome:</span> {project.selectedWork.outcome}
                  </p>

                  <span className="mt-auto inline-flex items-center text-sm font-semibold text-primary group-hover:underline">
                    Read case study
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
