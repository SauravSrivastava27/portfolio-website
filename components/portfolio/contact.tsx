"use client";

import React from "react"

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Linkedin, MapPin, X, Loader2, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMAILJS_SERVICE_ID = "service_yf4mpq5";
const EMAILJS_TEMPLATE_ID = "template_fhxm0p3";
const EMAILJS_PUBLIC_KEY = "rL1T4uwZwSbUWowgW";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_name: "Saurav Srivastava",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus("idle");
      }, 2000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section id="contact" className="py-24 px-6 lg:px-0">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            I'm currently looking for new opportunities where I can apply my expertise in front-end
            development and data engineering. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a
              href="mailto:saurav.srivastava27@outlook.com"
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                saurav.srivastava27@outlook.com
              </span>
            </a>
            <a
              href="tel:+918602253045"
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                +91 8602253045
              </span>
            </a>
            <a
              href="https://linkedin.com/in/saurav-srivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                linkedin.com/in/saurav-srivastava
              </span>
            </a>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">India</span>
            </div>
          </div>

          <Button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-6 text-sm font-medium"
            size="lg"
          >
            Say Hello
          </Button>
        </div>
      </section>

      {/* Email Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => status !== "sending" && setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-lg bg-card border border-border rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => status !== "sending" && setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors"
              disabled={status === "sending"}
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Send me a message</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Fill out the form below and I'll get back to you soon.
              </p>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h4 className="text-lg font-semibold">Message Sent!</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Thank you for reaching out. I'll respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    required
                    value={formData.from_name}
                    onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                    placeholder="John Doe"
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    required
                    value={formData.from_email}
                    onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                    placeholder="john@example.com"
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none text-foreground"
                    placeholder="Hi Saurav, I'd like to discuss..."
                    disabled={status === "sending"}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full py-6"
                  size="lg"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
