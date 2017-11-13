var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("continuous deployment! Hello Heroku");
	//res.send("hello heroku");
    //res.send("hello jenkins.....");
  });

app.listen(5000);
console.log('port is running at 5000');
