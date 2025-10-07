import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/our-purpose", label: "Our Purpose" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact", variant: "secondary" }
  ];
  
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="p-1.5 md:p-2 rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
              <Globe className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base md:text-xl font-bold text-foreground leading-tight">GlobalConnect Foundation</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground">Local Partners for International Impact</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-sm font-bold text-foreground">GlobalConnect</h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button 
                  variant={isActive(link.path) ? (link.variant as any || "default") : "ghost"}
                  size="sm"
                  className="transition-all"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-border pt-4">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  variant={isActive(link.path) ? (link.variant as any || "default") : "ghost"}
                  className="w-full justify-start transition-all"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;