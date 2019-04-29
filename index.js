var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var fs = require('fs');
var moment = require('moment');
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
var TestModel = require('./models/TestModel');

//Load Environment Variables
if (dotenv.error) {
  throw dotenv.error
}
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
  TestModel.find({}, function(err, testPosts) {
    if (err) throw err;
    res.render('home',{data:testPosts.reverse()});
  });
});

app.get("/test/create",function(req,res){
  res.render("create");
});

app.post("/test/create",function(req,res){
  var test = new TestModel({
    text: req.body.text,
    time: moment()
  });
  test.save(function(err) {
    if (err) throw err;
    return res.send("successfully sumbitted data to server!");
  });
});

app.get('/test',function(req,res) {
  TestModel.find({}, function(err, testPosts) {
    if (err) throw err;
    res.send(testPosts);
  });
});

/*app.get('/rating',function(req,res){
  arr = JSON.parse(JSON.stringify(_DATA));
  arr.sort(function(a,b){
    return b.rating - a.rating;
  })
  res.render('home',{data:arr});
});*/

/*app.get("/great",function(req,res){
  var arr = [];
  for (var i = 0; i<_DATA.length; i++) {
    if(_DATA[i].rating > 8.0) {
      arr.push(_DATA[i]);
    }
  }
  res.render('home',{data:arr});
});*/

/*app.get("/best",function(req,res){
  var arr = [];
  for (var i = 0; i<_DATA.length; i++) {
    if(arr.length == 0 || _DATA[i].rating >arr[0].rating) {
      arr[0] = _DATA[i];
    }
  }
  res.render('home',{data:arr});
});*/

/*app.get("/worst",function(req,res){
  var arr = [];
  for (var i = 0; i<_DATA.length; i++) {
    if(arr.length == 0 || _DATA[i].rating < arr[0].rating) {
      arr[0] = _DATA[i];
    }
  }
  res.render('home',{data:arr});
});*/

/*app.get("/random",function(req,res){
  var arr = [];
  arr[0] =  _DATA[Math.floor(Math.random()*_DATA.length)];
  res.render('home',{data:arr});
});*/

/*app.get("/api",function(req,res){
  res.json(_DATA);
});*/

/*app.get("/api/name/:name",function(req,res){
  _name = req.params.name;
  var arr=[];
  for (var i = 0; i<_DATA.length; i++) {if (_DATA[i].name.toLowerCase().includes(_name.toLowerCase())){
    arr.push(_DATA[i]);
  }}
  res.json(arr);
});*/



/*app.post("/api/create",function(req,res){
  _DATA.push(req.body);
  dataUtil.saveData(_DATA);
});*/



module.exports = app
