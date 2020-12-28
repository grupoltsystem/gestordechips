//Express
const express = require ('express');
const app = express();






app.get('/', function(req, res){
    res.sendFile(__dirname + "/html/index.html")
});


























//Sevidor 
app.listen(3000)