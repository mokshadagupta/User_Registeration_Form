var express = require("express");
var app = express();
const PORT = 8989

app.get("/", (req, res) => {
  res.send("Home Page");
});


app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});