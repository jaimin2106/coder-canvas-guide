import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, useStaggeredAnimation } from "../hooks/useScrollAnimation";

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

  const { ref, isVisible } = useScrollAnimation(0.1);
  const { containerRef, visibleItems } = useStaggeredAnimation(skills.length, 120);

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="py-16 bg-background relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Skills & Interests
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A concise look at my core capabilities.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.id}
              className="group relative p-5 rounded-2xl border border-border bg-card hover:-translate-y-1 hover:shadow-medium transition-all duration-300 overflow-hidden will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={visibleItems.includes(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-base">
                  <span aria-hidden>{skill.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {skill.description}
                  </p>
                </div>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="h-4 w-4 text-accent" />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default SkillsSection;