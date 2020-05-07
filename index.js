var express = require('express');
var app = express();

app.use('/images',express.static(__dirname+ '/images'));

app.get('/byebye', function (req, res) {
	if(req.query.name){
	    res.send('Byebye '+req.query.name);
	}
	else{
		res.status(400).send("Wrong");
	}
});

const http = require('http');
const fs = require('fs');
app.get('*', function (req, res) {
	if(req.query.name){
	    res.send('Hello '+req.query.name);
	}
	else{
		res.statusCode=200;
		res.setHeader('Content-Type','text/html');
		const html=fs.readFileSync('default.html','utf8');
		res.write(html);
		res.end();
	}
});



app.post('/',function(req,res){
	if(req.body.name){
	    res.send('Hello2 '+req.query.name);
	}
	else{
		res.status(400).send("Wrong2");
	}
});


app.listen(3000, function () {
    console.log('listening on port 3000!');
});
