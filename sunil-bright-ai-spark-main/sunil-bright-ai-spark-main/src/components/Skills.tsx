import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Globe, 
  Brain, 
  BookOpen, 
  Database,
  Cpu
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "bg-primary/10 text-primary",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "C", level: 70 },
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "bg-secondary/10 text-secondary",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "bg-accent/10 text-accent",
      skills: [
        { name: "Machine Learning Basics", level: 70 },
        { name: "Data Analysis", level: 65 },
        { name: "AI Fundamentals", level: 75 },
      ]
    },
    {
      title: "Theoretical Knowledge",
      icon: BookOpen,
      color: "bg-purple-100 text-purple-600",
      skills: [
        { name: "Theory of Computation", level: 80 },
        { name: "Algorithms", level: 75 },
        { name: "Data Structures", level: 85 },
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: Code2 },
    { name: "VS Code", icon: Code2 },
    { name: "Jupyter", icon: Database },
    { name: "Linux", icon: Cpu },
  ];

  return (
    <section id="skills" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously developing technical expertise across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glow">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${category.color}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="card-glow">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-6 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <tool.icon className="h-5 w-5 mr-2 text-primary" />
                  <span className="font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;