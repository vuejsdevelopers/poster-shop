
new Vue({
    el: "#app",
        data: {
            total: 0,
             products: [
                { title: "Product 1", id: 1, price: 9.99},
                { title: "Product 2", id: 2, price: 9.99},
                { title: "Product 3", id: 3, price: 9.99}
            ],
            cart: [],
            search: ""
        },
        methods: {
            addToCart: function(product) {
                this.total += product.price;
                var found = false; /* under this condition the cart is able to increment product by adding 1 so only executes when false bool*/ 
                for (var i=0;i<this.cart.length; i++) {/*to check if an item is already in the cart*/
                    if (this.cart[i].id === product.id) {
                        this.cart[i]/*to check if current item's id this.cart[i] is equivalent to the id of the product being added*/
                            this.cart[i].qty++;/*starts if the cart id is equilivant to product id--increment product*/
                            var found = true;/*if match found set found to true*/
                }
            }
            if (!found) { /*in case product id does not match cart id*/
                this.cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: 1

                });
                 }
                /**for the increment and decrement button of total items */
            },
            inc: function(item) {
                item.qty++;
                this.total += item.price;
            },
            dec: function(item) {
                item.qty--;
                this.total -= item.price;
                if (item.qty <= 0) {
                    var i = this.cart.indexOf(item);
                    this.cart.splice(i,1);
                }
            },
            onSubmit: function() {
                console.log("Search");
            }
        },
        /*capping the total price to 2 decimal points*/
        filters: {
            currency: function(price) {
                return"$".concat(price.toFixed(2));
            }
        }
});