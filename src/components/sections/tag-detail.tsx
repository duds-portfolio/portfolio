"use client";

import React from "react";
import { Tag } from "@/components/ui/tag";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";

export interface TaggedContent {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "blog" | "case-study";
  pubDate?: string;
  year?: string;
}

interface TagDetailProps {
  tag: string;
  content: TaggedContent[];
}

export const TagDetail = ({ tag, content }: TagDetailProps) => {
  const blogPosts = content.filter((item) => item.type === "blog");
  const caseStudies = content.filter((item) => item.type === "case-study");

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container max-w-6xl py-16 md:py-24">
      {/* Header */}
      <div className="mb-12">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <a href="/tags">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all tags
          </a>
        </Button>
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {tag}
          </h1>
          <Badge variant="secondary" className="text-sm">
            {content.length} {content.length === 1 ? "item" : "items"}
          </Badge>
        </div>
        <p className="text-muted-foreground text-lg">
          Articles and case studies tagged with{" "}
          <span className="font-semibold text-foreground">{tag}</span>
        </p>
      </div>

      {/* Blog Posts */}
      {blogPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Articles ({blogPosts.length})
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      Article
                    </Badge>
                    {post.pubDate && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.pubDate)}
                      </div>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    <a href={post.url} className="block">
                      {post.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">
                    {post.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <a href={post.url}>
                      Read article
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Case Studies ({caseStudies.length})
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <Badge variant="outline" className="text-xs">
                      Case Study
                    </Badge>
                    {study.year && (
                      <span className="text-xs text-muted-foreground">{study.year}</span>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    <a href={study.url} className="block">
                      {study.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">
                    {study.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <a href={study.url}>
                      View case study
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {content.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>No content found</CardTitle>
            <CardDescription>
              There are no articles or case studies tagged with{" "}
              <span className="font-semibold">{tag}</span>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild>
              <a href="/tags">Browse all tags</a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

