const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("scrape.csv");

//write headers
writeStream.write(`postTitle`);

request(
  "https://artistshortcut.com/30-effective-ways-promote-music/",
  (err, res, html) => {
    if (!err && res.statusCode == 200) {
      const $ = cheerio.load(html);

      const postTitle = $(".newh2").each((i, el) => {
        const title = $(el)
          .find(".ez-toc-section")
          .text()
          .replace(/\s\\s+/g, "");
        console.log(title);
        // write to csv
        writeStream.write(`${title}`);
      });
      console.log("scrape done");
    }
  }
);
