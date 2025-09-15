import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { User, Target, Zap, Users } from 'lucide-react';
const AboutSection = () => {
  const skills = ['Product Strategy', 'Roadmapping', 'User Research', 'Data Analytics', 'AI/ML Product Development', 'Agile/Scrum', 'Stakeholder Management', 'Go-to-Market', 'UX Collaboration', 'Technical Product Management'];
  const achievements = [{
    icon: Target,
    title: 'Product Launches',
    description: '15+ successful product launches with 2M+ users'
  }, {
    icon: Zap,
    title: 'Growth Impact',
    description: '300% user growth and 40% revenue increase'
  }, {
    icon: Users,
    title: 'Team Leadership',
    description: 'Led cross-functional teams of 20+ professionals'
  }];
  return <section id="about" className="py-20 bg-gradient-to-br from-background to-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about transforming ideas into impactful products
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Info */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">M S SrinivaS</h3>
                  <p className="text-primary font-medium">Product Manager</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                My approach combines data-driven decision making with user-centric design, 
                ensuring every product delivers real value to end users while achieving 
                business objectives.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => {})}
          </div>
        </div>

        {/* Skills */}
        <div className="glass p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Core Expertise
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-colors duration-300">
                {skill}
              </Badge>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;