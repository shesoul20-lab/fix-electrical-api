const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/analyze", (req, res) => {
  const { problem } = req.body;

  // ⚡ فقط free بيرجع نتيجة
  const response = `⚡ Possible Causes:
- Circuit overload
- Faulty breaker

🚨 Risk Level: High

🔧 Basic Fix:
- Disconnect some devices
- Reset the breaker`;

  res.json({
    result: response
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});