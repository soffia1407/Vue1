let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: 'Vue Mastery',
        description: "A pair of warm, fuzzy socks.",
        selectedVariant: 0,
        altText: "A pair of socks",
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
        inStock: true,
        inventory: 100,
        onSale: false,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0
            }
         ],                           
        sizes: ['34-35', '36-37', '38-39', '40-41', '42-43', '44-45'],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        deleteFromCart(){
            this.cart -= 1
        },
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        }         
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity /*Если теперь навести указатель мыши на квадрат, 
            количество товара, соответствующее которому, равняется нулю, в inStock попадёт 0, 
            а 0 является в JavaScript значением, приводимым к логическому значению false. 
            Из-за этого на странице будет выведено сообщение Out of Stock.
            почему-то надпись не меняется
            */
        },
        sale() { // Добавляем вычисляемое свойство sale
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale!';
            } else {
                return this.brand + ' ' + this.product + ' is not on sale';
            }
        }
     }     
})
