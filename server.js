const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Electrical API is running ⚡");
});

app.get("/fix", (req, res) => {
  const problem = req.query.problem || "unknown";

  res.json({
    problem,
    solution: "Check wiring, breakers, and connections ⚡"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
