import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trash2, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Dustbin",
      description: "An IoT-enabled smart dustbin system designed to promote automation and cleanliness. The project focuses on smart waste management using sensors and connectivity features.",
      year: "1st Year",
      category: "IoT Project",
      technologies: ["IoT", "Sensors", "Arduino", "C++"],
      icon: Trash2,
      features: [
        "Automated lid opening mechanism",
        "Waste level monitoring",
        "Smart notifications",
        "Promotes cleanliness and automation"
      ]
    },
    {
      title: "Supermarket Website",
      description: "A comprehensive web application for supermarket management, featuring product catalog, inventory management, and user-friendly interface for customers and administrators.",
      year: "2nd Year", 
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript", "Web Technologies"],
      icon: ShoppingCart,
      features: [
        "Product catalog management",
        "User authentication system", 
        "Shopping cart functionality",
        "Responsive design"
      ]
    }
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on learning through practical project development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-glow group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {project.year}
                        </Badge>
                        <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="border-primary/20 text-primary hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="gradient-bg text-white hover:shadow-glow transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/20 text-primary hover:bg-primary/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">More exciting projects coming soon!</p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;