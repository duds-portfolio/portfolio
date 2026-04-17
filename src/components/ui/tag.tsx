import * as React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.ComponentPropsWithoutRef<"a"> {
  tag: string;
  href?: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  count?: number;
  className?: string;
}

const tagVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  outline: "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const tagSizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

export const Tag = React.forwardRef<HTMLAnchorElement, TagProps>(
  ({ tag, href, variant = "outline", size = "sm", count, className, ...props }, ref) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center rounded-full font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      tagVariants[variant],
      tagSizes[size],
      className
    );

    const content = (
      <>
        <span>{tag}</span>
        {count !== undefined && count > 0 && (
          <span className="ml-1.5 rounded-full bg-current/20 px-1.5 py-0.5 text-[0.7em] font-semibold">
            {count}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          className={baseClasses}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <span ref={ref as React.Ref<HTMLSpanElement>} className={baseClasses} {...props}>
        {content}
      </span>
    );
  }
);

Tag.displayName = "Tag";

