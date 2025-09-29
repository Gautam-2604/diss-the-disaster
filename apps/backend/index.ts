import express from "express";
const app = express();

app.use(express.json());

app.post("/ingest", (req, res) => {
  console.log("Received event:", req.body);
  res.json({ status: "ok" });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
