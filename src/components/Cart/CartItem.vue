<template>
    <tr>
        <td class="product-thumbnail">
            <router-link to="/products-details">
                <img :src="item.image" :alt="item.name" />
            </router-link>
        </td>

        <td class="product-name">
            <router-link to="/products-details">
                {{item.name}}
            </router-link>
        </td>

        <td class="product-price">
            <span class="unit-amount">${{item.price}}</span>
        </td>

        <td class="product-quantity">
            <div class="input-counter">
                <span 
                    @click="decrement"
                    class="minus-btn">
                    <i class="fas fa-minus"></i>
                </span>
                    {{itemNumber}}
                <span 
                    @click="increment" 
                    class="plus-btn">
                    <i class="fas fa-plus"></i>
                </span>
            </div>
        </td>

        <td class="product-subtotal">
            <span class="subtotal-amount">
                ${{item.totalPrice}}
            </span>

            <a 
                href="javascript:void(0)" 
                @click="removeFromCart(item)" 
                class="remove"
            >
                <i class="far fa-trash-alt"></i>
            </a>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'CartItem',
    props: ['item'],
    data() {
        return {
            itemNumber: 1
        }
    },
    methods: {
        removeFromCart(item){
            this.$toast.success('Removed from bag', {
                icons: 'shopping_cart',
                position: "top-right", 
                duration : 3000
            });
            this.$store.commit('removeFromCart', item);
        },
        increment(){
            if(this.itemNumber < 1){
                this.itemNumber++
            } else {
                this.$toast.success('Can\'t add more than 1 items', {
                    icons: 'shopping_cart',
                    position: "top-right", 
                    duration : 3000
                });
            }
        },
        decrement(){
            if(this.itemNumber > 1){
                this.itemNumber--
            } else {
                this.$toast.success('Can\'t add less than 1 item', {
                    icons: 'shopping_cart',
                    position: "top-right", 
                    duration : 3000
                });
            }
        },
    }
}
</script>