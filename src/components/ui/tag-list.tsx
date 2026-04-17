import * as React from "react";
import { Tag } from "./tag";
import type { TagProps } from "./tag";
import { cn } from "@/lib/utils";

export interface TagListProps {
  tags: string[];
  variant?: TagProps["variant"];
  size?: TagProps["size"];
  showCount?: boolean;
  tagCounts?: Record<string, number>;
  className?: string;
  tagClassName?: string;
  linkToTags?: boolean;
}

export const TagList = ({
  tags,
  variant = "outline",
  size = "sm",
  showCount = false,
  tagCounts,
  className,
  tagClassName,
  linkToTags = true,
}: TagListProps) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => {
        const count = showCount && tagCounts ? tagCounts[tag] : undefined;
        const href = linkToTags ? `/tags/${encodeURIComponent(tag.toLowerCase())}` : undefined;

        return (
          <li key={tag}>
            <Tag
              tag={tag}
              href={href}
              variant={variant}
              size={size}
              count={count}
              className={tagClassName}
            />
          </li>
        );
      })}
    </ul>
  );
};

