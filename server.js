?const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/generate", (req, res) => {
  try {
    const {
      businessName,
      businessType,
      location,
      offer,
      goal
    } = req.body;

    if (!businessName || !businessType || !location) {
      return res.status(400).json({
        success: false,
        error: "Business Name, Business Type and Location are required."
      });
    }

    const finalOffer = offer || "a special offer";
    const finalGoal = goal || "get more local customers";

    const result = `🚀 LocalBoost AI – Marketing Plan

━━━━━━━━━━━━━━━━━━━━━━
📱 1. INSTAGRAM CAPTION
━━━━━━━━━━━━━━━━━━━━━━

🔥 ${businessName} – ${location}!

Looking for something special from a trusted local ${businessType.toLowerCase()}?

🎁 ${finalOffer}

Don't miss this opportunity! Visit ${businessName} today and make your experience extra special. ❤️

📍 ${location}

👉 Goal: ${finalGoal}

━━━━━━━━━━━━━━━━━━━━━━
📘 2. FACEBOOK POST
━━━━━━━━━━━━━━━━━━━━━━

🎉 Great news for ${location}!

${businessName} is bringing you an amazing offer:

✨ ${finalOffer}

If you're looking for a great local ${businessType.toLowerCase()}, come visit us and experience the difference.

📍 ${location}

Share this post with your friends and family! ❤️

━━━━━━━━━━━━━━━━━━━━━━
📢 3. ADVERTISEMENT HEADLINE
━━━━━━━━━━━━━━━━━━━━━━

🔥 ${businessName} – Your Local ${businessType} in ${location}!

Special Offer: ${finalOffer}

━━━━━━━━━━━━━━━━━━━━━━
🎁 4. SPECIAL OFFER IDEA
━━━━━━━━━━━━━━━━━━━━━━

Create a limited-time "${finalOffer}" campaign.

Add a deadline such as "Offer valid this week only" to encourage customers to visit quickly.

━━━━━━━━━━━━━━━━━━━━━━
💡 5. SOCIAL MEDIA CONTENT IDEAS
━━━━━━━━━━━━━━━━━━━━━━

1. 🎥 Product/service showcase
2. ⭐ Happy customer testimonial
3. 🎬 Behind-the-scenes video
4. 🎁 Special offer Reel
5. 📍 Local customer appreciation post

━━━━━━━━━━━━━━━━━━━━━━
#️⃣ 6. HASHTAGS
━━━━━━━━━━━━━━━━━━━━━━

#${businessName.replace(/\s+/g, "")}
#LocalBusiness
#${businessType.replace(/\s+/g, "")}
#${location.replace(/\s+/g, "")}
#SmallBusiness
#LocalMarketing
#InstagramMarketing
#LocalBoost

━━━━━━━━━━━━━━━━━━━━━━
⚡ FREE DEMO MODE
━━━━━━━━━━━━━━━━━━━━━━

This is the LocalBoost free demo.
Real AI generation can be connected later using the OpenAI API.
`;

    res.json({
      success: true,
      result: result
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Marketing plan generation failed."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`LocalBoost AI running on port ${PORT}`);
});
