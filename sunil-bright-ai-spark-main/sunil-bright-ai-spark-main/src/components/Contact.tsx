import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8861153865",
      href: "tel:+918861153865",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sunilshetty1412@gmail.com",
      href: "mailto:sunilshetty1412@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "#", // Will be updated with actual LinkedIn profile
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      href: "#", // Will be updated with actual GitHub profile
    },
  ];

  return (
    <section id="contact" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and explore opportunities together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's talk</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities, collaborations, and 
                connecting with fellow tech enthusiasts. Whether you have a project 
                in mind or just want to chat about AI and technology, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="card-glow group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4">
                    <a 
                      href={contact.href}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{contact.label}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="card-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Location</h4>
                </div>
                <p className="text-muted-foreground">
                  Bangalore, Karnataka, India
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Open to opportunities nationwide and remote work
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-glow">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className="border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gradient-bg text-white hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;