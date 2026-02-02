"use client";

import { Mail, Phone, Linkedin, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 lg:px-0">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-mono text-sm tracking-wider uppercase">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Saurav Srivastava
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Data Engineer & Front-End Developer
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl text-lg">
            I build accessible, pixel-perfect digital experiences for the web.
            With 8+ years of combined experience in building scalable data
            pipelines, automating workflows, and developing responsive web
            applications.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:saurav.srivastava27@outlook.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm">saurav.srivastava27@outlook.com</span>
            </a>
            <a
              href="tel:+918602253045"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm">+91 8602253045</span>
            </a>
            <a
              href="https://linkedin.com/in/saurav-srivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
}
