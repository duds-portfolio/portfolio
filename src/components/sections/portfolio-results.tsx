"use client";

import { Card } from "@/components/ui/card";

const results = [
  {
    metric: "100%",
    heading: "Uptime in Extreme Isolation",
    description: "Antarctic Division application maintained 100% availability during 6-month winter with zero connectivity.",
    client: "Australian Antarctic Division",
    link: "/case-studies/antarctic-doctrine-application",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    metric: "78%",
    heading: "Protocol Adherence Improvement",
    description: "Improvement in safety protocol adherence through offline-first service design for extreme environments.",
    client: "Australian Antarctic Division",
    link: "/case-studies/antarctic-doctrine-application",
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    metric: "92%",
    heading: "Student Satisfaction",
    description: "Student satisfaction achieved during rapid digital transformation—2,200+ courses online in 4 weeks.",
    client: "University of Canberra",
    link: "/case-studies/university-canberra-digital-agility",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    metric: "45%",
    heading: "Processing Time Reduction",
    description: "Reduction in assessment processing time while improving compliance rates and user satisfaction.",
    client: "ASIC",
    link: "/case-studies/asic-fit-and-proper-person-test",
    color: "from-orange-500/20 to-amber-500/10",
  },
  {
    metric: "50-70%",
    heading: "Procurement Time Reduction",
    description: "Reduction in procurement time across environmental regulation programs through standardized framework.",
    client: "DCCEEW",
    link: "/case-studies/dcceew-regulatory-solutions-framework",
    color: "from-indigo-500/20 to-violet-500/10",
  },
  {
    metric: "99.9%",
    heading: "Verification Accuracy",
    description: "Accuracy achieved in field verification service with 60% reduction in processing time.",
    client: "Border Security",
    link: "/case-studies/border-security-digital-verification",
    color: "from-red-500/20 to-rose-500/10",
  },
];

export const PortfolioResults = () => {
  return (
    <section id="results" className="bg-muted py-16 md:py-24 lg:py-32">
      <div className="container max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            Proven Results
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Measurable impact across government, regulatory, and enterprise organisations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((result, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-2 hover:shadow-lg transition-all group bg-gradient-to-br ${result.color}`}
            >
              <a href={result.link} className="block p-6">
                <div className="space-y-4">
                  <div className="text-5xl md:text-6xl font-bold text-primary group-hover:scale-105 transition-transform">
                    {result.metric}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      {result.heading}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm md:text-base">
                      {result.description}
                    </p>
                    <p className="text-sm font-medium text-muted-foreground">
                      {result.client}
                    </p>
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

