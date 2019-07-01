const express = require("express");
const port = 3000;
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  var options = {
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true
    }
  };

  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, () => console.log(`Example app lsiteninf on ${port}`));
