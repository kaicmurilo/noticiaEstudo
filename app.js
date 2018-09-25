var express = require('express');
var msg = require('./mod_teste');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
	res.render("home/index");
	console.log("Pagina Inicial");
	// body...
});

app.get('/formulario_inclusao_noticia', function(req,res) {
	console.log("Inclusao de noticia");
	res.render("admin/form_add_noticia");
	// body...
});

app.get('/noticias', function(req,res) {
	console.log("Noticias");
	res.render("noticias/noticias");
	// body...
});

app.get('/tecnologia', function(req,res) {
	console.log("tecnologia");
	res.render("secao/tecnologia");
	// body...
});
 	
app.listen(3000,function() {
	console.log(msg());
	// body...
} );
