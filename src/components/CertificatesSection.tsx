import { useState } from "react";
import { ChevronLeft, ChevronRight, Award, ExternalLink, Calendar, Star, Shield, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const CertificatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024-01-15",
      credentialId: "AWS-CP-2024-001",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      verifyLink: "#",
      skills: ["Cloud Computing", "AWS", "Infrastructure"],
    },
    {
      title: "Google Data Analytics Certificate",
      issuer: "Google Career Certificates",
      date: "2023-12-10",
      credentialId: "GDA-2023-456",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Comprehensive program covering data cleaning, analysis, visualization, and presentation using industry-standard tools.",
      verifyLink: "#",
      skills: ["Data Analysis", "SQL", "Tableau", "R"],
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2023-11-22",
      credentialId: "META-FE-2023-789",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      description: "Advanced frontend development skills including React, responsive design, and user experience principles.",
      verifyLink: "#",
      skills: ["React", "JavaScript", "UI/UX", "Responsive Design"],
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker, Inc.",
      date: "2023-10-05",
      credentialId: "DCA-2023-012",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335a?w=400&h=300&fit=crop",
      description: "Expertise in containerization, Docker orchestration, and deploying applications using Docker technologies.",
      verifyLink: "#",
      skills: ["Docker", "Containerization", "DevOps", "Deployment"],
    },
    {
      title: "Certified JavaScript Developer",
      issuer: "JavaScript Institute",
      date: "2023-09-18",
      credentialId: "JSI-2023-345",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
      description: "Advanced JavaScript concepts, ES6+ features, asynchronous programming, and modern development practices.",
      verifyLink: "#",
      skills: ["JavaScript", "ES6+", "Async Programming", "Node.js"],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref} 
      id="certificates" 
      className="py-20 bg-gradient-to-br from-background via-card/30 to-accent/5 relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            <Trophy className="h-5 w-5 text-accent" />
            <span className="text-accent font-medium text-sm">Professional Certifications</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Certificates & 
            <span className="text-accent block">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional certifications and achievements that validate my expertise 
            and commitment to continuous learning in technology.
          </p>
        </motion.div>

        {/* Certificate Carousel */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="w-full"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 overflow-hidden mx-4 group hover:shadow-accent/20 transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Certificate Image */}
                    <div className="relative group/image">
                      <motion.img
                        src={certificates[currentIndex].image}
                        alt={certificates[currentIndex].title}
                        className="w-full h-64 lg:h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent flex items-center justify-center">
                        <motion.div
                          className="flex items-center gap-4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                        >
                          <Award className="h-16 w-16 text-white drop-shadow-2xl" />
                          <Shield className="h-12 w-12 text-white/80 drop-shadow-xl" />
                        </motion.div>
                      </div>
                      
                      {/* Floating Badge */}
                      <motion.div
                        className="absolute top-4 right-4 bg-accent/20 backdrop-blur-md border border-accent/30 rounded-full px-3 py-1 flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                      >
                        <Star className="h-4 w-4 text-accent fill-accent" />
                        <span className="text-white text-xs font-medium">Verified</span>
                      </motion.div>
                    </div>

                    {/* Certificate Details */}
                    <motion.div 
                      className="p-8 lg:p-12"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl border border-accent/20"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Award className="h-8 w-8 text-accent" />
                          </motion.div>
                          <div>
                            <motion.h3 
                              className="text-2xl lg:text-3xl font-bold text-foreground mb-2 leading-tight"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              {certificates[currentIndex].title}
                            </motion.h3>
                            <motion.p 
                              className="text-accent font-semibold text-lg"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 }}
                            >
                              {certificates[currentIndex].issuer}
                            </motion.p>
                          </div>
                        </div>
                      </div>

                      <motion.div 
                        className="flex items-center text-muted-foreground text-sm mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Issued: {new Date(certificates[currentIndex].date).toLocaleDateString()}</span>
                      </motion.div>

                      <motion.p 
                        className="text-muted-foreground mb-8 leading-relaxed text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        {certificates[currentIndex].description}
                      </motion.p>

                      {/* Skills */}
                      <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                      >
                        <h4 className="text-sm font-semibold text-foreground mb-4">Skills Validated:</h4>
                        <div className="flex flex-wrap gap-3">
                          {certificates[currentIndex].skills.map((skill, index) => (
                            <motion.span
                              key={skill}
                              className="text-sm bg-gradient-to-r from-accent/20 to-accent/10 text-accent px-4 py-2 rounded-full font-medium border border-accent/20 hover:bg-accent/20 transition-all duration-300"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Credential Info */}
                      <motion.div 
                        className="flex items-center justify-between pt-6 border-t border-border/50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        <div>
                          <p className="text-xs text-muted-foreground">Credential ID</p>
                          <p className="text-sm font-mono text-foreground font-medium">{certificates[currentIndex].credentialId}</p>
                        </div>
                        <Button variant="hero" size="sm" className="gap-2 hover:scale-105 transition-transform" asChild>
                          <a href={certificates[currentIndex].verifyLink}>
                            <ExternalLink className="h-4 w-4" />
                            Verify
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent/10 hover:border-accent/30 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent/10 hover:border-accent/30 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div 
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          {certificates.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-accent scale-125 shadow-lg shadow-accent/30" 
                  : "bg-muted hover:bg-accent/50 hover:scale-110"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;