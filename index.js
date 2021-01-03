//Express
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

//config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //body-parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
//routes
app.get('/', function(req, res){
  Post.findAll().then(function(posts){
    res.render('home', {posts: posts})
  })
});

app.get('/cad', function(req, res){
    res.render('formulario')
});

app.post('/add', function(req, res){
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function(){
    res.redirect('/')
  }).catch(function(erro){
    res.send("Houve um erro: " + erro)
  })
});


//Sevidor 
app.listen(8081)