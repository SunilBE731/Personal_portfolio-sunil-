import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Brain, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about AI/ML and dedicated to continuous learning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am Sunil, a 3rd-year engineering student specializing in Artificial 
              Intelligence and Machine Learning. I am passionate about data, problem-solving, 
              and exploring how AI can be applied in real-world scenarios.
            </p>
            <p className="text-lg leading-relaxed">
              Along with academics, I enjoy learning new technologies, working on projects, 
              and continuously improving my skills to build a strong career in the tech industry.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">AI & ML</h4>
                <p className="text-sm text-muted-foreground">Enthusiast</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Code2 className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="font-semibold">Problem</h4>
                <p className="text-sm text-muted-foreground">Solver</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold">Continuous</h4>
                <p className="text-sm text-muted-foreground">Learner</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="card-glow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <div className="space-y-2">
                      <h4 className="font-medium">B.E. in Artificial Intelligence & Machine Learning</h4>
                      <p className="text-muted-foreground">Reva University</p>
                      <p className="text-sm text-muted-foreground">Currently in 3rd year</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-glow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">Bangalore, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Field</span>
                    <span className="font-medium">AI & Machine Learning</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-medium">3rd Year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest</span>
                    <span className="font-medium">Data Science</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;