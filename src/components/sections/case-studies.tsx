"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useMemo } from "react";

interface CaseStudy {
  id: string;
  data: {
    title: string;
    description: string;
    client: string;
    industry: string;
    category: string;
    featured: boolean;
    tags: string[];
    challenge: string;
    year?: string;
    duration?: string;
  };
}

const CaseStudies = ({ caseStudies = [] }: { caseStudies?: CaseStudy[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Handle empty case studies
  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div className="container max-w-6xl py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
            Case Studies
          </h1>
          <p className="text-muted-foreground text-lg">
            No case studies available at this time.
          </p>
        </div>
      </div>
    );
  }

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(caseStudies.map(cs => cs.data.category)));
    return ["all", ...cats];
  }, [caseStudies]);

  // Filter case studies
  const filteredCaseStudies = useMemo(() => {
    if (selectedCategory === "all") {
      return caseStudies;
    }
    return caseStudies.filter(cs => cs.data.category === selectedCategory);
  }, [caseStudies, selectedCategory]);

  // Get featured case study
  const featuredCaseStudy = caseStudies.find(cs => cs.data.featured);

  // Get non-featured case studies
  const regularCaseStudies = filteredCaseStudies.filter(cs => !cs.data.featured || selectedCategory !== "all");

  const categoryLabels: Record<string, string> = {
    all: "All Case Studies",
    government: "Government",
    regulatory: "Regulatory",
    education: "Education",
    enterprise: "Enterprise",
    "service-design": "Service Design",
    policy: "Policy",
  };

  return (
    <div className="relative">
      {/* Hero Section with Featured Case Study */}
      {featuredCaseStudy && selectedCategory === "all" && (
        <div className="bg-muted/30 relative overflow-hidden pt-16 md:pt-20 lg:pt-24">
          <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
          <div className="container relative z-10 max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-16">
              <div className="flex flex-col justify-center lg:col-span-2">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  <span className="from-primary to-primary/70 inline bg-gradient-to-r bg-clip-text text-transparent">
                    Case Studies
                  </span>
                </h1>
                <p className="text-muted-foreground mt-4 text-lg">
                  Service design for government, regulatory, and complex organisations.
                </p>
                <div className="mt-8 hidden md:block">
                  <Button asChild variant="outline" size="lg" className="group">
                    <a href="#case-studies">
                      View all case studies
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative lg:col-span-3">
                <a href={`/case-studies/${featuredCaseStudy.slug || featuredCaseStudy.id}/`} className="group block">
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                      <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16 text-white">
                        <Badge
                          variant="outline"
                          className="mb-3 border-white/30 text-white"
                        >
                          Featured Project
                        </Badge>
                        <h2 className="mb-2 text-2xl font-bold leading-tight md:text-3xl">
                          {featuredCaseStudy.data.title}
                        </h2>
                        <p className="text-white/80 text-sm line-clamp-2">
                          {featuredCaseStudy.data.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {featuredCaseStudy.data.client}
                          </Badge>
                          <Badge variant="outline" className="border-white/30 text-white text-xs">
                            {categoryLabels[featuredCaseStudy.data.category] || featuredCaseStudy.data.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              </div>
            </div>
          </div>
          <div className="from-background h-16 w-full bg-gradient-to-t to-transparent"></div>
        </div>
      )}

      {/* Case Studies Grid Section */}
      <section id="case-studies" className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <h2 className="text-foreground/90 mb-4 text-3xl font-bold">
              {selectedCategory === "all" ? "All Case Studies" : categoryLabels[selectedCategory]}
            </h2>
            <Separator className="bg-primary/30 max-w-[120px]" />
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="flex-wrap h-auto p-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-background"
                  >
                    {categoryLabels[category] || category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Case Studies Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {regularCaseStudies.map((caseStudy) => (
              <a
                key={caseStudy.id}
                href={`/case-studies/${caseStudy.slug || caseStudy.id}/`}
                className="bg-card group flex flex-col overflow-hidden rounded-xl border transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-primary/20">
                        {caseStudy.data.client.charAt(0)}
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="flex grow flex-col justify-between p-6">
                  <div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {categoryLabels[caseStudy.data.category] || caseStudy.data.category}
                      </Badge>
                      {caseStudy.data.featured && (
                        <Badge variant="outline" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="group-hover:text-primary mb-2 text-xl font-semibold leading-tight">
                      {caseStudy.data.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                      {caseStudy.data.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-muted-foreground text-xs font-medium">
                        {caseStudy.data.client}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {caseStudy.data.industry}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {caseStudy.data.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {caseStudy.data.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{caseStudy.data.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </a>
            ))}
          </div>

          {regularCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No case studies found in this category.
              </p>
            </div>
          )}
        </div>

        {/* Portfolio Impact Stats */}
        <div className="mt-16 md:mt-24">
          <div className="bg-muted rounded-lg p-8 md:p-12">
            <h2 className="text-center mb-8 text-2xl font-bold md:text-3xl">
              Portfolio Impact
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">10</h3>
                <p className="text-muted-foreground text-sm">Major Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">7</h3>
                <p className="text-muted-foreground text-sm">Industries</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
                <p className="text-muted-foreground text-sm">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Overview */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-center mb-12 text-2xl font-bold md:text-3xl">
            Service Design Capabilities Demonstrated
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader>
                <CardTitle className="text-xl mb-4">Service Design & Research</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>User Research & Field Testing (Antarctic, ASIC, Border)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Service Blueprinting (Rio Tinto, MDBA, Icon Water)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Journey Mapping (All Case Studies)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Co-Design Workshops (DCCEEW, University)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-transparent">
              <CardHeader>
                <CardTitle className="text-xl mb-4">Policy & Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Policy Translation (ASIC, DCCEEW, MDBA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Regulatory Service Design (ASIC, Border, DCCEEW)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Governance Frameworks (Rio Tinto, DCCEEW)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Multi-Stakeholder Coordination (MDBA, Icon Water)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-transparent">
              <CardHeader>
                <CardTitle className="text-xl mb-4">Systems Thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Safety & Error-Proofing (Antarctic, Holden)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Change Management (Icon Water, University)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Resilient Service Design (Antarctic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Complex Organisation Design (Rio Tinto, DCCEEW)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Industry Experience */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-center mb-12 text-2xl font-bold md:text-3xl">
            Industry Experience
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Government</h3>
              <p className="text-sm text-muted-foreground">ASIC, Antarctic Division, DCCEEW, MDBA</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Mining & Resources</h3>
              <p className="text-sm text-muted-foreground">Rio Tinto Aluminium</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Higher Education</h3>
              <p className="text-sm text-muted-foreground">University of Canberra</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Utilities & Manufacturing</h3>
              <p className="text-sm text-muted-foreground">Icon Water, Holden (GM)</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-24 text-center">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl">
            Ready to Discuss Your Service Design Challenge?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's talk about translating your strategy into executable service models
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="group">
              <a href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a href="https://calendar.app.google/mtpasKfamqh9uvUQA" target="_blank" rel="noopener noreferrer">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { CaseStudies };

