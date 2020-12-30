//Express
const express = require ('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('gdc', 'root', '123456789', {
    host: "localhost",
    dialect: 'mysql'
});


//config
    // Template Engine
 
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //body-parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//routes

app.get('/cad', function(req, res){
    res.render('formulario')
});

app.post('/add', function(req, res){
  res.send("Texto: "+req.body.nome+" Conteudo:"+req.body.conteudo)
});









//Sevidor 
app.listen(3000)