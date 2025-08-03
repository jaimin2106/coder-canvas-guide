const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "JavaScript"],
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Python", "Express", "FastAPI", "REST APIs", "GraphQL"],
    },
    {
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "AWS", "Supabase"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Figma", "VS Code", "Webpack", "Vite"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to deliver exceptional results.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;