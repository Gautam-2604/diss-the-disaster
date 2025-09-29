"use client";

import { useState, useEffect } from "react";

interface Event {
  id: string;
  text: string;
  source: string;
  timestamp: string;
}

interface EventsResponse {
  events: Event[];
}

interface UseEventsReturn {
  data: Event[] | null;
  loading: boolean;
  error: string | null;
}

const BACKEND_URL = "http://localhost:3001";

export function useEvents(): UseEventsReturn {
  const [data, setData] = useState<Event[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${BACKEND_URL}/events`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: EventsResponse = await response.json();
        setData(result.events);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { data, loading, error };
}
