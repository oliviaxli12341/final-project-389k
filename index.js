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


module.exports = app
