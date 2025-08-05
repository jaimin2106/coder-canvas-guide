import { useState } from "react";
import { GraduationCap, Code, Target, Heart, ChevronRight, Award, Users, Coffee, Zap } from "lucide-react";
import { Button } from "./ui/button";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("journey");

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech 5th Semester, Silver Oak University",
      gradient: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Code,
      title: "Experience",
      description: "2+ years of passionate coding and development",
      gradient: "from-green-500/20 to-emerald-600/20",
      iconColor: "text-green-500",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Full-stack development & modern web technologies",
      gradient: "from-purple-500/20 to-violet-600/20",
      iconColor: "text-purple-500",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Creating innovative solutions that make a difference",
      gradient: "from-red-500/20 to-rose-600/20",
      iconColor: "text-red-500",
    },
  ];

  const stats = [
    { icon: Award, number: "50+", label: "Projects Completed", color: "text-blue-500" },
    { icon: Users, number: "15+", label: "Technologies Mastered", color: "text-green-500" },
    { icon: Coffee, number: "∞", label: "Coffee Cups ☕", color: "text-amber-500" },
    { icon: Zap, number: "24/7", label: "Ready to Code", color: "text-purple-500" },
  ];

  const tabs = [
    {
      id: "journey",
      label: "My Journey",
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            I'm a passionate <span className="text-accent font-semibold">full-stack developer</span> currently 
            pursuing my B.Tech in Computer Science at Silver Oak University. My journey in 
            technology began with curiosity and has evolved into a deep passion for creating 
            innovative digital solutions.
          </p>
          <p className="leading-relaxed">
            With a strong foundation in modern web technologies, I specialize in building 
            scalable applications that deliver exceptional user experiences. I believe in 
            writing clean, maintainable code and staying up-to-date with the latest industry 
            trends and best practices.
          </p>
        </div>
      )
    },
    {
      id: "philosophy",
      label: "Philosophy",
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            I believe that <span className="text-accent font-semibold">great code is not just functional, but elegant</span>. 
            Every line of code should serve a purpose, every component should be reusable, 
            and every user interaction should be intuitive.
          </p>
          <p className="leading-relaxed">
            My approach combines technical excellence with user-centered design thinking. 
            I don't just build applications; I craft experiences that users love and 
            businesses can rely on.
          </p>
        </div>
      )
    },
    {
      id: "future",
      label: "Future Goals",
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open-source projects, or sharing my knowledge through technical blog posts. 
            I'm always eager to take on new challenges and collaborate on exciting projects.
          </p>
          <p className="leading-relaxed">
            My goal is to become a <span className="text-accent font-semibold">tech leader</span> who not only 
            builds amazing products but also mentors the next generation of developers.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Enhanced Content Section */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 relative">
                About Me
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
              </h2>

              {/* Interactive Tabs */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-6 p-1 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
                  {tabs.map((tab) => (
                    <Button
                      key={tab.id}
                      variant={activeTab === tab.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab(tab.id)}
                      className={`transition-all duration-300 ${
                        activeTab === tab.id 
                          ? 'bg-accent text-accent-foreground shadow-md transform scale-105' 
                          : 'hover:bg-accent/10'
                      }`}
                    >
                      {tab.label}
                    </Button>
                  ))}
                </div>

                {/* Tab Content with Smooth Transition */}
                <div className="min-h-[200px]">
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`transition-all duration-500 ${
                        activeTab === tab.id 
                          ? 'opacity-100 transform translate-y-0' 
                          : 'opacity-0 transform translate-y-4 absolute pointer-events-none'
                      }`}
                    >
                      <div className="text-muted-foreground">
                        {tab.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Mission Statement */}
            <div className="relative group animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-500 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 animate-pulse" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                      My Mission
                      <ChevronRight className="h-5 w-5 text-accent" />
                    </h3>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "To leverage technology as a force for positive change, creating solutions that 
                      not only solve problems but inspire and empower users to achieve their goals."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Highlights Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className={`
                    relative group cursor-pointer overflow-hidden
                    bg-gradient-to-br ${highlight.gradient} backdrop-blur-sm
                    p-6 rounded-2xl border border-border/30 
                    hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10
                    transform hover:-translate-y-2 hover:scale-105
                    transition-all duration-500 animate-fade-in
                  `}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Floating background element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className={`inline-flex p-4 rounded-xl bg-background/50 ${highlight.iconColor} mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>

                  {/* Interactive hover line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>

            {/* Enhanced Interactive Stats */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/30 animate-fade-in" style={{animationDelay: '600ms'}}>
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
                    style={{animationDelay: `${700 + index * 100}ms`}}
                  >
                    <div className={`inline-flex p-3 rounded-full bg-accent/10 ${stat.color} mb-3 group-hover:bg-accent/20 transition-all duration-300`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1 group-hover:scale-125 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;