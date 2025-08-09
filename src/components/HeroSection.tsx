import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.section 
      ref={ref}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-background via-background to-primary/5"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        >
          <Badge variant="outline" className="bg-accent/10 border-accent/20 text-accent px-6 py-2 gap-2 text-sm font-medium backdrop-blur-sm">
            <Star className="h-4 w-4 fill-current" />
            TRUSTED BY 50+ BUSINESSES WORLDWIDE
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.9] tracking-tight mb-6">
            Plan. Design.
            <br />
            <span className="block">Build. Maintain.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            From strategic roadmaps and pixel-perfect designs to robust, scalable code 
            and ongoing support, we partner with you at every step.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Book Discovery Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Developer Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
              
              {/* Code Editor Header */}
              <div className="bg-muted/20 px-4 py-3 border-b border-border-soft flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">portfolio-website</div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="hidden sm:flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live</span>
                  </div>
                  <div className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-medium">
                    TypeScript
                  </div>
                </div>
              </div>

              {/* Code Editor Content */}
              <div className="p-4 sm:p-6 bg-gradient-to-br from-background/95 to-muted/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  
                  {/* Left Side - Code Preview */}
                  <div className="space-y-4">
                    <div className="bg-muted/30 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-accent">src/</span>
                        <span className="text-muted-foreground">components/Portfolio.tsx</span>
                      </div>
                      <div className="space-y-1 text-muted-foreground">
                        <div><span className="text-blue-400">const</span> <span className="text-yellow-400">skills</span> = [</div>
                        <div className="ml-4"><span className="text-green-400">"React"</span>, <span className="text-green-400">"TypeScript"</span>,</div>
                        <div className="ml-4"><span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"Python"</span></div>
                        <div>];</div>
                        <div className="mt-2"><span className="text-purple-400">export</span> <span className="text-blue-400">default</span> Portfolio;</div>
                      </div>
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                        <div className="text-lg sm:text-xl font-bold text-accent">50+</div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                        <div className="text-lg sm:text-xl font-bold text-green-400">99%</div>
                        <div className="text-xs text-muted-foreground">Uptime</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Terminal & Activity */}
                  <div className="space-y-4">
                    {/* Terminal */}
                    <div className="bg-black/90 rounded-lg p-3 sm:p-4 border border-accent/20">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-mono text-xs">terminal</span>
                      </div>
                      <div className="font-mono text-xs sm:text-sm space-y-1">
                        <div className="text-green-400">$ npm run build</div>
                        <div className="text-muted-foreground">✓ Build completed successfully</div>
                        <div className="text-green-400">$ git commit -m "feat: new feature"</div>
                        <div className="text-muted-foreground">✓ Deployed to production</div>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="text-green-400">$</span>
                          <div className="w-2 h-4 bg-green-400 animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground">Recent Commits</div>
                      <div className="space-y-2">
                        {[
                          { msg: "feat: responsive design improvements", time: "2 min ago", status: "success" },
                          { msg: "fix: mobile navigation", time: "1 hour ago", status: "success" },
                          { msg: "docs: update README", time: "3 hours ago", status: "success" }
                        ].map((commit, i) => (
                          <div key={i} className="flex items-center gap-3 p-2 bg-muted/20 rounded text-xs">
                            <div className={`w-2 h-2 rounded-full ${commit.status === 'success' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                            <div className="flex-1 truncate font-mono">{commit.msg}</div>
                            <div className="text-muted-foreground">{commit.time}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Tech Stack */}
                <div className="mt-6 pt-4 border-t border-border-soft">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-sm text-muted-foreground">Tech Stack:</span>
                    {["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"].map((tech, i) => (
                      <div key={i} className="px-2 py-1 bg-muted/40 text-xs rounded-full text-muted-foreground hover:bg-accent/20 hover:text-accent transition-colors">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Status Indicators */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30 group-hover:scale-110 transition-transform">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shadow-lg border border-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Github className="h-5 w-5 text-accent animate-pulse" />
              </div>

              {/* Code Lines Decoration */}
              <div className="absolute top-20 -left-2 w-1 h-16 bg-accent/20 rounded-full opacity-50"></div>
              <div className="absolute bottom-20 -right-2 w-1 h-12 bg-green-400/20 rounded-full opacity-50"></div>
            </div>
            
            {/* Enhanced Glow Effects */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/10 via-transparent to-green-400/10 rounded-2xl blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="absolute inset-0 -z-20 bg-accent/5 rounded-2xl blur-[100px] scale-150"></div>
          </div>
        </motion.div>

        {/* Bottom Large Text */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground/10 leading-tight tracking-wider">
            Make your startup
            <br />
            <span className="text-accent/20">dreams come true</span>
          </h2>
        </motion.div>


      </div>
    </motion.section>
  );
};

export default HeroSection;