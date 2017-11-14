var express = require('express');
var app = express();
var port = process.env.PORT || 4000;

app.get('/',function(req,res){
	res.send("continuous deployment!! Hello Heroku");
	//res.send("hello heroku");
    //res.send("hello jenkins.....");
  });

app.listen(port);
console.log('port is running at 5000');
