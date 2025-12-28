"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const expertiseAreas = [
  {
    title: "Systems Thinking from Mining",
    description: "Critical control thinking from mining operations informs how I design for resilience, risk, and real-world failure modes.",
  },
  {
    title: "Policy Translation",
    description: "Deep experience translating strategy and regulatory requirements into executable service models for government.",
  },
  {
    title: "Technology as Enabler",
    description: "5 years with Microsoft platforms in service design context—technology supports the service, not the other way around.",
  },
];

const values = [
  {
    title: "Collaboration builds quality",
    description: "Every day, I practice genuine collaboration, building on one another's concepts and sketches until it's impossible to say where the idea came from in the first place.",
  },
  {
    title: "Push a little further",
    description: "I constantly push boundaries, challenge standards, and redefine what's possible. Yes, that makes my job a lot of work, but it's also what makes it so worthwhile.",
  },
  {
    title: "Be good to work with",
    description: "Be nice. Be optimistic. Be supportive. Treat tough problems as interesting challenges. Be critical, not cynical. That's the attitude I bring to my work every day.",
  },
  {
    title: "Details make the difference",
    description: "I care about all the little things, the stuff no one else will notice, because that meticulous commitment to excellence is exactly what sets me apart.",
  },
  {
    title: "Work with only the brightest",
    description: "In my collaborators, partners, and clients, I seek out people who take pride in their work and genuinely excel at it.",
  },
  {
    title: "Always get it done",
    description: "When I say I'll deliver, I do. When Plan A doesn't work, I don't make excuses I start executing Plan B. You won't see me in a suit very often, but my work ethic is 100% professional.",
  },
];

export const PortfolioAbout = () => {
  return (
    <section id="about" className="bg-muted py-16 md:py-24 lg:py-32">
      <div className="container max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            About
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-6">
            15 years translating strategy into executable service models for government and complex organisations.
          </p>
        </div>

        <div className="space-y-12 mb-12">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              I'm a service designer specialising in policy translation, regulatory service design, and complex multi-stakeholder systems. My philosophy: people, process, and technology are all imperfect—design must account for this reality.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {expertiseAreas.map((area, index) => (
                <Card key={index} className="border-none shadow-none bg-transparent">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg md:text-xl">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t">
            <h3 className="text-2xl font-semibold mb-6">What I care about</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-none bg-transparent">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg md:text-xl">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-8 border-t">
          <div>
            <p className="text-muted-foreground font-medium mb-4">
              Based in Canberra, Australia • Service Design • Government & Regulatory
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/dalerogers" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:hello@dalerogers.com.au">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

