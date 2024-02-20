<template>
    <div class="shop-area ptb-110">
        <div class="container">
            <div class="woocommerce-topbar">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-md-7 col-sm-6">
                        <div class="woocommerce-result-count">
                            <p>Showing 1-8 of 14 results</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-5 col-sm-6">
                        <div class="woocommerce-topbar-ordering">
                            <select>
                                <option value="1">Default sorting</option>
                                <option value="2">Sort by popularity</option>
                                <option value="0">Sort by average rating</option>
                                <option value="3">Sort by latest</option>
                                <option value="4">Sort by price: low to high</option>
                                <option value="5">Sort by price: high to low</option>
                                <option value="6">Sort by new</option>
                            </select>
                        </div>
                    </div>
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

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <router-link to="/shop" class="prev page-numbers"><i class="fas fa-angle-double-left"></i></router-link>
                        <router-link to="/shop" class="page-numbers">1</router-link>
                        <span class="page-numbers current" aria-current="page">2</span>
                        <router-link to="/shop" class="page-numbers">3</router-link>
                        <router-link to="/shop" class="page-numbers">4</router-link>
                        <router-link to="/shop" class="next page-numbers"><i class="fas fa-angle-double-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ShopItem from './ShopItem';

export default {
    name: 'ShopContent',
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