var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var fs = require('fs');
var moment = require('moment');
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
var Post = require('./models/Post');
var User = require('./models/User');

//Load Environment Variables
/*if (dotenv.error) {
  throw dotenv.error
}*/
console.log("##dotenv loaded")
console.log(dotenv.parsed);


//Connect to MongoDB
console.log("##attempting to connect to MongoDB")
console.log(process.env.MONGODB);
mongoose.connect(process.env.MONGODB,{useNewUrlParser: true}).catch(function(reason) {
  console.log("!!Unable to connect to MongoDB. Error: ", reason);
});
console.log("##Successfully connected to MongoDB!");


//Setup Express App
var app = express();
var PORT = 3000;
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));


 app.listen(process.env.PORT || 3000, function() {
     console.log('Listening on port 3000!');
 });


app.get('/',function(req,res){
  Post.find({}, function(err, posts) {
    if (err) throw err;
    res.render('home',{data: posts.reverse()});
  });
});

app.get("/create",function(req,res){
  res.render("create");
});

app.post("/create",function(req,res){
  Post.find({}, function(err, allPosts) {
    if (err) throw err;

    var idVal;
    if (allPosts == null || allPosts == {}) {
      idVal = 0;
    } else {
      idVal = allPosts.length;
    }

    var userVal;
    if (req.body.user == "") {
      userVal = "anonymous";
    } else {
      userVal = req.body.user;
    }

    var post = new Post({
      text: req.body.text,
      id: idVal,
      time: moment(),
      user: userVal.toLowerCase(),
      tags: req.body.tags.split(",").map(x => x.trim().toLowerCase()),
      comments: []
    });
    post.save(function(err) {
      if (err) throw err;
      return res.send("Successfully submitted data to the server!");
    })
  });
});

app.get('/post/:id',function(req,res){
  if (isNaN(req.params.id)) {
    res.send("No posts with that id.");
  } else {
    Post.find({id:parseInt(req.params.id)}, function(err, posts) {
      if (err) throw err;
      if (Object.keys(posts).length === 0) {
        res.send("No post with that id.");
      } else {
        res.render('home',{data: posts.reverse()});
      }
    });
  }
});

app.get('/post/:id/comment',function(req,res){
  if (isNaN(req.params.id)) {
    res.send("No posts with that id.");
  } else {
    Post.find({id:parseInt(req.params.id)}, function(err, posts) {
      if (err) throw err;
      if (Object.keys(posts).length === 0) {
        res.send("No post with that id.");
      } else {
        res.render('comment',{id:req.params.id});
      }
    });
  }
});

app.post("/post/:id/comment",function(req,res){
  if (isNaN(req.params.id)) {
    res.send("No posts with that id.");
  } else {
    Post.find({id:parseInt(req.params.id)}, function(err, posts) {
      if (err) throw err;
      if (Object.keys(posts).length === 0) {
        res.send("No post with that id.");
      } else {
        var userVal;
        if (req.body.user == "") {
          userVal = "anonymous";
        } else {
          userVal = req.body.user;
        }

        posts[0].comments.push({
          text: req.body.text,
          time: moment(),
          user: userVal.toLowerCase(),
        });
        posts[0].save(function(err) {
          if (err) throw err;
          return res.send("Sucessfully added a comment to post #" + req.params.id);
        });
      }
    });
  }
});

app.get('/user/:name',function(req,res){
  User.find({user:req.params.name}, function(err, users) {
    if (err) throw err;
    if (Object.keys(users).length === 0) {
      res.send("No user profile created yet.");
    } else {
      res.render('user',{data: users});
    }
  });
});

app.get('/user/:name/edit',function(req,res){
  User.find({user:req.params.name}, function(err, users) {
    if (err) throw err;
    res.render('userEdit',{name: req.params.name});
  });
});

app.post("/user/:name/edit",function(req,res){
  console.log("test");
    User.find({user:req.params.name}, function(err, users) {
      if (err) throw err;
      console.log(users[0]);
      if (users[0] === undefined) {
        users[0] = new User({
          user: req.params.name,
          description: req.body.desc,
          picture: req.body.picture
        });
      } else {
        users[0].description = req.body.desc;
        users[0].picture = req.body.picture;
      }
      console.log(users[0]);
      users[0].save(function(err) {
      if (err) throw err;
        return res.send("Successfully edited user " + req.params.name);
      });
    });
});

app.get('/api/posts', function(req,res) {
  Post.find({}, function(err, posts) {
    if (err) throw err;
    res.send(posts);
  });
});

app.get('/api/users', function(req,res) {
  User.find({}, function(err, users) {
    if (err) throw err;
    res.send(users);
  });
});

app.get('/random', function (req,res) {
  var count = 0;
  Post.find({}, function (err, results) {
    count = results.length;
    var random_num = Math.floor(Math.random() * count - 1) + 1;
  console.log(random_num);
  Post.find({id:random_num}, function (err, result) {
    res.render('home', {data: result});
  });
  });
});

app.get('/most', function (req, res) {
  var max = 0, item;
  Post.find({}, function (err, results) {

    for (var i of results) {
      if (i.comments.length > max) {
        max = i.comments.length;
        item = i.id;
      }
    }
  Post.find({id: item}, function (err, result) {
    res.render('home', {data: result});
  })
    
  })
})

app.get('/least', function (req, res) {
  var min = 1000000000000000000000, item;
  Post.find({}, function(err, results) {
    for (var i of results) {{
      if (i.comments.length < min) {
        min = i.comments.length;
        item = i.id;
      }
    }}
    Post.find({id: item}, function (err, result) {
    res.render('home', {data: result});
  })
  })

})
module.exports = app
