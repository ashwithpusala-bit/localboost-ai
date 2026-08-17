const express = require("express");
const path = require("path");
const OpenAI = require("openai");

const app = express();

app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: prompt
    });

    res.json({
      success: true,
      result: response.output_text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "AI generation failed"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`LocalBoost AI running on port ${PORT}`);
});
