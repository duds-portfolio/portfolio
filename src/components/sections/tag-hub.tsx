"use client";

import React from "react";
import { Tag } from "@/components/ui/tag";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Search } from "lucide-react";

export interface TagInfo {
  name: string;
  count: number;
  slug: string;
}

interface TagHubProps {
  tags: TagInfo[];
}

export const TagHub = ({ tags }: TagHubProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group tags by count ranges for better organization
  const popularTags = filteredTags.filter((tag) => tag.count >= 5);
  const commonTags = filteredTags.filter((tag) => tag.count >= 2 && tag.count < 5);
  const otherTags = filteredTags.filter((tag) => tag.count === 1);
  
  // Show "All Tags" section only if there are tags that don't fit in popular/common
  const hasOtherTags = otherTags.length > 0;

  return (
    <div className="container max-w-6xl py-16 md:py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
          Tags
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Browse articles and case studies by topic. Click on any tag to see all related content.
        </p>
      </div>

      {/* Search */}
      <div className="mb-8 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Stats */}
      <div className="mb-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span>
          <strong className="text-foreground">{tags.length}</strong> unique tags
        </span>
        <span>
          <strong className="text-foreground">
            {tags.reduce((sum, tag) => sum + tag.count, 0)}
          </strong>{" "}
          total uses
        </span>
      </div>

      {/* Popular Tags */}
      {popularTags.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Popular Tags</h2>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Tag
                key={tag.slug}
                tag={tag.name}
                href={`/tags/${tag.slug}`}
                variant="default"
                size="md"
                count={tag.count}
              />
            ))}
          </div>
        </div>
      )}

      {/* Common Tags */}
      {commonTags.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Tags</h2>
          <div className="flex flex-wrap gap-2">
            {commonTags.map((tag) => (
              <Tag
                key={tag.slug}
                tag={tag.name}
                href={`/tags/${tag.slug}`}
                variant="outline"
                size="sm"
                count={tag.count}
              />
            ))}
          </div>
        </div>
      )}

      {/* Other Tags */}
      {hasOtherTags && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">All Tags</h2>
          <div className="flex flex-wrap gap-2">
            {otherTags.map((tag) => (
              <Tag
                key={tag.slug}
                tag={tag.name}
                href={`/tags/${tag.slug}`}
                variant="ghost"
                size="sm"
                count={tag.count}
              />
            ))}
          </div>
        </div>
      )}

      {/* No results */}
      {filteredTags.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>No tags found</CardTitle>
            <CardDescription>
              Try adjusting your search query to find tags.
            </CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
};

