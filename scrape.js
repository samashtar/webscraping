const request = require("request");
const cheerio = require("cheerio");

request(
  "https://artistshortcut.com/30-effective-ways-promote-music/",
  (err, res, html) => {
    if (!err && res.statusCode == 200) {
      //   console.log(html);
      const $ = cheerio.load(html);

      const siteHeading = $(".yoast-breadcrumbs");

      const output = siteHeading.find("h1").text();
      console.log(output);
    }
  }
);
