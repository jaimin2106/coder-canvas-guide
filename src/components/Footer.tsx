import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
  ];

  const projectLinks = [
    { name: "About", href: "#about" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        variant="hero"
        size="icon"
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-accent-glow"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Passionate full-stack developer creating innovative solutions 
              and exceptional digital experiences. Always learning, always growing.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              {projectLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/70 text-sm mb-4 md:mb-0">
            © 2024 Your Name. All rights reserved.
          </div>
          <div className="flex items-center text-primary-foreground/70 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-red-400 animate-pulse" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;