"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export const PortfolioCTA = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24 lg:py-32">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6">
          Ready to transform your service delivery?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Let's discuss how service design can translate your strategy into executable frameworks that work with imperfect systems.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="group">
            <a href="https://calendar.app.google/mtpasKfamqh9uvUQA" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="group bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

