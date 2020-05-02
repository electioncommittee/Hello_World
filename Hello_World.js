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


app.get('*', function (req, res) {
	if(req.query.name){
	    res.send('Hello '+req.query.name);
	}
	else{
		//res.status(400).send("Wrong (400 Bad Request)");
		res.redirect("https://www.google.com/webhp?hl=zh-TW&sa=X&ved=0ahUKEwju0L-xmJbpAhVlyosBHSEHDn8QPAgH");
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
