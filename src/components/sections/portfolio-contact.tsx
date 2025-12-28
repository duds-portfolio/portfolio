"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Calendar, Linkedin, MapPin, Clock } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  organisation?: string;
  message: string;
};

export const PortfolioContact = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Get Azure Function URL from environment variable or use default
      const azureFunctionUrl = import.meta.env.PUBLIC_AZURE_FUNCTION_URL;
      
      if (!azureFunctionUrl) {
        // Development mode - log to console
        console.log('Contact form submission (development mode):', data);
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
        return;
      }

      const response = await fetch(azureFunctionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: 'portfolio-contact-form',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert(error instanceof Error ? error.message : 'An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="bg-muted py-16 md:py-24 lg:py-32">
      <div className="container max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Let's discuss your project. Typically respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Panel - Contact Information */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">Email</h4>
                      <a
                        href="mailto:hello@dalerogers.com.au"
                        className="text-primary hover:underline text-sm"
                      >
                        hello@dalerogers.com.au
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a
                        href="tel:+61400944492"
                        className="text-primary hover:underline text-sm"
                      >
                        +61 400 944 492
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">
                        Mon-Fri, 9am-5pm AEDT
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground text-sm">
                        Canberra, Australia
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">Response Time</h4>
                      <p className="text-muted-foreground text-sm">
                        Typically within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Connect</h3>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="group">
                    <a
                      href="https://www.linkedin.com/in/dalerogers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="group">
                    <a
                      href="https://calendar.app.google/mtpasKfamqh9uvUQA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Contact Form */}
          <div>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

                {submitted && (
                  <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-md">
                    <p className="text-primary font-medium text-sm">
                      Thank you! Your message has been sent. I'll respond within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organisation">
                      Organisation <span className="text-muted-foreground text-sm">(optional)</span>
                    </Label>
                    <Input
                      id="organisation"
                      type="text"
                      {...register("organisation")}
                      placeholder="Your organisation"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      placeholder="Tell me about your project..."
                      className="min-h-[120px] resize-none"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
