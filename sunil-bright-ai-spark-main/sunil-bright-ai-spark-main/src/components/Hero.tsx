import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/sunil-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-primary/10 to-secondary/10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm{" "}
                <span className="gradient-text">Sunil B E</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Engineering Student | AI & ML Enthusiast | Problem Solver
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              3rd-year engineering student specializing in Artificial Intelligence 
              and Machine Learning at Reva University, passionate about creating 
              innovative solutions through technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-accent text-white hover:shadow-rainbow transition-all duration-500 transform hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:gradient-bg hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-glow"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden profile-glow p-2 gradient-rainbow">
                <img
                  src={profileImage}
                  alt="Sunil B E - Profile Photo"
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />
              </div>
              <div className="absolute -inset-6 gradient-rainbow rounded-full blur-2xl opacity-30 -z-10 animate-pulse"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 rounded-full blur-lg -z-5"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button
            variant="ghost"
            size="sm"
            className="animate-bounce"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;