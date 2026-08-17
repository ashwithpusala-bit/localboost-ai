const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/generate", (req, res) => {
  try {
    const { prompt } = req.body;

    res.json({
      success: true,
      result: `🚀 LocalBoost AI – Demo Marketing Plan

Instagram Caption:
🔥 Boost your business with ${prompt}

Facebook Post:
Looking for quality local products and great offers? Visit us today and discover something special!

Advertisement Headline:
⭐ Your Local Business, Your Best Choice!

Special Offer Idea:
🎁 Create a limited-time offer for local customers and promote it on Instagram and Facebook.

5 Social Media Content Ideas:
1. Product showcase
2. Customer testimonial
3. Behind-the-scenes video
4. Special offer/reel
5. Local customer appreciation post

Hashtags:
#LocalBusiness #LocalBoost #SmallBusiness #Marketing #InstagramMarketing #YourCity

⚡ DEMO MODE:
This is a free LocalBoost demonstration. Real AI generation can be connected later.`
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Demo generation failed"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`LocalBoost AI running on port ${PORT}`);
});
