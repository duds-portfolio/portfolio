"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Testimonials extracted from case study outcomes
const TESTIMONIALS = [
  {
    quote:
      "The service design approach delivered 100% uptime during 6-month Antarctic winter isolation. The offline-first framework has become essential for expeditioner safety.",
    author: "Australian Antarctic Division",
    role: "Scientific Research & Exploration",
    metric: "100% Uptime",
  },
  {
    quote:
      "The regulatory framework transformed how we design and deliver digital regulation across environmental schemes. It's enabled long-term resilience across Machinery of Government changes.",
    author: "DCCEEW",
    role: "Regulatory Framework",
    metric: "Federated Model",
  },
  {
    quote:
      "The rapid transformation delivered 2,200+ courses online in 4 weeks with 92% student satisfaction. The service design approach made the impossible possible.",
    author: "University of Canberra",
    role: "Digital Transformation",
    metric: "92% Satisfaction",
  },
  {
    quote:
      "The airbag quality control prototype became industry-standard technology adopted by tool manufacturers globally. Service design thinking transformed our approach.",
    author: "Holden (General Motors)",
    role: "Manufacturing Innovation",
    metric: "Global Adoption",
  },
];

export const PortfolioTestimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-muted py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row mb-8 md:mb-12 lg:mb-20">
          <h2 className="flex-1 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Trusted by
            <br />
            government and enterprise
          </h2>
          <div className="flex flex-1 flex-col items-start gap-3 md:max-w-md md:self-end">
            <p className="text-lg font-medium text-muted-foreground">
              Service design that delivers measurable impact for complex organisations.
            </p>
            <Button asChild variant="outline" className="group">
              <a href="/case-studies">
                View Case Studies
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+5rem))]">
              <CarouselContent className="">
                {TESTIMONIALS.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-4/5 md:basis-1/2 lg:basis-[34%]"
                  >
                    <Card
                      className={cn(
                        "h-full border-2 transition-all",
                        current === index
                          ? "border-primary shadow-lg"
                          : "border-muted text-muted-foreground shadow-none"
                      )}
                    >
                      <CardHeader className="pb-4">
                        <div className="text-4xl font-bold text-primary mb-2">
                          {testimonial.metric}
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </CardHeader>
                      <CardContent className="pb-7">
                        <blockquote className="text-balance text-lg font-semibold leading-7 tracking-tight md:text-xl">
                          "{testimonial.quote}"
                        </blockquote>
                      </CardContent>
                      <CardFooter className="flex-col items-start pt-0">
                        <div className="font-semibold max-md:text-sm">
                          {testimonial.author}
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            <div className="container">
              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "size-4 rounded-full transition-colors",
                        current === index
                          ? "bg-primary"
                          : "bg-primary/40 hover:bg-primary/60"
                      )}
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <CarouselPrevious className="bg-background/40 hover:bg-background/60 static size-11 translate-y-0 [&>svg]:size-6" />
                  <CarouselNext className="bg-background/40 hover:bg-background/60 static size-11 translate-y-0 [&>svg]:size-6" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

