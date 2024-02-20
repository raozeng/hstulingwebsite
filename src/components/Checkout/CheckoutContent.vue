<template>
    <div class="checkout-area ptb-110">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="user-actions">
                        <i class="fas fa-sign-in-alt"></i>
                        <span>Returning customer? <a href="#">Click here to login</a></span>
                    </div>
                </div>
            </div>

            <form>
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="billing-details">
                            <h3 class="title">Billing Details</h3>

                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <label>Country <span class="required">*</span></label>
                                    
                                        <div class="select-box">
                                            <select>
                                                <option value="5">United Arab Emirates</option>
                                                <option value="1">China</option>
                                                <option value="2">United Kingdom</option>
                                                <option value="0">Germany</option>
                                                <option value="3">France</option>
                                                <option value="4">Japan</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>First Name <span class="required">*</span></label>
                                        <input type="text" id="firstName" v-model="personDetails.firstName" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Last Name <span class="required">*</span></label>
                                        <input type="text" id="lastName" v-model="personDetails.lastName" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <label>Company Name</label>
                                        <input type="text" id="companyName" v-model="personDetails.companyName" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group">
                                        <label>Address <span class="required">*</span></label>
                                        <input type="text" id="address" v-model="personDetails.address" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group">
                                        <label>Town / City <span class="required">*</span></label>
                                        <input type="text" id="townCity" v-model="personDetails.townCity" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>State / Country <span class="required">*</span></label>
                                        <input type="text" id="stateCountry" v-model="personDetails.stateCountry" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Postcode / Zip <span class="required">*</span></label>
                                        <input type="text" id="postcodeZip" v-model="personDetails.postcodeZip" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Email Address <span class="required">*</span></label>
                                        <input type="email" id="emailAddress" v-model="personDetails.emailAddress" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Phone <span class="required">*</span></label>
                                        <input type="text" id="phone" v-model="personDetails.phone" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="create-an-account">
                                        <label class="form-check-label" for="create-an-account">Create an account?</label>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="ship-different-address">
                                        <label class="form-check-label" for="ship-different-address">Ship to a different address?</label>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <textarea name="notes" id="notes" v-model="personDetails.notes" cols="30" rows="5" placeholder="Order Notes" class="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="order-details">
                            <h3 class="title">Your Order</h3>

                            <div class="order-table table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr 
                                            v-for="product in shoppingCart"
                                            :key="product.name"
                                        >
                                            <td class="product-name">
                                                <router-link to="/products-details">
                                                    {{product.name}}
                                                </router-link>
                                            </td>

                                            <td class="product-total">
                                                <span class="subtotal-amount">
                                                    ${{product.totalPrice}}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="order-subtotal">
                                                <span>Cart Subtotal</span>
                                            </td>

                                            <td class="order-subtotal-price">
                                                <span class="order-subtotal-amount">
                                                    ${{totalAmount.toFixed(1)}}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="order-shipping">
                                                <span>Shipping</span>
                                            </td>

                                            <td class="shipping-price">
                                                <span>$5.00</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="total-price">
                                                <span>Order Total</span>
                                            </td>

                                            <td class="product-subtotal">
                                                <span class="subtotal-amount">
                                                    ${{(totalAmount + 1).toFixed(1)}}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="payment-box">
                                <div class="payment-method">
                                    <p>
                                        <input type="radio" id="direct-bank-transfer" name="radio-group" checked>
                                        <label for="direct-bank-transfer">Direct Bank Transfer</label>

                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </p>
                                    <p>
                                        <input type="radio" id="paypal" name="radio-group">
                                        <label for="paypal">PayPal</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="cash-on-delivery" name="radio-group">
                                        <label for="cash-on-delivery">Cash on Delivery</label>
                                    </p>
                                </div>

                                <a 
                                    href="javascript:void(0)"
                                    @click="placeOrder" 
                                    class="btn btn-primary order-btn"
                                >
                                    Place Order
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CheckoutContent',
    data(){
        return{
            personDetails: {
                firstName: 'John', 
                lastName: 'Doe',
                companyName: 'ABC',
                address: 'Town hall, av 02',
                townCity: 'New York',
                stateCountry: 'America',
                postcodeZip: '1234',
                emailAddress: 'john@gmail.com',
                phone: '+990198378372',
                createdAt: new Date()
            }
        }
    },
    methods: {
        placeOrder(){
            this.$toast.success('Thanks for the order', {
                icons: 'shopping_cart',
                position: "bottom-left", 
                duration : 3000
            });

            this.$store.state.cart = [];
            this.$router.push("/")
        }
    },
    computed: {
        shoppingCart() {
            return this.$store.state.cart
        },
        totalAmount() {
          return this.$store.getters.total
        }
    }
}
</script>