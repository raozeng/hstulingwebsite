<template>
    <div>
        <div class="single-product-box">
            <div class="product-image">
                <router-link to="/products-details">
                    <img :src="item.image" alt="image">
                    <img :src="item.imageHover" alt="image">
                </router-link>

                <a 
                    href="javascript:void(0)" 
                    class="add-to-cart-btn"
                    @click="addToCart(item)"
                >
                    Add To Cart 
                    <i class="fas fa-cart-plus"></i>
                </a>

                <div v-if="item.sale" class="sale-btn">Sale!</div>
            </div>

            <div class="product-content">
                <h3>
                    <router-link to="/products-details">
                        {{item.name}}
                    </router-link>
                </h3>
                <div class="price">
                    <span class="new">${{item.price}}</span>
                    <span class="old">${{item.oldPrice}}</span>
                </div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopItem',
    props: ['item'],
    methods: {
        addToCart(item) {
            this.$toast.success('Added to cart', {
                icons: 'shopping_cart',
                position: "bottom-left", 
                duration : 3000
            });
            if(this.size !== '') {
                this.$store.commit({
                    type: 'addToCart',
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    oldPrice: item.oldPrice,
                    image: item.image,
                    imageHover: item.imageHover,
                    productQuantity: 1,
                    totalPrice: item.price,
                })
            }
        }
    }
}
</script>