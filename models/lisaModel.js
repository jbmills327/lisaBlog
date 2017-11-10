var mongoose = require('mongoose');

NewBlogSchema = new mongoose.Schema({

  "name": String,
  "image": String,
  "description": String,
  "textBody": String,
  "category": String,
  "date": {
    "type": Date,
    "default": Date.now
  }


});


module.exports = mongoose.model('NewLisaBlog', NewBlogSchema);
