"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CaseStudyCategoryProps {
  caseStudies: any[];
}

const categoryLabels: Record<string, string> = {
  government: "Government",
  regulatory: "Regulatory",
  education: "Education",
  enterprise: "Enterprise",
  "service-design": "Service Design",
  policy: "Policy",
};

const categoryOrder = ["government", "regulatory", "enterprise"];

export const PortfolioCaseStudiesCategory = ({ caseStudies }: CaseStudyCategoryProps) => {
  // Group case studies by category and select one per category
  const caseStudiesByCategory = categoryOrder.map((category) => {
    const categoryCaseStudies = caseStudies.filter(
      (cs) => cs.data.category === category
    );
    // Prefer featured, otherwise take first
    const featured = categoryCaseStudies.find((cs) => cs.data.featured);
    return featured || categoryCaseStudies[0];
  }).filter(Boolean); // Remove undefined entries

  return (
    <section id="case-studies" className="py-16 md:py-24 lg:py-32">
      <div className="container max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Service design for government, regulatory, and enterprise organisations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {caseStudiesByCategory.map((caseStudy) => {
            if (!caseStudy) return null;
            
            return (
              <Card key={caseStudy.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <a href={`/case-studies/${caseStudy.id}/`} className="block">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                    <div className="text-5xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                      {caseStudy.data.client.charAt(0)}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {categoryLabels[caseStudy.data.category] || caseStudy.data.category}
                      </Badge>
                      {caseStudy.data.featured && (
                        <Badge variant="default" className="ml-2 text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg md:text-xl line-clamp-2">
                      {caseStudy.data.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                      {caseStudy.data.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.data.tags.slice(0, 2).map((tag: string) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                      <p><strong>Client:</strong> {caseStudy.data.client}</p>
                      <p><strong>Year:</strong> {caseStudy.data.year}</p>
                    </div>
                  </CardContent>
                </a>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="group">
            <a href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

