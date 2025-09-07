import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Trophy, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Gen AI Powered Data Analytics Job Simulation",
      company: "Tata Internship",
      period: "Recently Completed",
      type: "Internship",
      description: "Completed a comprehensive job simulation focused on Generative AI applications in data analytics, gaining hands-on experience with AI-powered data processing and analysis techniques.",
      tags: ["Generative AI", "Data Analytics", "Machine Learning", "Python"],
      icon: Building2,
    },
    {
      title: "Hackathon Participant",
      company: "Odoo Hackathon by Nitte Meenakshi",
      period: "2024",
      type: "Competition",
      description: "Participated in the Odoo Hackathon, collaborating with teams to develop innovative solutions and showcasing problem-solving skills in a competitive environment.",
      tags: ["Hackathon", "Team Collaboration", "Problem Solving", "Innovation"],
      icon: Trophy,
    },
  ];

  return (
    <section id="experience" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through practical learning and competitive challenges
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-glow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <exp.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline"
                          className="border-primary/20 text-primary hover:bg-primary/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;