var mongoose = require('mongoose');

var testSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  }
});

var TestModel = mongoose.model('TestModel', testSchema);
module.exports = TestModel;
