import express from "express";
const app = express();

app.use(express.json());

app.post("/ingest", (req, res) => {
  console.log("Received event:", req.body);
  res.json({ status: "ok" });
});

// Mock events data
const mockEvents = [
  {
    id: "1",
    text: "Emergency alert: Flooding in downtown area",
    source: "Emergency Services",
    timestamp: new Date("2025-09-29T10:30:00Z").toISOString(),
  },
  {
    id: "2",
    text: "Power outage reported in residential district",
    source: "Utility Company",
    timestamp: new Date("2025-09-29T09:15:00Z").toISOString(),
  },
  {
    id: "3",
    text: "Traffic accident on Highway 101",
    source: "Traffic Control",
    timestamp: new Date("2025-09-29T08:45:00Z").toISOString(),
  },
];

app.get("/events", (req, res) => {
  res.json({ events: mockEvents });
});

app.listen(3001, () => console.log("Backend running on port 3001"));
