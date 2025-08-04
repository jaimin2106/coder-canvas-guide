const SkillsSection = () => {
  // Define skills in mind-map structure
  const skills = {
    center: "MY SKILLS",
    branches: [
      // Top left branch
      {
        direction: "top-left",
        skills: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT JS"]
      },
      // Top branch  
      {
        direction: "top",
        skills: ["ZUSTAND", "TAILWIND CSS", "FRAMER MOTION"]
      },
      // Top right branch
      {
        direction: "top-right", 
        skills: ["NODE", "BUN", "EXPRESS", "REST API"]
      },
      // Bottom left branch
      {
        direction: "bottom-left",
        skills: ["DOM", "UNIT TEST", "PERFORMANCE OPTIMIZE", "SSR"]
      },
      // Bottom branch
      {
        direction: "bottom",
        skills: ["JAVASCRIPT", "TYPESCRIPT", "PYTHON", "GO"]
      },
      // Bottom right branch  
      {
        direction: "bottom-right",
        skills: ["ZOD VALIDATION", "JWT/OAUTH", "SQL", "POSTGRES"]
      },
      // Right branch
      {
        direction: "right",
        skills: ["PRISMA ORM", "DB MODELING", "STRIPE PAYMENTS"]
      },
      // Far bottom branch
      {
        direction: "far-bottom",
        skills: ["REACT NATIVE", "GIT", "GITHUB", "LINUX", "WORDPRESS", "VPS", "VERCEL"]
      },
      // Design branch
      {
        direction: "design",
        skills: ["UX/UI DESIGN", "PRODUCT DESIGN", "FIGMA", "ADOBE XD", "WIREFRAME"]
      }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Skills
            </h2>
          </div>
          
          <div className="space-y-8">
            {skills.branches.map((branch, branchIndex) => (
              <div key={branchIndex} className="space-y-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {branch.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-2 bg-card/50 border border-accent/30 rounded-lg text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Mind-map Layout */}
        <div className="hidden lg:block relative min-h-[800px]">
          
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-card border-2 border-accent px-8 py-4 rounded-lg shadow-xl">
              <h2 className="text-xl font-bold text-accent tracking-wider">
                {skills.center}
              </h2>
            </div>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
            {/* Top connections */}
            <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="50%" y2="25%" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.3" />
            
            {/* Bottom connections */} 
            <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.3" />
            
            {/* Side connections */}
            <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="25%" y2="85%" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.3" />
          </svg>

          {/* Top Left Branch */}
          <div className="absolute top-16 left-16 space-y-3 animate-fade-in" style={{animationDelay: '0.1s'}}>
            {skills.branches[0].skills.map((skill, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-card/60 border border-accent/30 rounded-lg text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Top Branch */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-3 max-w-xs justify-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            {skills.branches[1].skills.map((skill, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-card/60 border border-accent/30 rounded-lg text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Top Right Branch */}
          <div className="absolute top-16 right-16 space-y-3 animate-fade-in" style={{animationDelay: '0.3s'}}>
            {skills.branches[2].skills.map((skill, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-card/60 border border-accent/30 rounded-lg text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Right Branch */}
          <div className="absolute top-1/2 right-16 transform -translate-y-1/2 space-y-3 animate-fade-in" style={{animationDelay: '0.4s'}}>
            {skills.branches[6].skills.map((skill, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-card/60 border border-accent/30 rounded-lg text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Bottom Left Branch */}
          <div className="absolute bottom-32 left-16 space-y-3 animate-fade-in" style={{animationDelay: '0.5s'}}>
            {skills.branches[3].skills.map((skill, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-card/60 border border-accent/30 rounded-lg text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Bottom Branch */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-3 max-w-xs justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            {skills.branches[4].skills.map((skill, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-card/60 border border-accent/30 rounded-lg text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Bottom Right Branch */}
          <div className="absolute bottom-32 right-16 space-y-3 animate-fade-in" style={{animationDelay: '0.7s'}}>
            {skills.branches[5].skills.map((skill, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-card/60 border border-accent/30 rounded-lg text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Far Bottom Branch */}
          <div className="absolute bottom-8 left-1/4 transform -translate-x-1/2 flex flex-wrap gap-2 max-w-md justify-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            {skills.branches[7].skills.map((skill, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-card/60 border border-accent/30 rounded-lg text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Design Branch - Bottom Far Right */}
          <div className="absolute bottom-8 right-8 flex flex-wrap gap-2 max-w-xs justify-end animate-fade-in" style={{animationDelay: '0.9s'}}>
            {skills.branches[8].skills.map((skill, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-card/60 border border-accent/30 rounded-lg text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;