import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Sparkles, Trophy, Zap, Star, Rocket, Heart, Coffee } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Spline from '@splinetool/react-spline';
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const technologies = [
    { name: "React", icon: "⚛️", level: 95 },
    { name: "TypeScript", icon: "📘", level: 90 },
    { name: "Node.js", icon: "🟢", level: 85 },
    { name: "Python", icon: "🐍", level: 80 },
    { name: "MongoDB", icon: "🍃", level: 88 }
  ];
  
  const achievements = [
    { icon: Code, label: "Projects Built", value: "50+", color: "text-blue-400" },
    { icon: Trophy, label: "Certifications", value: "10+", color: "text-yellow-400" },
    { icon: Star, label: "GitHub Stars", value: "1.2k+", color: "text-purple-400" },
  ];

  const inspirationalQuotes = [
    "Code is poetry in motion 🎨",
    "Building the future, one line at a time 🚀",
    "Where creativity meets technology ✨",
    "Turning coffee into code ☕"
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  // Cycle through quotes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [inspirationalQuotes.length]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Background with Interactive Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        {/* Interactive Floating Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-accent/20 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                transform: isHovered ? `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)` : 'none',
                transition: 'transform 0.3s ease-out'
              }}
            />
          ))}
        </div>

        {/* Interactive Gradient Blob */}
        <div 
          className="absolute w-96 h-96 bg-gradient-accent opacity-10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Enhanced Text Content */}
          <div className="text-center lg:text-left animate-fade-in space-y-8">
            {/* Dynamic Status Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-accent/10 backdrop-blur-sm text-accent px-6 py-3 rounded-full text-sm font-medium border border-accent/20 animate-scale-in hover:scale-105 transition-transform cursor-default">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <Sparkles className="h-4 w-4" />
              <span className="bg-gradient-accent bg-clip-text text-transparent font-semibold">
                Available for Amazing Projects
              </span>
            </div>

            {/* Main Title with Enhanced Animation */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="block animate-fade-in">Hi, I'm</span>
                <span className="block bg-gradient-accent bg-clip-text text-transparent animate-glow hover:scale-105 transition-transform inline-block cursor-default">
                  Your Name
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Rocket className="h-8 w-8 text-accent animate-bounce" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-semibold">
                  Full Stack Developer
                </h2>
                <Heart className="h-6 w-6 text-red-400 animate-pulse" />
              </div>
            </div>

            {/* Dynamic Quote */}
            <div className="bg-surface/30 backdrop-blur-sm border border-border-soft rounded-2xl p-6 hover:bg-surface/50 transition-all duration-300 hover:scale-105">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                <span className="animate-fade-in key={currentQuote}">{inspirationalQuotes[currentQuote]}</span>
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Coffee className="h-5 w-5 text-accent animate-bounce" />
                <span className="text-sm text-accent font-medium">Passionate B.Tech Student</span>
              </div>
            </div>

            {/* Enhanced Technology Stack */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Code className="h-5 w-5 text-accent" />
                Tech Stack & Expertise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {technologies.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className="group bg-surface/40 backdrop-blur-sm border border-border-soft rounded-xl p-4 hover:bg-surface transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default animate-fade-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl group-hover:scale-125 transition-transform">{tech.icon}</span>
                      <span className="font-medium text-foreground">{tech.name}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-accent transition-all duration-1000 group-hover:animate-pulse"
                        style={{width: `${tech.level}%`}}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 block">{tech.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="gap-3 group hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-accent/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button 
                variant="minimal" 
                size="lg" 
                className="gap-3 hover:scale-105 transition-all duration-300 group relative"
              >
                <Mail className="h-5 w-5 group-hover:animate-pulse" />
                <span>Let's Connect</span>
                <Sparkles className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {[
                { icon: Github, href: "#", color: "hover:text-purple-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                { icon: Mail, href: "#", color: "hover:text-green-400" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`group text-muted-foreground ${social.color} transition-all duration-300 hover:scale-125 transform p-3 rounded-full hover:bg-accent/10 border border-transparent hover:border-accent/20 backdrop-blur-sm`}
                >
                  <social.icon className="h-6 w-6 group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Model & Interactive Stats */}
          <div className="text-center animate-fade-in space-y-8" style={{animationDelay: '0.3s'}}>
            {/* Interactive 3D Model Container */}
            <div className="relative group">
              <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl border border-border-soft backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Spline 3D Model Placeholder - You can replace the scene URL with your own */}
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-accent opacity-5 animate-pulse"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-accent rounded-full flex items-center justify-center mb-4 animate-float">
                      <Code className="h-16 w-16 text-accent-foreground" />
                    </div>
                    <p className="text-muted-foreground">3D Model Loading...</p>
                    <p className="text-sm text-accent mt-2">Replace with your Spline scene URL</p>
                  </div>
                  
                  {/* Interactive Elements */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Action Buttons around 3D model */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-surface border border-border-soft rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group/btn">
                <Star className="h-6 w-6 text-yellow-400 group-hover/btn:animate-spin" />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-surface border border-border-soft rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group/btn">
                <Rocket className="h-6 w-6 text-blue-400 group-hover/btn:animate-bounce" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-surface border border-border-soft rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group/btn">
                <Heart className="h-6 w-6 text-red-400 group-hover/btn:animate-pulse" />
              </div>
            </div>

            {/* Enhanced Achievement Stats */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.label}
                  className="group bg-surface/40 backdrop-blur-sm border border-border-soft rounded-2xl p-6 hover:bg-surface transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-default animate-scale-in relative overflow-hidden"
                  style={{animationDelay: `${0.5 + index * 0.1}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <achievement.icon className={`h-8 w-8 ${achievement.color} mx-auto mb-3 group-hover:animate-bounce relative z-10`} />
                  <div className="text-xl font-bold text-foreground group-hover:text-accent transition-colors relative z-10">{achievement.value}</div>
                  <div className="text-xs text-muted-foreground group-hover:text-accent transition-colors relative z-10">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Interactive Skill Indicators */}
            <div className="flex justify-center space-x-8">
              {["🔥", "⚡", "🎯", "🚀"].map((emoji, index) => (
                <div 
                  key={index}
                  className="w-12 h-12 bg-surface/40 backdrop-blur-sm border border-border-soft rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 cursor-pointer animate-bounce"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <span className="text-2xl">{emoji}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer">
        <div className="w-8 h-12 border-2 border-accent rounded-full flex justify-center hover:scale-110 transition-transform relative overflow-hidden">
          <div className="w-1 h-4 bg-accent rounded-full mt-2 animate-glow group-hover:bg-gradient-accent"></div>
          <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity rounded-full"></div>
        </div>
        <p className="text-xs text-muted-foreground mt-3 font-medium group-hover:text-accent transition-colors">Explore More</p>
      </div>
    </section>
  );
};

export default HeroSection;