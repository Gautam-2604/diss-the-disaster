"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Event } from "@repo/types";

interface EventsCardListProps {
  events: Event[];
  loading: boolean;
  error: string | null;
}

function formatTimestamp(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  } catch {
    return timestamp;
  }
}

function getSourceBadgeVariant(source: string) {
  switch (source.toLowerCase()) {
    case "emergency services":
      return "destructive";
    case "utility company":
      return "secondary";
    case "traffic control":
      return "outline";
    default:
      return "default";
  }
}

export function EventsCardList({ events, loading, error }: EventsCardListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-3 bg-muted rounded w-full mb-2"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="text-2xl mb-2">❌</div>
            <p className="text-destructive font-medium">Error loading events</p>
            <p className="text-muted-foreground text-sm mt-2">{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!events || events.length === 0) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="text-2xl mb-2">📝</div>
            <p className="text-muted-foreground">No events found</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <Card key={event.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                ID: {event.id}
              </CardTitle>
              <Badge variant={getSourceBadgeVariant(event.source)} className="text-xs">
                {event.source}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm font-medium mb-3 line-clamp-3">
              {event.text}
            </p>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>🕐</span>
              <span className="ml-1 font-mono">
                {formatTimestamp(event.timestamp)}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
