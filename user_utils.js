var User = require('./models/User');

function iterateAndRemoveUser(iter){
  for (var i of iter) {
    User.findByIdAndRemove(i._id, function (err, post) {
      if (err) throw err;
    })
  }
}

module.exports = {
  iterateAndRemoveUser: iterateAndRemoveUser

	
}