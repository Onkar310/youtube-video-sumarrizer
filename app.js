const express = require("express");
const { summary } = require("./controller/openAiController");

const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.use(express.json());
app.use(express.static("public"));

app.post("/openai/get_summary", summary);
