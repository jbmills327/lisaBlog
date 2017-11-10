var express = require("express");
Lisa = require("./controllers/lisaController");
// List = require("./controllers/controllers.newListings");

var app = express();

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile("index.html", {
      root: './public/html'
    });
  });

  app.get('/blogs', (req, res) => {
    res.sendFile("blogs.html", {
      root: './public/html'
    });
  });

  app.get('/about', (req, res) => {
    res.sendFile("aboutMe.html", {
      root: './public/html'
    });
  });

  app.post('/api/blog', Lisa.create);
  app.get('/api/blog', Lisa.get);
  app.get("/api/blog/:id", Lisa.get);
  app.put("/api/blog/", Lisa.edit);
  app.delete("/api/blog/:id", Lisa.delete);

}
