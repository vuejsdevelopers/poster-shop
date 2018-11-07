var LOAD_NUM = 4;
var watcher;

new Vue({
	el: "#app",
	data: {
		total: 0,
		products: [],
		cart: [],
		search: "cat",
		lastSearch: "",
		loading: false,
		results: []
	},
	methods: {
		addToCart: function(product) {
			this.total += product.price;
			var found = false;
			for (var i = 0; i < this.cart.length; i++) {
				if (this.cart[i].id === product.id) {
					this.cart[i].qty++;
					found = true;
				}
			}
			if (!found) {
				this.cart.push({
					id: product.id,
					title: product.title,
					price: product.price,
					qty: 1
				});
			}
		},
		inc: function(item) {
			item.qty++;
			this.total += item.price;
		},
		dec: function(item) {
			item.qty--;
			this.total -= item.price;
		},
		onSubmit: function() {
			this.products = [];
			this.loading = true;
			var path = "/search?q=".concat(this.search);
			this.$http.get(path)
				.then(function(response) {
					this.results = response.body;
					this.products = response.body.slice(0, LOAD_NUM);
					this.lastSearch = this.search;
					this.loading = false;
				});
		},
		appendResults: function() {
			console.log("Append results");
		}
	},
	filters: {
		currency: function(price) {
			return "$".concat(price.toFixed(2));
		}
	},
	created: function() {
		this.onSubmit();
	},
	updated: function() {
		var sensor = document.querySelector("#product-list-bottom");
		watcher = scrollMonitor.create(sensor);
		watcher.enterViewport(this.appendResults);
	},
	beforeUpdate: function() {
		if (watcher) {
			watcher.destroy();
			watcher = null;
		}
	}
});
