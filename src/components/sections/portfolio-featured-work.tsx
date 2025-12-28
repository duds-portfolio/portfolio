"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface FeaturedWorkProps {
  caseStudies: any[];
}

export const PortfolioFeaturedWork = ({ caseStudies }: FeaturedWorkProps) => {
  // Get featured case studies (limit to 3)
  const featured = caseStudies
    .filter(cs => cs.data.featured)
    .slice(0, 1);
  
  const additional = caseStudies
    .filter(cs => !cs.data.featured || cs.id !== featured[0]?.id)
    .slice(0, 2);

  const categoryLabels: Record<string, string> = {
    government: "Government",
    regulatory: "Regulatory",
    education: "Education",
    enterprise: "Enterprise",
    "service-design": "Service Design",
    policy: "Policy",
  };

  return (
    <section id="case-studies" className="py-16 md:py-24 lg:py-32">
      <div className="container max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            Featured Case Studies
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Service design for government, regulatory, and complex organisations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {featured.map((caseStudy) => (
            <Card key={caseStudy.id} className="overflow-hidden border-2 border-primary/20">
              <a href={`/case-studies/${caseStudy.id}/`} className="block">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/10">
                    {caseStudy.data.client.charAt(0)}
                  </div>
                </div>
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="default" className="mb-2">
                      Featured Project
                    </Badge>
                  </div>
                  <CardTitle className="text-xl md:text-2xl">
                    {caseStudy.data.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {caseStudy.data.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {categoryLabels[caseStudy.data.category] || caseStudy.data.category}
                    </Badge>
                    {caseStudy.data.tags.slice(0, 2).map((tag: string) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}

          {additional.map((caseStudy) => (
            <Card key={caseStudy.id} className="overflow-hidden">
              <a href={`/case-studies/${caseStudy.id}/`} className="block">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-5xl font-bold text-primary/10">
                    {caseStudy.data.client.charAt(0)}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {caseStudy.data.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                    {caseStudy.data.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {categoryLabels[caseStudy.data.category] || caseStudy.data.category}
                    </Badge>
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
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

