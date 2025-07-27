import { useState } from "react";
import { ChevronLeft, ChevronRight, Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "./ui/button";

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

  return (
    <section id="certificates" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise 
            and commitment to continuous learning in technology.
          </p>
        </div>

        {/* Certificate Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <div key={cert.credentialId} className="w-full flex-shrink-0">
                  <div className="bg-card rounded-lg shadow-large border border-border-soft overflow-hidden mx-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Certificate Image */}
                      <div className="relative">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                          <Award className="h-16 w-16 text-accent opacity-80" />
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="p-8 lg:p-12">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-accent-light rounded-lg">
                              <Award className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-foreground mb-1">
                                {cert.title}
                              </h3>
                              <p className="text-accent font-medium">{cert.issuer}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center text-muted-foreground text-sm mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Issued: {new Date(cert.date).toLocaleDateString()}</span>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {cert.description}
                        </p>

                        {/* Skills */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-foreground mb-3">Skills Validated:</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-xs bg-accent-light text-accent px-3 py-1 rounded-full font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Credential Info */}
                        <div className="flex items-center justify-between pt-4 border-t border-border-soft">
                          <div>
                            <p className="text-xs text-muted-foreground">Credential ID</p>
                            <p className="text-sm font-mono text-foreground">{cert.credentialId}</p>
                          </div>
                          <Button variant="hero" size="sm" asChild>
                            <a href={cert.verifyLink} className="gap-2">
                              <ExternalLink className="h-4 w-4" />
                              Verify
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="minimal"
            size="icon"
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 shadow-medium hover:shadow-large"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="minimal"
            size="icon"
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 shadow-medium hover:shadow-large"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-accent scale-125" 
                  : "bg-muted hover:bg-accent/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;