new Vue({
	el: "#app",
	data: {
		total: 0,
		products: [
			{ title: "Product 1", id: 1 },
			{ title: "Product 2", id: 2 },
			{ title: "Product 3", id: 3 }
		],
		cart: []
	},
	methods: {
		addToCart: function(product) {
			console.log(product.id);
		}
	}
});
