import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">Sunil B E</h3>
            <p className="text-background/80">
              Building the future with AI & Machine Learning
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-background/80 flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> 
              using modern web technologies
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-background/20 text-background hover:bg-background hover:text-foreground"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Sunil B E. All rights reserved. | 
            Passionate about technology and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;