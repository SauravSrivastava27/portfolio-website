import { Award, BadgeCheck, Star } from "lucide-react";

const certifications = [
  {
    title: "SnowPro Core",
    issuer: "Snowflake",
    type: "certification",
  },
  {
    title: "Astronomer Certification: Airflow 2 & 3 Fundamentals",
    issuer: "Astronomer",
    type: "certification",
  },
  {
    title: "Astronomer Certification: DAG Authoring",
    issuer: "Astronomer",
    type: "certification",
  },
  {
    title: "GitHub Copilot Fundamentals",
    issuer: "GitHub",
    type: "certification",
  },
];

const awards = [
  {
    title: "ACE Award",
    issuer: "Accenture",
    description: "Recognition for exceptional performance",
  },
  {
    title: "Legacy Award",
    issuer: "Accenture",
    description: "Outstanding contribution to projects",
  },
  {
    title: "Multiple Integrity Awards",
    issuer: "Accenture",
    description: "High performance and impact recognition",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 lg:px-0 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Certifications & Awards
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Awards & Recognition</h3>
            </div>
            <div className="space-y-4">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Star className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {award.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {award.issuer}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {award.description}
                      </p>
                    </div>
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
