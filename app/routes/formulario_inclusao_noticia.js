module.exports = function(app){
	app.get('/formulario_inclusao_noticia', function(req,res) {
		console.log("Inclusao de noticia");
		res.render("admin/form_add_noticia");
		// body...
	});
};
