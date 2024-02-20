<template>
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="strend-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/images/white-logo.png" class="main-logo" alt="logo">
                        <img src="../../assets/images/black-logo.png" class="optional-logo" alt="logo">
                    </router-link>

                    <div 
                        class="navbar-toggler"
                        @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                        v-bind:class="{ 'active': button_active_state }"
                        v-on:click="button_active_state = !button_active_state"
                    >
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </div>

                    <div class="collapse navbar-collapse" :class="{ show: active }">
                        <ul class="navbar-nav">
                            <li class="nav-item"><router-link to="/" class="nav-link">首页</router-link>


                            <!-- <li class="nav-item">
                                <router-link to="/contact" class="nav-link">联系我们</router-link>
                            </li> -->




                                <!-- <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/" class="nav-link" exact>Home Demo - 1</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/home-demo-two" class="nav-link">Home Demo - 2</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/home-demo-three" class="nav-link">Home Demo - 3</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/home-demo-four" class="nav-link">Home Demo - 4</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/home-demo-five" class="nav-link">Home Demo - 5</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/home-demo-six" class="nav-link">Home Demo - 6</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/home-demo-seven" class="nav-link">Home Demo - 7</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/home-demo-eight" class="nav-link">Home Demo - 8</router-link>
                                    </li>
                                </ul> -->
                            </li>

                            <li class="nav-item"><a href="#" class="nav-link">关于我们 <i class="fas fa-chevron-down"></i></a>
                                <ul class="dropdown-menu">
                                    <!-- <li class="nav-item"> -->
                                        <!-- <a href="#" class="nav-link">关于我们<i class="fas fa-chevron-down"></i></a>
                                        <ul class="dropdown-menu"> -->
                                            <li class="nav-item">
                                                <router-link to="/about-one" class="nav-link">关于我们</router-link>
                                            </li>
                                            <!-- 
                                            <li class="nav-item">
                                                <router-link to="/about-two" class="nav-link">About Us 2</router-link>
                                            </li>
                                        </ul> -->
                                    <!-- </li> -->

                                    <li class="nav-item">
                                        <router-link to="/team" class="nav-link">团队成员</router-link>
                                    </li>

                                    <!-- <li class="nav-item">
                                        <router-link to="/pricing" class="nav-link">Pricing</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/feedback" class="nav-link">Feedback</router-link>
                                    </li> -->

                                    <li class="nav-item">
                                        <router-link to="/partner" class="nav-link">合作对象</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/faq" class="nav-link">常见问题</router-link>
                                    </li>

                                    <!-- <li class="nav-item">
                                        <router-link to="/privacy-policy" class="nav-link">Privacy Policy</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/terms-of-service" class="nav-link">Terms Of Service</router-link>
                                    </li> -->
                                </ul>
                            </li>

                            <li class="nav-item"><router-link to="/services-two" class="nav-link">服务领域</router-link>
                                <!-- <a href="#" class="nav-link">服务领域 <i class="fas fa-chevron-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/services-one" class="nav-link">Services Style One</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/services-two" class="nav-link">Services Style Two</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/services-three" class="nav-link">Services Style Three</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/services-four" class="nav-link">Services Style Four</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/services-details" class="nav-link">Services Details</router-link>
                                    </li>
                                </ul> -->
                            </li>

                            <!-- <li class="nav-item"><a href="#" class="nav-link">项目成果 <i class="fas fa-chevron-down"></i></a> -->
                                <!-- <ul class="dropdown-menu"> -->
                            <li class="nav-item">
                                <router-link to="/projects" class="nav-link">项目成果</router-link>
                            </li>

                                    <!-- <li class="nav-item"> -->
                                        <!-- <router-link to="/projects-details" class="nav-link">Projects Details</router-link> -->
                                    <!-- </li> -->
                                <!-- </ul> -->
                            <!-- </li> -->

                            <!-- <li class="nav-item"><router-link to="/shop" class="nav-link">Shop</router-link></li> -->

                            <!-- <li class="nav-item"><a href="#" class="nav-link">新闻动态<i class="fas fa-chevron-down"></i></a>
                                <ul class="dropdown-menu"> -->
                            <li class="nav-item">
                                <router-link to="/blog-one" class="nav-link">新闻动态</router-link>
                            </li>

                                    <!-- <li class="nav-item">
                                        <router-link to="/blog-two" class="nav-link">Blog Right Sidebar</router-link>
                                    </li> -->

                                    <!-- <li class="nav-item">
                                        <router-link to="/blog-details" class="nav-link">Blog Details</router-link>
                                    </li>
                                </ul>
                            </li> -->

                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">联系我们</router-link>
                            </li>
                        </ul>
                    </div>

                    <!-- <div class="others-options">
                        <router-link to="/cart" class="cart-btn">
                            <i class="flaticon-commerce-and-shopping"></i>
                            <span>{{shoppingCart.length}}</span>
                        </router-link>

                        <div class="option-item">
                            <div class="search-box" v-on:click="isSearchMethod(isSearch)">
                                <i class="fas fa-search"></i>
                            </div>
                        </div>

                        <div class="search-overlay" v-if="isSearch">
                            <div class="d-table">
                                <div class="d-table-cell">
                                    <div class="search-overlay-layer"></div>
                                    <div class="search-overlay-layer"></div>
                                    <div class="search-overlay-layer"></div>
                                    
                                    <div class="search-overlay-close" v-on:click="isSearchMethod(isSearch)">
                                        <span class="search-overlay-close-line"></span>
                                        <span class="search-overlay-close-line"></span>
                                    </div>

                                    <div class="search-overlay-form">
                                        <form>
                                            <input type="text" class="input-search" placeholder="Search here...">
                                            <button type="submit"><i class="fas fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <router-link to="/contact" class="btn btn-primary">Schedule a Demo</router-link>
                    </div> -->
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarStyleTwo',
    data(){
        return {
            isSticky: false,
            isSearch: false,
            active: false,
            button_active_state: false
        }
    },

    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },

    computed: {
        shoppingCart(){
            return this.$store.state.cart
        }
    },

    methods: {
        isSearchMethod(isSearch){
            console.log(this.isSearch)
            return this.isSearch = !isSearch
        }
    }
}
</script>