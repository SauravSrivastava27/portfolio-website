"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Building2, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Accenture Solutions Pvt. Ltd",
    role: "Data Engineer / Front-End Developer",
    period: "October 2021 - Present",
    projects: [
      {
        name: "Marriott International — Food And Beverages",
        description: [
          "Integrated SevenRooms and OpenTable reservation platforms into the Marriott Bonvoy ecosystem and ingested large-scale reservation, customer, venue, and event data into the Marriott MDP system.",
          "Developed automation scripts in Python to validate, clean, and transform incoming datasets for ingestion into MDP.",
          "Built and managed CI/CD pipelines using Harness to automate deployment of workflows, configurations, and environment updates.",
          "Deployed and monitored microservices and ingestion components on Amazon EKS, ensuring scalability, stability, and smooth end-to-end operation.",
          "Utilized Akana configuration to manage and secure API endpoints that were hosted outside the Marriott environment.",
          "Performed end-to-end testing and supported production operations, including RCA and continuous improvements.",
        ],
        technologies: [
          "Python",
          "AWS EKS",
          "Harness CI/CD",
          "Snowflake",
          "Akana",
        ],
      },
      {
        name: "Marriott International — Growth Project",
        description: [
          "Worked on multiple MI Growth initiatives, including the MAX West partnership and Guanxi, aimed at expanding Marriott International's global footprint.",
          "Supported end-to-end data integration across reservation, finance, loyalty, and stay-related domains using Airflow, NiFi, and Snowflake.",
          "Built automated data pipelines to manage 2-way data exchanges with partner hotel groups.",
          "Enabled smooth transfer of aggregated finance actuals, reservation-level details, Elite Room Night Credits, and loyalty metadata into Snowflake-based MDP systems.",
        ],
        technologies: ["Airflow", "Apache NiFi", "Snowflake", "Python", "SQL"],
      },
      {
        name: "Silicon Valley Bank",
        description: [
          "Designed and implemented front-end components using HTML, CSS3, SCSS, and Bootstrap, ensuring a clean and intuitive user experience.",
          "Built a fully responsive layout leveraging Bootstrap's grid system and utility classes for seamless performance across devices.",
          "Developed interactive features and enhanced UI behavior using .NET Core 2.0, jQuery, jQuery UI, and Bootstrap 4.",
        ],
        technologies: [
          "HTML",
          "CSS3",
          "SCSS",
          "Bootstrap 4",
          ".NET Core 2.0",
          "jQuery",
        ],
      },
    ],
  },
  {
    company: "Humane Business Intelligence Technology Solutions Pvt. Ltd",
    role: "Front-End Developer",
    period: "Aug 2017 - Oct 2021",
    projects: [
      {
        name: "Galen Growth Asia — HealthTech Alpha (HTA)",
        description: [
          "HealthTech Alpha (HTA) is one of the most advanced Digital Health analytics platforms for investors and enterprise innovation leaders.",
          "The platform empowers investors, corporates, and startups to accelerate their digital health strategies.",
          "Built UI components and improved user workflows using React, Bootstrap 4, and SCSS.",
          "Performed front-end development, including API integration and UI development, to enhance platform functionality and user experience.",
        ],
        technologies: ["React", "Bootstrap 4", "SCSS", "API Integration"],
      },
      {
        name: "Institute of Behavioural Training (IBT)",
        description: [
          "Contributed to the IBT platform, a comprehensive training hub for individuals who interact with, teach, care for, or treat people with autism spectrum disorder (ASD).",
          "Supported the development of training modules and interfaces aimed at improving accessibility and learning experiences.",
          "Developed and enhanced UI components using .NET Core 2.0, jQuery, jQuery UI, CSS, and Bootstrap 3.",
          "Focused on improving usability, responsiveness, and overall user interaction across the platform.",
        ],
        technologies: [".NET Core 2.0", "jQuery", "jQuery UI", "CSS", "Bootstrap 3"],
      },
    ],
  },
];

export function Experience() {
  const [activeCompany, setActiveCompany] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 lg:px-0 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Work Experience</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Company Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-1 md:min-w-[200px] border-b md:border-b-0 md:border-l border-border scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {experiences.map((exp, index) => (
              <button
                type="button"
                key={exp.company}
                onClick={() => setActiveCompany(index)}
                className={cn(
                  "px-4 py-3 text-left text-sm font-medium whitespace-nowrap transition-all",
                  "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                  activeCompany === index
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {exp.company.split(" ").slice(0, 2).join(" ")}
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="flex-1 min-h-[400px]">
            <div className="space-y-2 mb-6">
              <h3 className="text-xl font-semibold">
                {experiences[activeCompany].role}{" "}
                <span className="text-primary">
                  @ {experiences[activeCompany].company.split(" ")[0]}
                </span>
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="font-mono">
                  {experiences[activeCompany].period}
                </span>
              </div>
            </div>

            <div className="space-y-8">
              {experiences[activeCompany].projects.map((project) => (
                <div
                  key={project.name}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      <h4 className="font-semibold text-foreground">
                        {project.name}
                      </h4>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>

                  <ul className="space-y-2 mb-4">
                    {project.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
