import { GraduationCap, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Objective
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seeking a role that allows me to apply my 5 years of
                    experience in front-end development and 3 years in data
                    engineering to build high-performing web solutions and
                    efficient data pipelines. My goal is to deliver value
                    through advanced front-end development, workflow automation,
                    secure file operations, and streamlined CI/CD deployments.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm a Data Engineer and Front-End Developer with{" "}
              <span className="text-foreground font-medium">
                8+ years of combined experience
              </span>{" "}
              in building scalable data pipelines, automating workflows, and
              developing responsive web applications. I have a strong background
              in CI/CD, API integrations, secure file operations, and end-to-end
              production delivery for global enterprise platforms.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently, I work at{" "}
              <span className="text-primary font-medium">
                Accenture Solutions Pvt. Ltd
              </span>{" "}
              where I contribute to data engineering and front-end development
              projects for major clients including Marriott International and
              Silicon Valley Bank.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  Bachelor of Engineering in Computer Science
                </p>
                <p className="text-sm text-muted-foreground">
                  Patel College of Science and Technology (RGPV)
                </p>
                <p className="text-xs text-muted-foreground">
                  2012 - 2016 • Bhopal, Madhya Pradesh
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  8+ Years Experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Enterprise-Level Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Global Client Portfolio
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Multiple Award Winner
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
