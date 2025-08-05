import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const projectSlides = [
    {
      id: 1,
      title: "My Works",
      subtitle: "Witness the beauty of nature through our lens, as we showcase stunning landscapes that evoke wonder and appreciation for the environment.",
      projects: [
        {
          id: 1,
          title: "Mountain Peaks",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
          size: "small",
          category: "Landscape"
        },
        {
          id: 2,
          title: "Ocean Waves",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=1000&fit=crop",
          size: "large",
          category: "Seascape"
        },
        {
          id: 3,
          title: "Dancing Dunes",
          description: "Capturing the breathtaking beauty of sand dunes through artistic lensmanship.",
          image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
          size: "featured",
          tags: ["Photography", "Art Direction"],
          category: "Desert"
        },
        {
          id: 4,
          title: "Coastal Rocks",
          image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=600&fit=crop",
          size: "small",
          category: "Coastal"
        }
      ]
    },
    {
      id: 2,
      title: "My Works",
      subtitle: "Exploring urban landscapes and architectural marvels that define our modern world.",
      projects: [
        {
          id: 5,
          title: "City Lights",
          image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop",
          size: "small",
          category: "Urban"
        },
        {
          id: 6,
          title: "Architecture",
          image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=1000&fit=crop",
          size: "large",
          category: "Architecture"
        },
        {
          id: 7,
          title: "Modern Structures",
          description: "Contemporary architectural designs that push the boundaries of creativity.",
          image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
          size: "featured",
          tags: ["Architecture", "Design"],
          category: "Modern"
        },
        {
          id: 8,
          title: "Bridge Views",
          image: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=800&h=600&fit=crop",
          size: "small",
          category: "Infrastructure"
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectSlides.length) % projectSlides.length);
  };

  const currentProjects = projectSlides[currentSlide];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-card via-background to-card/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {currentProjects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {currentProjects.subtitle}
          </p>
        </div>

        {/* Projects Bento Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-4 h-[500px] md:h-[600px] lg:h-[700px] transition-all duration-700 ease-in-out"
          key={currentSlide}
        >
          {currentProjects.projects.map((project, index) => {
            let gridClasses = "";
            
            switch (project.size) {
              case "small":
                gridClasses = index === 0 
                  ? "md:col-span-3 md:row-span-5 md:col-start-1 md:row-start-1" 
                  : "md:col-span-3 md:row-span-5 md:col-start-10 md:row-start-1";
                break;
              case "large":
                gridClasses = "md:col-span-4 md:row-span-10 md:col-start-4 md:row-start-1";
                break;
              case "featured":
                gridClasses = "md:col-span-5 md:row-span-7 md:col-start-7 md:row-start-6";
                break;
              default:
                gridClasses = "md:col-span-3 md:row-span-6";
            }

            return (
              <div
                key={project.id}
                className={`
                  ${gridClasses} 
                  relative group rounded-3xl overflow-hidden cursor-pointer
                  hover:scale-[1.03] transition-all duration-700 ease-out
                  animate-fade-in hover:shadow-2xl hover:shadow-accent/30
                  hover:z-10 transform-gpu
                  ${project.size === 'featured' ? 'bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20' : ''}
                  ${project.size === 'large' ? 'hover:scale-[1.02]' : ''}
                `}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* Animated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-70 group-hover:opacity-50 transition-all duration-500" />
                  
                  {/* Floating particles effect for featured card */}
                  {project.size === 'featured' && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/60 rounded-full animate-ping" style={{animationDelay: '0s'}} />
                      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
                      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent/50 rounded-full animate-ping" style={{animationDelay: '1s'}} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  {project.size === 'featured' && (
                    <>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 transform group-hover:translate-y-[-8px] group-hover:scale-105 transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-200">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-300">
                        {project.tags?.map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-background/90 backdrop-blur-md text-foreground text-xs font-medium rounded-full border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-110"
                            style={{animationDelay: `${tagIndex * 100}ms`}}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                  
                  {project.size !== 'featured' && (
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs text-accent font-medium px-2 py-1 bg-accent/10 rounded-full border border-accent/20 hover:bg-accent/20 transition-all duration-300">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Enhanced Hover Effect Border with Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/40 rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)]" />
                
                {/* Corner accent for featured card */}
                {project.size === 'featured' && (
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300" />
                )}
              </div>
            );
          })}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {projectSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-accent scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;