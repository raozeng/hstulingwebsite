<template>
    <div class="pricing-area ptb-110 pt-0">
        <div class="container">
            <div class="section-title">
                <h2>Our Pricing Plan</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="pricing-tab bg-color">
                <div class="tabs">
                    <ul class="tabs__header">
                        <li 
                            class="tabs__header-item" 
                            v-for="tab in tabs" 
                            v-on:click="selectTab (tab.id)" 
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            {{tab.title}}
                        </li>
                    </ul>
                </div>
                <div class="tabs__container">
                    <div 
                        class="tabs__list"
                        ref='tabsList'
                    >
                        <div 
                            class="tabs__list-tab"
                            v-for="tab in tabs"
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            <div class="row justify-content-center">
                                <div 
                                    class="col-lg-4 col-md-6"
                                    v-for="pricing in tab.singlePricing"
                                    :key="pricing.id"
                                >
                                    <div :class="pricing.class">
                                        <div class="pricing-header">
                                            <h3>{{pricing.title}}</h3>
                                            <p>{{pricing.shortDesc}}</p>
                                        </div>

                                        <div class="price">
                                            ${{pricing.price}} <span>/{{pricing.period}}</span>
                                        </div>

                                        <div class="buy-btn">
                                            <router-link :to="pricing.btnLink" class="btn btn-primary">
                                                {{pricing.btnText}}
                                            </router-link>
                                        </div>

                                        <ul class="pricing-features">
                                            <li
                                                v-for="features in pricing.pricingFeatures"
                                                :key="features.id"
                                            >
                                                <i :class='features.icon'></i> 
                                                {{features.feature}}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="shape-img2"><img src="../../assets/images/shapes/shape-2.svg" alt="image"></div>
        <div class="shape-img3"><img src="../../assets/images/shapes/shape-3.png" alt="image"></div>
        <div class="shape-img4"><img src="../../assets/images/shapes/shape-4.svg" alt="image"></div>
        <div class="shape-img5"><img src="../../assets/images/shapes/shape-5.svg" alt="image"></div>
        <div class="shape-img7"><img src="../../assets/images/shapes/shape-3.png" alt="image"></div>
        <div class="dot-shape1"><img src="../../assets/images/shapes/dot-1.png" alt="image"></div>
        <div class="dot-shape2"><img src="../../assets/images/shapes/dot-3.png" alt="image"></div>
        <div class="dot-shape4"><img src="../../assets/images/shapes/dot-4.png" alt="image"></div>
        <div class="dot-shape5"><img src="../../assets/images/shapes/dot-5.png" alt="image"></div>
        <div class="dot-shape6"><img src="../../assets/images/shapes/dot-6.png" alt="image"></div>
    </div>
</template>

