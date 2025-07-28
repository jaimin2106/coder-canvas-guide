import { ArrowRight, Download, Github, Linkedin, Mail, Code, Sparkles, Trophy, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import heroImage from "@/assets/hero-bg.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

const HeroSection = () => {
  const technologies = ["React", "TypeScript", "Node.js", "Python", "MongoDB"];
  const achievements = [
    { icon: Code, label: "50+ Projects", value: "50+" },
    { icon: Trophy, label: "10+ Certifications", value: "10+" },
    { icon: Zap, label: "B.Tech 5th Sem", value: "85%" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-accent/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/3 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 animate-scale-in">
              <Sparkles className="h-4 w-4" />
              Available for Projects
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent animate-glow">
                Your Name
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground">
                Full Stack Developer
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate B.Tech student at Silver Oak University, crafting innovative digital solutions 
              with modern technologies. Turning ideas into exceptional user experiences.
            </p>

            {/* Technology Stack */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {technologies.map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button variant="hero" size="lg" className="gap-2 group hover:scale-105 transition-transform">
                <Download className="h-5 w-5" />
                Download Resume
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="minimal" size="lg" className="gap-2 hover:scale-105 transition-transform">
                <Mail className="h-5 w-5" />
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-accent/10"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-accent/10"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-accent/10"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile & Stats */}
          <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            {/* Profile Image with Glow Effect */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={profileAvatar}
                alt="Profile"
                className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full border-4 border-accent shadow-accent-glow animate-float hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center animate-bounce">
                <Code className="h-6 w-6" />
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.label}
                  className="bg-surface/50 backdrop-blur-sm border border-border-soft rounded-lg p-4 hover:bg-surface transition-colors hover:scale-105 transform duration-300 animate-scale-in"
                  style={{animationDelay: `${0.5 + index * 0.1}s`}}
                >
                  <achievement.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{achievement.value}</div>
                  <div className="text-xs text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center cursor-pointer hover:scale-110 transition-transform">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-glow"></div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-medium">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;