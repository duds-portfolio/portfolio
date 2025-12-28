"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, FileText, Briefcase } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { searchItems, highlightSearchTerms, type SearchResult } from "@/lib/search";
import { cn } from "@/lib/utils";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blogPosts: Array<{
    id: string;
    title: string;
    description: string;
    tags?: string[];
  }>;
  caseStudies: Array<{
    id: string;
    title: string;
    description: string;
    tags?: string[];
    category?: string;
  }>;
}

export const SearchModal = ({
  open,
  onOpenChange,
  blogPosts,
  caseStudies,
}: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      // Focus input when modal opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      // Clear search when modal closes
      setQuery("");
      setResults([]);
    }
  }, [open]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const searchResults = searchItems(query, blogPosts, caseStudies);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query, blogPosts, caseStudies]);

  const handleResultClick = (url: string) => {
    window.location.href = url;
    onOpenChange(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-2xl p-0 sm:max-w-2xl"
        onKeyDown={handleKeyDown}
        onInteractOutside={(e) => {
          // Prevent closing when clicking on results
          if ((e.target as HTMLElement).closest('[data-search-result]')) {
            e.preventDefault();
          }
        }}
      >
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search articles and case studies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </DialogHeader>

        <div className="max-h-[60vh] overflow-y-auto px-6 pb-6">
          {query.trim().length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <Search className="mx-auto mb-4 h-12 w-12 opacity-50" />
              <p className="text-sm">Start typing to search...</p>
              <p className="mt-2 text-xs">
                Search across {blogPosts.length} articles and {caseStudies.length} case studies
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <p className="text-sm">No results found for &quot;{query}&quot;</p>
              <p className="mt-2 text-xs">Try different keywords</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-xs font-medium text-muted-foreground">
                {results.length} {results.length === 1 ? "result" : "results"}
              </div>
              <div className="space-y-2">
                {results.map((result) => (
                  <button
                    key={`${result.type}-${result.id}`}
                    data-search-result
                    onClick={() => handleResultClick(result.url)}
                    className={cn(
                      "w-full rounded-lg border p-4 text-left transition-colors",
                      "hover:bg-accent hover:border-primary/50",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        {result.type === "blog" ? (
                          <FileText className="h-5 w-5 text-primary" />
                        ) : (
                          <Briefcase className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge
                            variant={result.type === "blog" ? "secondary" : "outline"}
                            className="text-xs"
                          >
                            {result.type === "blog" ? "Article" : "Case Study"}
                          </Badge>
                          {result.category && (
                            <Badge variant="outline" className="text-xs">
                              {result.category}
                            </Badge>
                          )}
                        </div>
                        <h3
                          className="font-semibold mb-1 line-clamp-1"
                          dangerouslySetInnerHTML={{
                            __html: highlightSearchTerms(result.title, query),
                          }}
                        />
                        <p
                          className="text-sm text-muted-foreground line-clamp-2"
                          dangerouslySetInnerHTML={{
                            __html: highlightSearchTerms(result.description, query),
                          }}
                        />
                        {result.tags && result.tags.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {result.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

