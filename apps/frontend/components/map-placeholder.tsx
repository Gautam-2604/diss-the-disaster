"use client";

import { cn } from "../lib/utils";

interface MapPlaceholderProps {
  className?: string;
}

export function MapPlaceholder({ className }: MapPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-muted rounded-lg border-2 border-dashed border-muted-foreground/25 h-64 md:h-80",
        className
      )}
    >
      <div className="text-center">
        <div className="text-4xl mb-4">🗺️</div>
        <h3 className="text-lg font-semibold text-muted-foreground mb-2">
          Interactive Map
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Map component will display event locations and real-time disaster
          information here.
        </p>
      </div>
    </div>
  );
}
