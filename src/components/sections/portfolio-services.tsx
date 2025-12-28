"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Settings, Target, Map, Workflow } from "lucide-react";

const services = [
  {
    title: "Service Design & Strategy",
    description: "User research, service blueprinting, journey mapping, and framework development. I translate policy intent and user needs into executable service models.",
    keywords: ["User research", "Service blueprinting", "Co-design workshops", "Framework development"],
    icon: Map,
    gradient: "from-blue-500/10 to-cyan-500/5",
  },
  {
    title: "Policy Translation",
    description: "Translating strategy, policy, and regulatory requirements into clear service models. I design governance frameworks that enable consistent delivery across complex organisations.",
    keywords: ["Regulatory service design", "Policy implementation", "Governance models", "Multi-stakeholder coordination"],
    icon: FileText,
    gradient: "from-purple-500/10 to-pink-500/5",
  },
  {
    title: "Systems Thinking",
    description: "Designing services that work with imperfect people, processes, and technology. Critical control thinking from mining informs approaches to resilience and risk.",
    keywords: ["Designing for imperfect systems", "Error-proofing", "Risk frameworks", "Change management"],
    icon: Workflow,
    gradient: "from-green-500/10 to-emerald-500/5",
  },
];

export const PortfolioServices = () => {
  return (
    <section id="services" className="bg-muted py-16 md:py-24 lg:py-32">
      <div className="container max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl">
            Service design for government and complex organisations—translating strategy into frameworks that enable consistent delivery.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden border-2 hover:shadow-lg transition-all group bg-gradient-to-br ${service.gradient}`}
              >
                <CardHeader className="pb-3">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-md border bg-background/50 px-2 py-0.5 text-xs font-medium backdrop-blur-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

