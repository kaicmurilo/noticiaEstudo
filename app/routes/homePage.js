module.exports = function(app){
	app.get('/', function(req,res) {
	res.render("home/index");
	console.log("Pagina Inicial");
	// body...
	});
}