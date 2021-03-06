var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
	image: String,
	imageFallBack: String,
	category: String,
	title: String,
	content: String,
	url: String
});

module.exports = mongoose.model("Project", projectSchema);