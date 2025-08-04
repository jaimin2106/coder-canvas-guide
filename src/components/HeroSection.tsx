import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-background via-background to-primary/5"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient blob */}
        <div 
          className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-accent/20 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Trust Badge */}
        <div className="mb-8 animate-fade-in">
          <Badge variant="outline" className="bg-accent/10 border-accent/20 text-accent px-6 py-2 gap-2 text-sm font-medium backdrop-blur-sm">
            <Star className="h-4 w-4 fill-current" />
            TRUSTED BY 50+ BUSINESSES WORLDWIDE
          </Badge>
        </div>

        {/* Main Headline */}
        <div className="mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.9] tracking-tight mb-6">
            Plan. Design.
            <br />
            <span className="block">Build. Maintain.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            From strategic roadmaps and pixel-perfect designs to robust, scalable code 
            and ongoing support, we partner with you at every step.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Book Discovery Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="relative mx-auto max-w-4xl">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-soft">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <span className="font-semibold text-foreground">Sales engine</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors">Why Salesengine</a>
                    <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
                    <a href="#" className="hover:text-foreground transition-colors">FAQ</a>
                    <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
                  </nav>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-5 bg-muted rounded-full relative">
                      <div className="w-4 h-4 bg-background rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      Log in
                    </Button>
                  </div>
                </div>
              </div>

              {/* Dashboard Content Preview */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 bg-muted rounded-full"></div>
                  <span className="text-muted-foreground">Team "SalesDevils"</span>
                  <div className="w-4 h-4 bg-muted rounded"></div>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Invite others by email</span>
                    <Button variant="outline" size="sm" className="bg-accent text-accent-foreground text-xs">
                      Invite
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground">Manage team members</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                    <div className="w-8 h-8 bg-muted rounded-full border-2 border-background"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Bohdan Pylkas</div>
                    <div className="text-xs text-muted-foreground">Emily Brown</div>
                  </div>
                  <div className="ml-auto space-y-1">
                    <div className="text-xs text-muted-foreground">owner</div>
                    <div className="text-xs text-muted-foreground">can view</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/20">
                <Star className="h-6 w-6 text-accent animate-pulse" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-lg border border-border">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-accent/5 rounded-2xl blur-3xl scale-110"></div>
          </div>
        </div>

        {/* Bottom Large Text */}
        <div className="mt-20 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground/10 leading-tight tracking-wider">
            Make your startup
            <br />
            <span className="text-accent/20">dreams come true</span>
          </h2>
        </div>

        {/* Social Links - Subtle */}
        <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-50">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 group"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5 group-hover:animate-pulse" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Scroll</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;