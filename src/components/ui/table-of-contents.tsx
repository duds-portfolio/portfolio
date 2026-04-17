"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
  contentSelector?: string;
}

export function TableOfContents({
  className,
  contentSelector = "article",
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Extract headings from the content
    const contentElement = document.querySelector(contentSelector);
    if (!contentElement) return;

    const headingElements = contentElement.querySelectorAll("h2, h3, h4");
    const extractedHeadings: Heading[] = [];

    headingElements.forEach((heading, index) => {
      let id = heading.id;
      const text = heading.textContent?.trim() || "";
      const level = parseInt(heading.tagName.charAt(1));

      // Generate ID if not already set
      if (!id && text) {
        id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "") // Remove special characters
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/-+/g, "-") // Replace multiple hyphens with single
          .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
        
        // Ensure uniqueness by appending index if needed
        if (extractedHeadings.some((h) => h.id === id)) {
          id = `${id}-${index}`;
        }
      }

      // Set id if not already set
      if (!heading.id && id) {
        heading.id = id;
      }

      if (id && text) {
        extractedHeadings.push({ id, text, level });
      }
    });

    setHeadings(extractedHeadings);

    // Set up Intersection Observer for active section highlighting
    const observerOptions = {
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    headingElements.forEach((heading) => {
      observerRef.current?.observe(heading);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [contentSelector]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside
      className={cn(
        "fixed right-4 top-24 z-10 hidden h-[calc(100vh-6rem)] w-64 overflow-y-auto px-4 py-8 xl:block",
        className
      )}
    >
      <div className="sticky top-8 rounded-lg border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 p-4">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Table of Contents
        </h2>
        <nav className="space-y-1">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            const indentClass =
              heading.level === 2
                ? "ml-0"
                : heading.level === 3
                  ? "ml-4"
                  : "ml-8";

            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHeading(heading.id);
                }}
                className={cn(
                  "block rounded-md px-3 py-1.5 text-sm transition-colors",
                  indentClass,
                  isActive
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {heading.text}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

