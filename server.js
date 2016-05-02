 var express = require("express");
 var app = express();

app.use("/bower_components", express.static( __dirname + "/bower_components") );
app.use("/app.js", express.static( __dirname + "/app.js") );

 app.get("/genericTable", function(req, res){
	res.sendFile(__dirname + "/index.html");
})

app.listen(9002);
