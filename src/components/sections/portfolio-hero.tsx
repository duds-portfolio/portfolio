"use client";

import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { ArrowRight, Users, FileText, Settings, Target } from "lucide-react";
import { cn } from "@/lib/utils";

// Placeholder carousel slides with content recommendations
// Replace these with actual images when available:
// - Service blueprint workshop photos
// - Journey mapping sessions
// - Stakeholder engagement activities
// - Prototype testing sessions
// - Service design artifacts (blueprints, journey maps, frameworks)
const SLIDES = [
  {
    image: "/images/homepage/hero.webp",
    label: "Service Blueprint",
    description: "Workshop session mapping service delivery across touchpoints",
  },
  {
    image: "/images/homepage/hero2.webp",
    label: "Journey Mapping",
    description: "User research and journey mapping for regulatory services",
  },
  {
    image: "/images/homepage/hero3.webp",
    label: "Stakeholder Engagement",
    description: "Co-design workshop with government and community stakeholders",
  },
];

const features = [
  {
    title: "Policy Translation",
    description: "Turn strategy into executable service models.",
    icon: FileText,
  },
  {
    title: "User Research",
    description: "Deep understanding of stakeholder needs.",
    icon: Users,
  },
  {
    title: "Service Blueprinting",
    description: "Map end-to-end service delivery.",
    icon: Settings,
  },
  {
    title: "Framework Development",
    description: "Create repeatable, scalable solutions.",
    icon: Target,
  },
];

interface SlideIndicatorProps {
  currentSlide: number;
  slides: Array<{ label: string }>;
  className?: string;
  api: CarouselApi | null;
}

const SlideIndicator = ({
  currentSlide,
  slides,
  className,
  api,
}: SlideIndicatorProps) => {
  return (
    <div className={cn("flex flex-col items-center font-medium", className)}>
      <div className="">
        <span className="text-sand-700">{currentSlide + 1} of {slides.length} — </span>
        <span className="text-primary">{slides[currentSlide].label}</span>
      </div>
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="py-2"
          >
            <div
              className={cn(
                "h-0.5 w-6 rounded-full transition-colors",
                index === currentSlide
                  ? "bg-primary"
                  : "bg-primary/20 hover:bg-primary/40",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export const PortfolioHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-sand-100 relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
      <div className="container relative grid gap-12 lg:grid-cols-[1fr_0.68fr]">
        {/* Gradient border */}
        <div className="to-foreground/27 bg-linear-to-r absolute inset-x-0 bottom-0 z-10 -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] h-px from-transparent" />
        
        {/* Left side - Content */}
        <div className="space-y-8 lg:space-y-12">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              From Policy
              <br />
              to Practice
            </h1>
            <p className="text-sand-700 font-inter-tight leading-13 mt-3 text-3xl font-medium md:text-4xl lg:text-5xl">
              Service design for government and complex organisations. 15 years translating strategy into frameworks that work with imperfect systems.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex max-w-[250px] gap-2.5 lg:gap-5"
                >
                  <Icon className="mt-1 size-4 shrink-0 lg:size-5 text-primary" />
                  <div>
                    <h2 className="font-inter font-semibold text-sm lg:text-base">
                      {feature.title}
                    </h2>
                    <p className="text-muted-foreground text-xs lg:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="group">
              <a href="/case-studies">
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a href="#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <SlideIndicator
            currentSlide={currentSlide}
            slides={SLIDES}
            className="mb-4 max-lg:hidden"
            api={api}
          />
        </div>

        {/* Right side - Carousel */}
        <div className="relative -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] shadow-xl max-lg:translate-x-10 lg:shadow-2xl">
          <Carousel
            className="size-full [&>div]:size-full"
            setApi={setApi}
            opts={{
              loop: true,
            }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          >
            <CarouselContent className="size-full">
              {SLIDES.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative size-full min-h-[30rem] overflow-hidden rounded-t-xl bg-muted">
                    <img
                      src={slide.image}
                      alt={`${slide.label}: ${slide.description}`}
                      className="size-full object-cover object-left-top"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.parentElement?.querySelector('.placeholder') as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    {/* Placeholder fallback */}
                    <div className="placeholder hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                      <div className="text-center space-y-2">
                        <div className="text-4xl font-bold text-primary/40 mb-4">
                          {slide.label}
                        </div>
                        <p className="text-muted-foreground text-sm max-w-xs">
                          {slide.description}
                        </p>
                        <p className="text-xs text-muted-foreground/60 mt-4">
                          Replace with actual image: {slide.image}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      
      {/* Mobile slide indicator */}
      <SlideIndicator
        currentSlide={currentSlide}
        slides={SLIDES}
        className="mb-8 mt-6 lg:hidden"
        api={api}
      />
    </section>
  );
};
