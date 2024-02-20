import { createStore } from "vuex";

export default createStore({
    state: {
        items: [
            {
                id: 'white-book',
                name: 'White Book',
                price: 8.50,
                oldPrice: 12.50,
                sale: false,
                image: require('../assets/images/shop/shop-1.jpg'),
                imageHover: require('../assets/images/shop/shop-1-1.jpg'),
            },
            {
                id: 'red-side-book',
                name: 'Red Side Book',
                price: 12.50,
                oldPrice: 20.50,
                sale: true,
                image: require('../assets/images/shop/shop-2.jpg'),
                imageHover: require('../assets/images/shop/shop-2-1.jpg'),
            },
            {
                id: 'book-with-pen',
                name: 'Book With Pen',
                price: 13.50,
                oldPrice: 18.99,
                sale: false,
                image: require('../assets/images/shop/shop-3.jpg'),
                imageHover: require('../assets/images/shop/shop-3-1.jpg'),
            },
            {
                id: 'drop-side-book',
                name: 'Drop Side Bookt',
                price: 7.50,
                oldPrice: 11.50,
                sale: false,
                image: require('../assets/images/shop/shop-4.jpg'),
                imageHover: require('../assets/images/shop/shop-4-1.jpg'),
            },
            {
                id: 'color-book',
                name: 'Color Book',
                price: 10.50,
                oldPrice: 19.50,
                sale: false,
                image: require('../assets/images/shop/shop-5.jpg'),
                imageHover: require('../assets/images/shop/shop-5-1.jpg'),
            },
            {
                id: 'last-book',
                name: 'Last Book',
                price: 15.00,
                oldPrice: 20.50,
                sale: false,
                image: require('../assets/images/shop/shop-6.jpg'),
                imageHover: require('../assets/images/shop/shop-6-1.jpg'),
            },
        ],
        cart: []
    },

    getters: {
        total: state => {
            if(state.cart.length > 0) {
                return state.cart.map(item => item.totalPrice).reduce((total, amount) => total + amount);
            } else {
                return 0;
            }
        }
    },

    mutations: {
        addToCart(state, payload) {
            let addedItem = state.items.find(item => item.id === payload.id)

            let existItem = state.cart.find(item => item.id == payload.id);

            if(existItem){
                existItem.productQuantity++;
                existItem.totalPrice += addedItem.price;
            } else {
                return state.cart.push(payload);
            }
        },

        removeFromCart(state, item){
            let index = state.cart.indexOf(item);
            state.cart.splice(index,1);
        }
    },
    actions: {

    }
});