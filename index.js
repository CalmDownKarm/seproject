var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);

var app = express();

app.get('/',function(req,res){
    res.send("Hello World");
  });
app.use('/api/', require('./api')(wagner));

app.listen(3001);
console.log('Listening on port 3001!');