"use client";

import { useForm } from "react-hook-form";
import { Mail, Github, Linkedin, Briefcase, Facebook, Instagram, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { siteConfig, emailjsConfig } from "@/data/site";
import { PROJECT_TYPES, BUDGET_RANGES, type ContactFormValues } from "@/lib/contact-types";
import { SuccessToaster, ErrorToaster } from "@/components/Toaster";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit = async (values: ContactFormValues) => {
    const { serviceId, templateId, publicKey } = emailjsConfig;

    if (!serviceId || !templateId || !publicKey) {
      ErrorToaster(
        "The contact form isn't fully wired up to EmailJS yet — please reach out directly using one of the links below in the meantime."
      );
      return;
    }

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          project_type: values.projectType,
          budget: values.budget || "Not specified",
          message: values.message,
          to_email: siteConfig.email,
        },
        { publicKey }
      );
      SuccessToaster("Thanks — your message is on its way. I'll get back to you soon.");
      reset();
    } catch {
      ErrorToaster("Something went wrong sending your message. Please try again or email me directly.");
    }
  };

  const pills = [
    { href: `mailto:${siteConfig.email}`, label: siteConfig.email, icon: Mail },
    { href: siteConfig.social.github, label: "GitHub", icon: Github },
    { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: siteConfig.social.fiverr, label: "Fiverr", icon: Briefcase },
    { href: siteConfig.social.facebook, label: "Facebook", icon: Facebook },
    { href: siteConfig.social.instagram, label: "Instagram", icon: Instagram },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="contact-cta">
            <div className="row g-5">
              <div className="col-lg-5 position-relative">
                <span className="eyebrow">Get In Touch</span>
                <h2 className="section-title" style={{ fontSize: "clamp(1.9rem, 3vw, 2.6rem)" }}>
                  Have an Idea?
                  <br />
                  Let&apos;s Build It.
                </h2>
                <p className="fs-6">
                  Whether you need a website, web application, SaaS product or custom backend system,
                  let&apos;s discuss your requirements.
                </p>

                <div className="contact-info-row">
                  {pills.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      className="contact-info-pill"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      <Icon size={16} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="col-lg-7 position-relative">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-field mb-0">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          className="form-control"
                          placeholder="Your full name"
                          {...register("name", { required: "Please enter your name" })}
                        />
                        {errors.name && <p className="field-error">{errors.name.message}</p>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-field mb-0">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="you@example.com"
                          {...register("email", {
                            required: "Please enter your email",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                          })}
                        />
                        {errors.email && <p className="field-error">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-field mb-0">
                        <label htmlFor="projectType">Project Type</label>
                        <select
                          id="projectType"
                          className="form-select"
                          defaultValue=""
                          {...register("projectType", { required: "Please select a project type" })}
                        >
                          <option value="" disabled>
                            Select project type
                          </option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && <p className="field-error">{errors.projectType.message}</p>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-field mb-0">
                        <label htmlFor="budget">Budget</label>
                        <select id="budget" className="form-select" defaultValue="" {...register("budget")}>
                          <option value="" disabled>
                            Select a range
                          </option>
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-field mb-0">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          rows={4}
                          className="form-control"
                          placeholder="Tell me a bit about your project..."
                          {...register("message", { required: "Please add a short message" })}
                        />
                        {errors.message && <p className="field-error">{errors.message.message}</p>}
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Start a Project"} <Send size={16} />
                      </button>
                      <p className="form-note">
                        I typically respond within 1–2 business days. Prefer email? Use the link on the left.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
