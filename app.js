const express = require("express");
const { summary } = require("./controller/openAiController");

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

app.use(express.json());
app.use(express.static("public"));

app.post("/openai/get_summary", summary);
