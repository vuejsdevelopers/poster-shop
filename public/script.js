new Vue({
	el: "#app",
	data: {
		total: 0
	},
	methods: {
		addToCart: function() {
			this.total += 9.99;
		}
	}
});
