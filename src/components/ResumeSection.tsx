import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  GraduationCap, 
  Award, 
  Briefcase, 
  MapPin, 
  Phone, 
  Mail,
  Globe
} from 'lucide-react';

const ResumeSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-srinivas.pdf';
    link.download = 'Srinivas-Resume.pdf';
    link.click();
  };

  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Mechanical Engineering',
      institution: 'Andhra University, Visakhapatnam',
      year: '2022',
      score: 'CGPA: 8.20'
    },
    {
      degree: 'Diploma',
      field: 'Mechanical Engineering', 
      institution: 'Government Polytechnic, Visakhapatnam',
      year: '2019',
      score: 'Percentage: 69.23%'
    }
  ];

  const certifications = [
    'Product Management with Gen AI – PW Skills (2025)',
    'CN C Machining, Autocad (2021)',
    'Solid Edge – IGIAT (2019)'
  ];

  const experience = [
    {
      title: 'Student Trainee',
      company: 'Hindustan Shipyard Limited',
      period: 'Nov 2018 - May 2019',
      achievements: [
        'Collaborated on shipbuilding and dry docking operations',
        'Improved project coordination by 25%',
        'Contributed to 15% reduction in material waste'
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+91-7287070114' },
    { icon: Mail, text: 'ssai55030@gmail.com' },
    { icon: MapPin, text: 'Visakhapatnam, Andhra Pradesh' },
    { icon: Globe, text: 'linkedin.com/in/mssrinivas1511' }
  ];

  return (
    <section id="resume" className="py-24 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Download my complete resume or explore my background and qualifications below
          </p>
          <Button 
            onClick={handleDownloadCV}
            className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 text-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </div>

        {/* Contact Information */}
        <Card className="glass p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Contact Information</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <contact.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{contact.text}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <Card className="glass p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-primary font-medium">{edu.field}</p>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-muted-foreground">{edu.year}</span>
                    <Badge variant="outline" className="text-primary border-primary/30">{edu.score}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Experience */}
          <Card className="glass p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="glass p-8 mt-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-muted/20 rounded-lg">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Summary */}
        <Card className="glass p-8 mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Professional Summary</h3>
          <p className="text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            B.Tech mechanical engineering graduate and certified Product Management professional seeking an Associate Product Manager role. 
            Passionate about applying strong analytical and technical skills to guide product vision, execute roadmaps, and collaborate 
            with engineering, design, and marketing teams to launch market-ready products.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ResumeSection;