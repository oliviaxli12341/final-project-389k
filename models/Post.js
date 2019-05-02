var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  user: {
    type: String,
    required: false
  },
});

var postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  user: {
    type: String,
    required: false
  },
  tags: {
    type: [String],
    required: false
  },
  comments: [commentSchema]
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
