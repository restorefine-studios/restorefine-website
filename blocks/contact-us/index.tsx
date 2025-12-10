"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    const formData = new FormData(event.currentTarget);
  
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      state: formData.get("state"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      

      if (result.success === true ) {
        setFormStatus({
          type: "success",
          message: "Message sent successfully! We will get back to you soon.",
        });
        form.reset();
      } 
    } catch (error) {
      setFormStatus({
        type: "error",
        message: `Failed to send message, due to ${error}. Please try again.`,
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setFormStatus({ type: null, message: "" });
      },5000)
     
    }
  }

  return (
    <section className="">
      <div className="container mx-auto py-36">
        <h2 className="mb-12 text-5xl font-medium">
          <span className="p-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="order-last lg:order-first space-y-12 mt-12 lg:mt-0">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-white">
                Enterprise Enquiries
              </h3>
              <p className="text-sm text-white/80">
                Want to know more about what we do?
              </p>
              <p className="text-sm text-white/80">
                Have a general query? We&rsquo;ll always do our best to help:
              </p>
              <a
                href="mailto:enquiries@restorefine.com"
                className="inline-flex items-center justify-center px-8 py-3 text-md text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
              >
                enquiries@restorefine.com
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-white">Got Talent?</h3>
              <p className="text-sm text-white/80">
                We&apos;re always on the lookout for talented creatives in
                design, strategy, and branding. If you&apos;re passionate about
                making brands shine and ready to bring fresh ideas to life,
                let&rsquo;s connect!
              </p>
              <a
                href="mailto:hello@restorefine.com"
                className="inline-flex items-center justify-center px-8 py-3 text-md text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
              >
                hello@restorefine.com
              </a>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-8 order-first lg:order-last"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg text-white/60 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="name"
                    required
                    placeholder="Enter Your Name Here"
                    className="w-full bg-transparent border-white/30 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg text-white/60 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full bg-transparent border-white/30 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg text-white/60 mb-2"
                  >
                    Mobile Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter Your Phone Here"
                    className="w-full bg-transparent border-white/30 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="block text-lg text-white/60 mb-2"
                  >
                    Company/Work
                  </label>
                  <Input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="What Industry Do You Work In"
                    className="w-full bg-transparent border-white/30 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg text-white/60 mb-2"
                  >
                    How can we help?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="I'd like to know how you can help me with..."
                    className="w-full bg-transparent border-white/30 text-white placeholder:text-white/40 min-h-[150px]"
                  />
                </div>
              </div>

              {formStatus.message && (
                <div
                  className={`text-sm ${
                    formStatus.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-auto px-8 h-14 bg-black text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <div className="text-md flex items-center gap-x-3">
                    Submit
                    <div className="flex items-center justify-center bg-[red] rounded-full w-7 h-7  p-1">
                      <ArrowRight className="w-7 h-7" />
                    </div>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
