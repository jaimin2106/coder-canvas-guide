import { GraduationCap, Code, Target, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech 5th Semester, Silver Oak University",
      color: "text-blue-500",
    },
    {
      icon: Code,
      title: "Experience",
      description: "2+ years of passionate coding and development",
      color: "text-green-500",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Full-stack development & modern web technologies",
      color: "text-purple-500",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Creating innovative solutions that make a difference",
      color: "text-red-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm a passionate <span className="text-accent font-semibold">full-stack developer</span> currently 
                  pursuing my B.Tech in Computer Science at Silver Oak University. My journey in 
                  technology began with curiosity and has evolved into a deep passion for creating 
                  innovative digital solutions.
                </p>
                
                <p>
                  With a strong foundation in modern web technologies, I specialize in building 
                  scalable applications that deliver exceptional user experiences. I believe in 
                  writing clean, maintainable code and staying up-to-date with the latest industry 
                  trends and best practices.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge through technical blog posts. 
                  I'm always eager to take on new challenges and collaborate on exciting projects.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-card p-6 rounded-lg border border-border-soft shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-3">My Mission</h3>
              <p className="text-muted-foreground italic">
                "To leverage technology as a force for positive change, creating solutions that 
                not only solve problems but inspire and empower users to achieve their goals."
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="bg-card p-6 rounded-lg shadow-medium hover:shadow-large transition-all duration-300 border border-border-soft group hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-accent-light/10 ${highlight.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Fun Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">∞</div>
              <div className="text-muted-foreground">Coffee Cups ☕</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;