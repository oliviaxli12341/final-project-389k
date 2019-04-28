var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var fs = require('fs');
var dataUtil = require("./data-util");
//var _ = require("underscore");
//var moment = require('moment');
//var marked = require('marked');

var app = express();
var PORT = 3000;

var _DATA = dataUtil.loadData().songs;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));

/*var request = require("request");

var options = {
    method: 'POST',
    url: 'http://localhost:3000/api/create',
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    form: {
       name: "hurt",
       year: 2018,
       artists: ["Oliver Tree"],
       genre: "punk",
       rating: 8.3
    }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});*/

/* Add whatever endpoints you need! Remember that your API endpoints must
 * have '/api' prepended to them. Please remember that you need at least 5
 * endpoints for the API, and 5 others.
 */

 app.listen(process.env.PORT || 3000, function() {
     console.log('Listening on port 3000!');
 });

app.get('/',function(req,res){
  res.render('home',{data:_DATA});
});

app.get('/rating',function(req,res){
  arr = JSON.parse(JSON.stringify(_DATA));
  arr.sort(function(a,b){
    return b.rating - a.rating;
  })
  res.render('home',{data:arr});
});

app.get("/great",function(req,res){
  var arr = [];
  for (var i = 0; i<_DATA.length; i++) {
    if(_DATA[i].rating > 8.0) {
      arr.push(_DATA[i]);
    }
  }
  res.render('home',{data:arr});
});

app.get("/best",function(req,res){
  var arr = [];
  for (var i = 0; i<_DATA.length; i++) {
    if(arr.length == 0 || _DATA[i].rating >arr[0].rating) {
      arr[0] = _DATA[i];
    }
  }
  res.render('home',{data:arr});
});

app.get("/worst",function(req,res){
  var arr = [];
  for (var i = 0; i<_DATA.length; i++) {
    if(arr.length == 0 || _DATA[i].rating < arr[0].rating) {
      arr[0] = _DATA[i];
    }
  }
  res.render('home',{data:arr});
});

app.get("/random",function(req,res){
  var arr = [];
  arr[0] =  _DATA[Math.floor(Math.random()*_DATA.length)];
  res.render('home',{data:arr});
});

app.get("/api",function(req,res){
  res.json(_DATA);
});

app.get("/api/name/:name",function(req,res){
  _name = req.params.name;
  /*_name = req.params.name;
  var result = _.findWhere(_DATA,{name: _name});
  if (!result) return res.json({});
  res.json(result);*/
  var arr=[];
  for (var i = 0; i<_DATA.length; i++) {if (_DATA[i].name.toLowerCase().includes(_name.toLowerCase())){
    arr.push(_DATA[i]);
  }}
  res.json(arr);
});

app.get("/create",function(req,res){
  res.render("create");
})

app.post("/api/create",function(req,res){
  _DATA.push(req.body);
  dataUtil.saveData(_DATA);
});

app.post("/create",function(req,res){ /*TODO left off here*/
  var body = req.body;
  body.artists.split(",");
  _DATA.push(body);
  dataUtil.saveData(_DATA);
  res.redirect("/");
});
module.exports = app
