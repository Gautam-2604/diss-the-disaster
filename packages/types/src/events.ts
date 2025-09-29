export interface Event {
  id: string;
  text: string;
  source: string;
  timestamp: string;
}

export interface EventsResponse {
  events: Event[];
}

export interface UseEventsReturn {
  data: Event[] | null;
  loading: boolean;
  error: string | null;
}
