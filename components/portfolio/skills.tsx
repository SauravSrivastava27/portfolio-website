import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Shield,
  Lightbulb,
  ServerCog,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Web Development",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "React",
    ],
  },
  {
    title: "Backend Development",
    icon: ServerCog,
    skills: [
      "Python",
      "Node.js",
      "RESTful APIs",
      "API Integration",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "Version Control",
    icon: Shield,
    skills: [
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Tools & Development Environment",
    icon: Wrench,
    skills: ["VS Code", "Postman", "Git Bash", "Jira"],
  },
  {
    title: "Problem-Solving",
    icon: Lightbulb,
    skills: [
      "Debugging",
      "Root Cause Analysis",
      "Performance Optimization",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Skills & Expertise</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
