$(document).ready(function() {
	var Mixer = Backbone.Model.extend();

	var MixerView = Backbone.View.extend({
		el: ".mixerApp",
		events: {
			"click .mixNewColour" : "mixNewColour"
		},
		initialize: function() {
			this.model.on("change", this.render, this);
		},
		render: function() {
			$(this.el).css('background', this.model.attributes.hexCode);
			$('.currentColour').html(this.model.attributes.hexCode);
		},
		mixNewColour: function() {
			this.model.set({hexCode: '#'+Math.floor(Math.random()*16777215).toString(16)});
		}
	});

	var mixer = new Mixer({hexCode: "#35abca"});
	var mixerView = new MixerView({model: mixer});
	mixerView.render();
});