import { Brain, Code, Sparkles, Palette, Users, Zap } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      title: "No-Code Development",
      description: "Mastering responsive layouts, micro-interactions, and dynamic components, iterating on solutions and delivering more refined user experiences.",
      icon: "🖥️",
      gradient: "from-blue-400/20 to-cyan-400/20",
      borderColor: "border-blue-400/30"
    },
    {
      id: 2,
      title: "Cognitive Biases in Digital Design",
      description: "How users make decisions, form behavioural patterns, accounting for attention spans, memory limitations, and decision-making.",
      icon: "🧠",
      gradient: "from-purple-400/20 to-pink-400/20",
      borderColor: "border-purple-400/30",
      featured: true
    },
    {
      id: 3,
      title: "Exploring AI",
      description: "Exploring the intersection of design and AI to create intuitive, intelligent, and user-centered experiences.",
      icon: "✨",
      gradient: "from-cyan-400/20 to-blue-400/20",
      borderColor: "border-cyan-400/30"
    },
    {
      id: 4,
      title: "Design System & Variables",
      description: "Deepening expertise in design system architecture and the application of variables in Figma to enhance consistency, scalability, and workflow efficiency.",
      icon: "🎨",
      gradient: "from-green-400/20 to-emerald-400/20",
      borderColor: "border-green-400/30"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-card/30 to-accent/5 relative overflow-hidden">
      {/* Decorative Quote */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in">
        <p className="text-sm text-muted-foreground/60 italic font-light max-w-md">
          "The more we know, the more we know<br />
          there's more to know"
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Skills & Interests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My career is a continuous work in progress. These are some subjects I've been 
            interested and studying to improve skills and amplify knowledge.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`
                group relative p-6 lg:p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in
                ${skill.borderColor} bg-gradient-to-br ${skill.gradient}
                ${skill.featured ? 'md:col-span-2 lg:col-span-1' : ''}
                hover:border-opacity-60 cursor-pointer
              `}
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex items-center">
                  <div className="text-4xl lg:text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  {skill.featured && (
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-2 h-2 bg-accent/60 rounded-full animate-ping" />
                      <div className="w-2 h-2 bg-accent/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base group-hover:text-foreground/80 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-3xl transition-all duration-500" />
              </div>

              {/* Floating Decoration */}
              {skill.featured && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <Sparkles className="h-5 w-5 text-accent animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Decorative Tools Section */}
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {[
              { icon: "⭐", name: "Framer" },
              { icon: "📦", name: "TextEdit" },
              { icon: "🗂️", name: "Folder Colorizer Pro" },
              { icon: "↔️", name: "ResizeIt" },
              { icon: "🟣", name: "CleanMyMac" }
            ].map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-card/30 border border-border/50 rounded-full hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg">{tool.icon}</span>
                <span className="text-sm font-medium text-muted-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;