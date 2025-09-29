"use client";

import { Navigation } from "../../components/navigation";
import { MapPlaceholder } from "../../components/map-placeholder";
import { EventsTable } from "../../components/events-table";
import { useEvents } from "../../hooks/useEvents";

export default function DashboardPage() {
  const { data: events, loading, error } = useEvents();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Monitor real-time disaster events and emergency situations
            </p>
          </div>

          {/* Map Section */}
          <div className="w-full">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Event Locations
            </h2>
            <MapPlaceholder />
          </div>

          {/* Events Table */}
          <div className="w-full">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Recent Events
            </h2>
            <EventsTable events={events || []} loading={loading} error={error} />
          </div>
        </div>
      </main>
    </div>
  );
}
