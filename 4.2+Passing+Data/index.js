import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const num = req.body["fname"].length + req.body["lname"].length;
  res.render("index.ejs", { numOfLetter : num });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
