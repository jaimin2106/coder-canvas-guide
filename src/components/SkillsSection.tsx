import { Progress } from "@/components/ui/progress";
import { Palette, Code, PenTool, Search } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "UI Design",
      percentage: 90,
    },
    {
      icon: Code,
      title: "Coding", 
      percentage: 60,
    },
    {
      icon: PenTool,
      title: "Product Design",
      percentage: 80,
    },
    {
      icon: Search,
      title: "User Research",
      percentage: 85,
    }
  ];

  const additionalSkills = [
    { title: "No Code Tools", percentage: 65 }
  ];

  const tools = [
    { name: "Framer", logo: "🖼️" },
    { name: "Webflow", logo: "🌊" },
    { name: "Shopify", logo: "🛍️" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Title and Description */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              My Professional<br />
              <span className="text-accent">Background Skills and<br />
              Accomplishments</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the when
            </p>
          </div>

          {/* Right Side - Skills */}
          <div className="space-y-8">
            
            {/* Skill Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-8">
              {skillCategories.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex flex-col items-center space-y-3 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card/50 border border-accent/20 flex items-center justify-center hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm">
                      <Icon size={32} className="text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center">{skill.title}</span>
                  </div>
                );
              })}
            </div>

            {/* Progress Bars */}
            <div className="space-y-6">
              {/* Main Skills with Icons */}
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((skill, index) => (
                  <div key={index} className="space-y-3 animate-fade-in" style={{animationDelay: `${(index + 4) * 0.1}s`}}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.title}</span>
                      <span className="text-sm font-bold text-accent">{skill.percentage}%</span>
                    </div>
                    <Progress value={skill.percentage} className="h-2" />
                  </div>
                ))}
              </div>

              {/* Additional Skills */}
              {additionalSkills.map((skill, index) => (
                <div key={index} className="space-y-3 animate-fade-in" style={{animationDelay: `${(skillCategories.length + 4 + index) * 0.1}s`}}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">{skill.title}</span>
                    <span className="text-sm font-bold text-accent">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="flex items-center space-x-8 pt-6 animate-fade-in" style={{animationDelay: '1s'}}>
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors duration-300">
                  <span className="text-xl">{tool.logo}</span>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;