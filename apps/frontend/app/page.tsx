import Link from "next/link";
import { Navigation } from "../components/navigation";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Disaster Monitor
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time monitoring and tracking of disaster events and emergency situations
            </p>
          </div>

          <div className="flex justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 py-4">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <div className="h-6 w-6 text-primary-foreground">⚠️</div>
            </div>
            <h3 className="text-xl font-semibold">Event Tracking</h3>
            <p className="text-muted-foreground">
              Monitor real-time disaster events from multiple sources
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <div className="h-6 w-6 text-primary-foreground">🗺️</div>
            </div>
            <h3 className="text-xl font-semibold">Location Mapping</h3>
            <p className="text-muted-foreground">
              Visualize event locations on interactive maps
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <div className="h-6 w-6 text-primary-foreground">📊</div>
            </div>
            <h3 className="text-xl font-semibold">Real-time Updates</h3>
            <p className="text-muted-foreground">
              Get instant notifications and status updates
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
