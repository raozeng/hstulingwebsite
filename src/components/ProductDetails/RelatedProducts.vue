<template>
    <div class="related-products pt-110">
        <div class="container">
            <div class="section-title">
                <div class="content">
                    <span>Our Shop</span>
                    <h2>Related Products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>

            <div class="row">
                <ShopItem 
                    v-for="product in products" 
                    :item="product" 
                    :key="product.id" 
                    @update-cart="updateCart"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                </ShopItem>
            </div>
        </div>
    </div>
</template>

<script>
import ShopItem from '../Shop/ShopItem';

export default {
    name: 'RelatedProducts',
    components: {
        ShopItem
    },
    methods: {
        updateCart(e) {
            this.cart.push(e);
            this.total = this.shoppingCartTotal;
        },
        emptyCart(){
            this.cart = [];
            this.total = 0;
        }
    },
    computed: {
        products(){
            return this.$store.state.items;
        }
    }
}
</script>