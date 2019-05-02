var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  picture: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
