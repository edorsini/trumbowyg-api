var express = require("express");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var templates = [
  {
    name: 'Template 1',
    html: '\nI am a template!\n'
  },
  {
    name: 'Template 2',
    html: '\nI am a different template!\n'
  }
];

app.get("/api/templates", function(req, res) {
  return res.json(templates);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});


app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
