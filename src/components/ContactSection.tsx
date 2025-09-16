import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon."
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  const contactInfo = [{
    icon: Mail,
    label: 'Email',
    value: 'ssai55030@gmail.com',
    link: 'mailto:ssai55030@gmail.com'
  }, {
    icon: Phone,
    label: 'Phone',
    value: '+91 - 7287070114',
    link: 'tel:+917287070114'
  }, {
    icon: MapPin,
    label: 'Location',
    value: 'Visakhapatnam, Andhrapradesh',
    link: null
  }];
  const socialLinks = [{
    icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mssrinivas1511',
    color: 'hover:text-blue-500'
  }, {
    icon: Twitter,
    label: 'Twitter',
    url: 'https://twitter.com/SaiSrinivaS2371',
    color: 'hover:text-blue-400'
  }, {
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com/mssrinivas1511',
    color: 'hover:text-purple-400'
  }, {
    icon: Instagram,
    label: 'Instagram',
    url: 'https://www.instagram.com/nivas_1511/',
    color: 'hover:text-pink-400'
  }];
  return <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next big idea? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input id="name" value={formData.name} onChange={e => setFormData(prev => ({
                  ...prev,
                  name: e.target.value
                }))} className="mt-2 glass border-primary/30 focus:border-primary" placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => setFormData(prev => ({
                  ...prev,
                  email: e.target.value
                }))} className="mt-2 glass border-primary/30 focus:border-primary" placeholder="your.email@example.com" required />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input id="subject" value={formData.subject} onChange={e => setFormData(prev => ({
                ...prev,
                subject: e.target.value
              }))} className="mt-2 glass border-primary/30 focus:border-primary" placeholder="Project discussion" required />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea id="message" value={formData.message} onChange={e => setFormData(prev => ({
                ...prev,
                message: e.target.value
              }))} className="mt-2 glass border-primary/30 focus:border-primary min-h-[120px]" placeholder="Tell me about your project or idea..." required />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="glass p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>)}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`flex items-center p-4 glass rounded-lg hover:scale-105 transition-all duration-300 ${social.color}`}>
                    <social.icon className="w-6 h-6 mr-3" />
                    <span className="font-medium">{social.label}</span>
                  </a>)}
              </div>
            </Card>

            {/* CTA */}
            <Card className="glass p-8 text-center">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Ready to Work Together?
              </h4>
              <p className="text-muted-foreground mb-6">
                Let's build something amazing together. I'm always open to discussing new opportunities.
              </p>
              <Button variant="hero" size="lg" className="w-full">
                Schedule a Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;