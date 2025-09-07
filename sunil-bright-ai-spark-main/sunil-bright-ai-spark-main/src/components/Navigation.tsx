import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div 
            className="font-bold text-xl gradient-text cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Sunil B E
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Experience", id: "experience" },
              { label: "Skills", id: "skills" },
              { label: "Projects", id: "projects" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
          
          <Button 
            className="hidden md:flex bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;