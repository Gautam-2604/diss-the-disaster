import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

const CEREBRAS_API = process.env.CEREBRAS_API || 'https://inference.cerebras.ai/v1/infer';

app.post('/infer', async (req, res) => {
  if (!process.env.CEREBRAS_API_KEY) {
    return res.json({ result: [0.01, 0.02, 0.03] });
  }
  const r = await fetch(CEREBRAS_API, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.CEREBRAS_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  });
  const data = await r.json();
  res.json(data);
});

app.listen(5000, () => console.log('Cerebras proxy running on 5000'));
