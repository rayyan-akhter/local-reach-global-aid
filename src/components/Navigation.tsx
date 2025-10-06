import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">GlobalConnect Foundation</h1>
              <p className="text-xs text-muted-foreground">Local Partners for International Impact</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-2 md:gap-6">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className="transition-all"
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant={isActive("/about") ? "default" : "ghost"}
                className="transition-all"
              >
                About
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant={isActive("/services") ? "default" : "ghost"}
                className="transition-all"
              >
                Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant={isActive("/contact") ? "secondary" : "ghost"}
                className="transition-all"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;