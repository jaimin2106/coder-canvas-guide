import { useRef, useEffect } from "react";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const projects = [
    {
      id: 1,
      title: "EcoHarvest Business Center",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      category: "Architecture"
    },
    {
      id: 2,
      title: "AquaVista Marina Build",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      category: "Construction"
    },
    {
      id: 3,
      title: "BioUrban Living Complex",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      category: "Residential"
    },
    {
      id: 4,
      title: "TechHaven Residences",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      category: "Modern Living"
    },
    {
      id: 5,
      title: "NatureSpire Tower",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop",
      category: "High-rise"
    },
    {
      id: 6,
      title: "Coastal Retreat",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=800&h=600&fit=crop",
      category: "Resort"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      ref={ref}
      id="projects" 
      className="padding-responsive bg-gradient-surface relative overflow-visible"
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container-responsive">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-responsive-xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest architectural and design projects
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Drag Indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <ArrowLeft className="h-4 w-4" />
            <span>DRAG</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Projects Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto overflow-y-visible scrollbar-hide scroll-smooth snap-x snap-mandatory overscroll-x-contain py-2 pr-4 -mr-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative flex-shrink-0 w-80 h-96 rounded-3xl overflow-hidden group cursor-pointer snap-start will-change-transform transform-gpu hover:z-10 ring-1 ring-border/50 hover:ring-accent/40 shadow-medium hover:shadow-large transition-all"
              initial={{ opacity: 0, x: 60 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -6 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>

              {/* Learn Details Button */}
              <div className="absolute top-6 left-6">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-background/90 backdrop-blur-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  LEARN DETAILS
                </Button>
              </div>

              {/* Navigation Arrow */}
              <div className="absolute top-6 right-6">
                <div className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </div>

              {/* Project Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <span className="text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Close Icon */}
              <div className="absolute bottom-6 right-6">
                <div className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-70">
                  <div className="w-3 h-3">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;