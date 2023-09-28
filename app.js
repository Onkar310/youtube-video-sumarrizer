const express = require("express");
const { summary } = require("./controller/openAiController");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
// app.get("/", (req, res) => {
//   res.send(express.static("/public"));
// });
app.post("/openai/get_summary", summary);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
