"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface Event {
  id: string;
  text: string;
  source: string;
  timestamp: string;
}

interface EventsTableProps {
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

function getSourceBadgeVariant(source: string): "default" | "secondary" | "destructive" | "outline" {
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

export function EventsTable({ events, loading, error }: EventsTableProps) {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>⚠️</span>
            Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4">Loading events...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>⚠️</span>
            Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <div className="text-2xl text-destructive">❌</div>
              <p className="text-destructive mt-4 font-medium">
                Error loading events
              </p>
              <p className="text-muted-foreground text-sm mt-2">{error}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!events || events.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>⚠️</span>
            Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <div className="text-2xl text-muted-foreground">📝</div>
              <p className="text-muted-foreground mt-4">No events found</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>⚠️</span>
          Events ({events.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Source</TableHead>
                <TableHead className="w-[200px]">
                  <span className="inline-flex items-center">
                    🕐 Timestamp
                  </span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-mono text-sm">
                    {event.id}
                  </TableCell>
                  <TableCell className="max-w-md">
                    <div className="truncate" title={event.text}>
                      {event.text}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getSourceBadgeVariant(event.source)}>
                      {event.source}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {formatTimestamp(event.timestamp)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
