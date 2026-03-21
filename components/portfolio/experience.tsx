"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Building2, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Accenture Solutions Pvt. Ltd",
    role: " Senior Front-End Developer",
    period: "October 2021 - Present",
    projects: [
      {
        name: "Marriott International — Food And Beverages",
        description: [
          "Integrated SevenRooms and OpenTable into the Marriott Bonvoy ecosystem, enabling seamless reservation experiences through web applications and API integrations.",
          "Developed responsive UI using React, HTML, SCSS, Bootstrap, and JavaScript to display reservation and customer data.",
          "Built and integrated RESTful APIs using Python and Node.js for real-time data processing and application functionality.",
          "Ensured secure and reliable API communication using Akana API Gateway , implementing access control and seamless system integration.",
          "Optimized application performance and improved load times through efficient UI rendering and API handling.",
          "Performed testing, debugging, and performance optimization to improve application stability and user experience",
        ],
        technologies: [
          "React",
          "SCSS",
          "Bootstrap",
          "JavaScript",
          "Node.js",
          "Python",
        ],
      },
      {
        name: "Marriott International — Growth Project",
        description: [
          "Contributed to multiple Marriott International growth initiatives, including the Sonder and Guanxi, by developing web-based solutions that enabled seamless cross-brand reservation and loyalty experiences.",
          "Integrated RESTful APIs using Python and Node.js to connect reservation, finance, and loyalty systems, ensuring smooth data flow.",
          "Developed responsive UI using React, HTML, SCSS, Bootstrap, and JavaScript to display reservation and loyalty data.",
          "Implemented secure API integrations for real-time data exchange with partner systems, ensuring accuracy and consistency.",
          "Managed data flow and validation between front-end and backend, supporting key features like reservation tracking and loyalty visibility.",
          "Performed testing, debugging, and performance optimization to improve application stability and user experience.",
        ],
        technologies: ["React", "SCSS", "Bootstrap", "JavaScript", "Node.js", "Python"],
      },
      {
        name: "Silicon Valley Bank",
        description: [
          "Designed and developed scalable front-end components using HTML, SCSS, and Bootstrap, delivering clean, intuitive, and user-focused interfaces.",
          "Built fully responsive and cross-device compatible layouts using Bootstrap grid system and modern UI practices, ensuring consistent performance across desktop, tablet, and mobile platforms.",
          "Implemented interactive UI features and enhanced user experience using JavaScript and SCSS, improving application responsiveness and usability.",
        ],
        technologies: [
          "HTML",
          "SCSS",
          "Bootstrap",
          "JavaScript",
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
          "HealthTech Alpha is a HealthTech analytics platform launched by Galen Growth Asia.",
          "It is one of the most advanced Digital Health analytics platforms for investors and enterprise innovation leaders. The platform empowers investors, corporates, and startups to accelerate their digital health strategies.",
          "Built UI components and improved user workflows using React, Bootstrap 4, and SCSS.",
          "Performed front-end development, including API integration and UI development, to enhance platform functionality and user experience.",
        ],
        technologies: ["React", "Bootstrap 4", "SCSS", "API Integration"],
      },
      {
        name: "Institute of Behavioural Training (IBT)",
        description: [
          "Contributed to the Institute for Behavioural Training platform, a comprehensive training hub for individuals who interact with, teach, care for, or treat people with autism spectrum disorder.",
          "Supported the development of training modules and interfaces aimed at improving accessibility and learning experiences for caregivers and professionals.",
          "Developed and enhanced UI components using HTML5, jQuery, jQuery UI, CSS, and Bootstrap 3.",
          "Performed UI development tasks, focusing on improving usability, responsiveness, and overall user interaction across the platform.",
        ],
        technologies: ["HTML5", "jQuery", "jQuery UI", "CSS", "Bootstrap 3"],
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
                    {/* <ExternalLink className="w-4 h-4 text-muted-foreground" /> */}
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
