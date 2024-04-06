const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");
const port = 3000;
const challenges = [];
app.get("/", async (req, res) => {
  res.json({ message: " Welcome to Web Scraping API" });
});

app.get("/challenges", async (req, res) => {
  axios.get("https://ghw.mlh.io/challenges").then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    $('a.contains("")', html).each(function () {
      const title = $(this).text();
    });
    res.json(challenges);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
