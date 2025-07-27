import { Code, Database, Globe, Smartphone, Server, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
      color: "text-blue-500",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Python", "Express", "FastAPI", "REST APIs"],
      color: "text-green-500",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
      color: "text-purple-500",
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "Ionic", "PWA", "Expo"],
      color: "text-orange-500",
    },
    {
      title: "Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
      color: "text-red-500",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code"],
      color: "text-indigo-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks 
            that I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card p-8 rounded-lg shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-border-soft group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-accent-light/10 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground ml-4">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center text-muted-foreground hover:text-accent transition-colors duration-200"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 opacity-60"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground italic">
            Always learning and exploring new technologies to stay ahead of the curve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;