<script>
export default {
    name: 'OurPricingPlanTwo',
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,

            tabs: [
                {
                    id: 1,
                    title: 'Monthly Plan',
                    singlePricing: [
                        {
                            id: 1,
                            class: 'pricing-box',
                            title: 'Free',
                            shortDesc: 'Get your business up and running',
                            price: '149',
                            period: 'm',
                            btnText: 'Get Started Free',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'flaticon-tick',
                                    feature: 'Drag & Drop Builder',
                                },
                                {
                                    id: 2,
                                    icon: 'flaticon-tick',
                                    feature: 'Lead Generation & Sales',
                                },
                                {
                                    id: 3,
                                    icon: 'flaticon-tick',
                                    feature: 'Boot & Digital Assistants',
                                },
                                {
                                    id: 4,
                                    icon: 'flaticon-tick',
                                    feature: 'Customer Service',
                                },
                                {
                                    id: 5,
                                    icon: 'flaticon-tick',
                                    feature: 'Up to 1000 Subscribers',
                                },
                                {
                                    id: 6,
                                    icon: 'flaticon-tick',
                                    feature: 'Unlimited Broadcasts',
                                },
                                {
                                    id: 7,
                                    icon: 'flaticon-tick',
                                    feature: 'Landing Pages & Web Widgets',
                                },
                            ]
                        },
                        {
                            id: 2,
                            class: 'pricing-box active',
                            title: 'Pro',
                            shortDesc: 'Get your business up and running',
                            price: '0',
                            period: 'm',
                            btnText: 'Start 3 Days Free Trial',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'flaticon-tick',
                                    feature: 'Drag & Drop Builder',
                                },
                                {
                                    id: 2,
                                    icon: 'flaticon-tick',
                                    feature: 'Lead Generation & Sales',
                                },
                                {
                                    id: 3,
                                    icon: 'flaticon-tick',
                                    feature: 'Boot & Digital Assistants',
                                },
                                {
                                    id: 4,
                                    icon: 'flaticon-tick',
                                    feature: 'Customer Service',
                                },
                                {
                                    id: 5,
                                    icon: 'flaticon-tick',
                                    feature: 'Up to 3300 Subscribers',
                                },
                                {
                                    id: 6,
                                    icon: 'flaticon-tick',
                                    feature: 'Unlimited Broadcasts',
                                },
                                {
                                    id: 7,
                                    icon: 'flaticon-tick',
                                    feature: 'Landing Pages & Web Widgets',
                                },
                            ]
                        },
                        {
                            id: 1,
                            class: 'pricing-box',
                            title: 'Premium',
                            shortDesc: 'Get your business up and running',
                            price: '179',
                            period: 'm',
                            btnText: 'Start 6 Days Free Trial',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'flaticon-tick',
                                    feature: 'Drag & Drop Builder',
                                },
                                {
                                    id: 2,
                                    icon: 'flaticon-tick',
                                    feature: 'Lead Generation & Sales',
                                },
                                {
                                    id: 3,
                                    icon: 'flaticon-tick',
                                    feature: 'Boot & Digital Assistants',
                                },
                                {
                                    id: 4,
                                    icon: 'flaticon-tick',
                                    feature: 'Customer Service',
                                },
                                {
                                    id: 5,
                                    icon: 'flaticon-tick',
                                    feature: 'Up to 10000 Subscribers',
                                },
                                {
                                    id: 6,
                                    icon: 'flaticon-tick',
                                    feature: 'Unlimited Broadcasts',
                                },
                                {
                                    id: 7,
                                    icon: 'flaticon-tick',
                                    feature: 'Landing Pages & Web Widgets',
                                },
                            ]
                        },
                    ],
                },
                {
                    id: 2,
                    title: 'Yearly Plan',
                    singlePricing: [
                        {
                            id: 1,
                            class: 'pricing-box',
                            title: 'Free',
                            shortDesc: 'Get your business up and running',
                            price: '149',
                            period: 'y',
                            btnText: 'Get Started Free',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'flaticon-tick',
                                    feature: 'Drag & Drop Builder',
                                },
                                {
                                    id: 2,
                                    icon: 'flaticon-tick',
                                    feature: 'Lead Generation & Sales',
                                },
                                {
                                    id: 3,
                                    icon: 'flaticon-tick',
                                    feature: 'Boot & Digital Assistants',
                                },
                                {
                                    id: 4,
                                    icon: 'flaticon-tick',
                                    feature: 'Customer Service',
                                },
                                {
                                    id: 5,
                                    icon: 'flaticon-tick',
                                    feature: 'Up to 1000 Subscribers',
                                },
                                {
                                    id: 6,
                                    icon: 'flaticon-tick',
                                    feature: 'Unlimited Broadcasts',
                                },
                                {
                                    id: 7,
                                    icon: 'flaticon-tick',
                                    feature: 'Landing Pages & Web Widgets',
                                },
                            ]
                        },
                        {
                            id: 2,
                            class: 'pricing-box active',
                            title: 'Pro',
                            shortDesc: 'Get your business up and running',
                            price: '0',
                            period: 'y',
                            btnText: 'Start 3 Days Free Trial',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'flaticon-tick',
                                    feature: 'Drag & Drop Builder',
                                },
                                {
                                    id: 2,
                                    icon: 'flaticon-tick',
                                    feature: 'Lead Generation & Sales',
                                },
                                {
                                    id: 3,
                                    icon: 'flaticon-tick',
                                    feature: 'Boot & Digital Assistants',
                                },
                                {
                                    id: 4,
                                    icon: 'flaticon-tick',
                                    feature: 'Customer Service',
                                },
                                {
                                    id: 5,
                                    icon: 'flaticon-tick',
                                    feature: 'Up to 3300 Subscribers',
                                },
                                {
                                    id: 6,
                                    icon: 'flaticon-tick',
                                    feature: 'Unlimited Broadcasts',
                                },
                                {
                                    id: 7,
                                    icon: 'flaticon-tick',
                                    feature: 'Landing Pages & Web Widgets',
                                },
                            ]
                        },
                        {
                            id: 1,
                            class: 'pricing-box',
                            title: 'Premium',
                            shortDesc: 'Get your business up and running',
                            price: '179',
                            period: 'y',
                            btnText: 'Start 6 Days Free Trial',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'flaticon-tick',
                                    feature: 'Drag & Drop Builder',
                                },
                                {
                                    id: 2,
                                    icon: 'flaticon-tick',
                                    feature: 'Lead Generation & Sales',
                                },
                                {
                                    id: 3,
                                    icon: 'flaticon-tick',
                                    feature: 'Boot & Digital Assistants',
                                },
                                {
                                    id: 4,
                                    icon: 'flaticon-tick',
                                    feature: 'Customer Service',
                                },
                                {
                                    id: 5,
                                    icon: 'flaticon-tick',
                                    feature: 'Up to 10000 Subscribers',
                                },
                                {
                                    id: 6,
                                    icon: 'flaticon-tick',
                                    feature: 'Unlimited Broadcasts',
                                },
                                {
                                    id: 7,
                                    icon: 'flaticon-tick',
                                    feature: 'Landing Pages & Web Widgets',
                                },
                            ]
                        },
                    ],
                },
            ]
        }
    },
    methods: {
        selectTab (id) {
            let tabsList = this.$refs.tabsList
            this.activeTab = id
            this.offsetRight = tabsList.clientWidth * (id - 1)
            tabsList.style.right = this.offsetRight + 'px'
        }
    },
    mounted () {
        let tabsList = this.$refs.tabsList
        tabsList.style.right = this.offsetRight + 'px'
    },
}
</script>