var express = require("express"),
    path = require("path"),
    request = require("request"),
    util = require("util"),
    app = express.createServer(),
    key = process.argv[2]

if(!key)
  throw "please provide an API key as a command line argument"

app.use(app.router)
app.use(express.static(path.join(__dirname, "public")))

app.get("/darksky/interesting", function(res, res) {
  request(
    util.format(
      "https://api.darkskyapp.com/v1/interesting/%s",
      key
    )
  ).pipe(res)
})

app.get("/darksky/precipitation/:locations", function(req, res) {
  request(
    util.format(
      "https://api.darkskyapp.com/v1/precipitation/%s/%s",
      key,
      req.params.locations
    )
  ).pipe(res)
})

app.listen(8080)
