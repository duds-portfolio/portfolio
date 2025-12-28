"use client";

import { Separator } from "@/components/ui/separator";

const phases = [
  {
    number: "01",
    title: "Discover",
    description: "User research and stakeholder engagement to uncover opportunities.",
  },
  {
    number: "02",
    title: "Define",
    description: "Synthesise insights into strategic frameworks and opportunity spaces.",
  },
  {
    number: "03",
    title: "Design",
    description: "Co-create solutions through iterative prototyping and validation.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Implement sustainable solutions with clear roadmaps and governance.",
  },
];

export const PortfolioApproach = () => {
  return (
    <section id="approach" className="bg-muted py-16 md:py-24 lg:py-32">
      <div className="container max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            Approach
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Human-centred methodology delivering measurable impact
          </p>
        </div>

        <div className="relative">
          {/* Continuous timeline line - positioned behind circles */}
          <div className="absolute left-[31px] md:left-[39px] top-[31px] md:top-[39px] bottom-[31px] md:bottom-[39px] w-0.5 bg-primary/20 hidden md:block -z-0" />
          
          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, index) => (
              <div key={index} className="relative flex items-start gap-6 md:gap-8">
                {/* Timeline circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center relative z-10">
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      {phase.number}
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-3 pt-1">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

