<template>
    <div class="product-details-area pt-110">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="product-details-image">
                        <img src="../../assets/images/shop/shop-1.jpg" alt="image">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="product-details-desc">
                        <h3>White Book</h3>

                        <div class="price">
                            <span class="new-price">$8.50</span>
                            <span class="old-price">$$12.5</span>
                        </div>

                        <div class="product-review">
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <a href="#" class="rating-count">3 reviews</a>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                        <div class="product-add-to-cart">
                            <div class="input-counter">
                                <span @click="decrement" class="minus-btn">
                                    <i class="fas fa-minus"></i>
                                </span>
                                {{ itemNumber }}
                                <span @click="increment" class="plus-btn">
                                    <i class="fas fa-plus"></i>
                                </span>
                            </div>

                            <button
                                type="submit"
                                class="btn btn-primary"
                                @click="
                                addToCart({
                                    id: '1',
                                    name: 'Novel Bunch',
                                    price: 455.0,
                                    oldPrice: 459.99,
                                    sale: false,
                                    image: require('../../assets/images/shop/shop-1.jpg'),
                                })
                                "
                            >
                                <i class="fas fa-cart-plus"></i> Add to Cart
                            </button>
                        </div>

                        <div class="buy-checkbox-btn">
                            <div class="item">
                                <input class="inp-cbx" id="cbx" type="checkbox">
                                <label class="cbx" for="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                    <span>I agree with the terms and conditions</span>
                                </label>
                            </div>

                            <div class="item">
                                <router-link to="/checkout" class="btn btn-light">Buy it now!</router-link>
                            </div>
                        </div>

                        <div class="custom-payment-options">
                            <span>Guaranteed safe checkout:</span>

                            <div class="payment-methods">
                                <img src="../../assets/images/payment/payment-1.svg" alt="image">
                                <img src="../../assets/images/payment/payment-2.svg" alt="image">
                                <img src="../../assets/images/payment/payment-3.svg" alt="image">
                                <img src="../../assets/images/payment/payment-4.svg" alt="image">
                                <img src="../../assets/images/payment/payment-5.svg" alt="image">
                                <img src="../../assets/images/payment/payment-6.svg" alt="image">
                                <img src="../../assets/images/payment/payment-7.svg" alt="image">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="products-details-tab">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="tab_content">
                                    <b-tabs content-class="mt-3">
                                        <b-tab title="Description">
                                            <div class="tabs_item">
                                                <div class="products-details-tab-content">
                                                    <p>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.  Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.</p>
                                                </div>
                                            </div>
                                        </b-tab>
                                        
                                        <b-tab title="Additional information">
                                            <div class="tabs_item">
                                                <div class="products-details-tab-content">
                                                    <ul class="additional-information">
                                                        <li><span>Brand:</span> ThemeForest</li>
                                                        <li><span>Color:</span> Brown</li>
                                                        <li><span>Size:</span> Large, Medium</li>
                                                        <li><span>Weight:</span> 27 kg</li>
                                                        <li><span>Dimensions:</span> 16 x 22 x 123 cm</li>
                                                    </ul>
                                                </div>
                                            </div> 
                                        </b-tab>

                                        <b-tab title="Reviews">
                                            <div class="tabs_item">
                                                <div class="products-details-tab-content">
                                                    <div class="product-review-form">
                                                        <h3>Customer Reviews</h3>

                                                        <div class="review-title">
                                                            <div class="rating">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="far fa-star"></i>
                                                            </div>
                                                            <p>Based on 3 reviews</p>

                                                            <a href="#" class="btn btn-primary">Write a Review</a>
                                                        </div>

                                                        <div class="review-comments">
                                                            <div class="review-item">
                                                                <div class="rating">
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                </div>
                                                                <h3>Good</h3>
                                                                <span><strong>Admin</strong> on <strong>Sep 21, 2022</strong></span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                                <a href="#" class="review-report-link">Report as Inappropriate</a>
                                                            </div>

                                                            <div class="review-item">
                                                                <div class="rating">
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                </div>
                                                                <h3>Good</h3>
                                                                <span><strong>Admin</strong> on <strong>Sep 21, 2022</strong></span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                                <a href="#" class="review-report-link">Report as Inappropriate</a>
                                                            </div>

                                                            <div class="review-item">
                                                                <div class="rating">
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="far fa-star"></i>
                                                                </div>
                                                                <h3>Good</h3>
                                                                <span><strong>Admin</strong> on <strong>Sep 21, 2022</strong></span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                                <a href="#" class="review-report-link">Report as Inappropriate</a>
                                                            </div>
                                                        </div>

                                                        <div class="review-form">
                                                            <h3>Write a Review</h3>

                                                            <form>
                                                                <div class="row">
                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="form-group">
                                                                            <label>Name</label>
                                                                            <input type="text" id="name" name="name" placeholder="Enter your name" class="form-control">
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="form-group">
                                                                            <label>Email</label>
                                                                            <input type="email" id="email" name="email" placeholder="Enter your email" class="form-control">
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-12 col-md-12">
                                                                        <div class="form-group">
                                                                            <label>Review Title</label>
                                                                            <input type="text" id="review-title" name="review-title" placeholder="Enter your review a title" class="form-control">
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-12 col-md-12">
                                                                        <div class="form-group">
                                                                            <label>Body of Review (1500)</label>
                                                                            <textarea name="review-body" id="review-body" cols="30" rows="7" placeholder="Write your comments here" class="form-control"></textarea>
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-12 col-md-12">
                                                                        <button type="submit" class="btn btn-primary">Submit Review</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-tab>
                                    </b-tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetailsContent',
    data() {
        return {
            itemNumber: 1,
        };
    },
    methods: {
        increment() {
            if (this.itemNumber < 10) {
                this.itemNumber++;
            } else {
                this.$toast.success("Can't add more than 10 items", {
                    icons: "shopping_cart",
                    theme: "bubble",
                    position: "top-right",
                    duration: 3000,
                });
            }
        },
        decrement() {
            if (this.itemNumber > 1) {
                this.itemNumber--;
            } else {
                this.$toast.success("Can't add less than 1 item", {
                    icons: "shopping_cart",
                    theme: "bubble",
                    position: "top-right",
                    duration: 3000,
                });
            }
        },
        addToCart(item) {
            this.$toast.success("Added to bag", {
                icons: "shopping_cart",
                theme: "bubble",
                position: "top-right",
                duration: 3000,
            });
            if (this.size !== "") {
                this.$store.commit({
                type: "addToCart",
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                productQuantity: this.itemNumber,
                totalPrice: item.price * this.itemNumber,
                });
            }
        },
    },
}
</script>