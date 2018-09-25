const app = require('./config/server.js')(app);

const rotaNoticias = require('./app/routes/noticias');
const rotaHome = require('./app/routes/homePage')(app);
const rotaFormularioInclusao = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000,function() {
	console.log('Servidor ON - PORTA 3000');
	// body...
} );
