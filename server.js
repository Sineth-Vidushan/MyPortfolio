const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public/New Port"));
app.use(
  "/node_modules",
  express.static(path.join(__dirname + "/node_modules"))
);

app.listen(3000, () => {
  console.log("Visit http://127.0.0.1:5500/public/New%20Port/index.html");
});