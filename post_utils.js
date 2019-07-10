var Post = require('./models/Post');

function iterateAndRemoveById(iter) {
	for (var i of iter) {
		Post.findByIdAndRemove(i._id, function (err, post) {
      if (err) throw err;
    })
	}
}

module.exports = {
	iterateAndRemoveById: iterateAndRemoveById
}

