<template>
    <div class="services-section bg-f2f6f9 ptb-110">
        <div class="container">
            <div class="section-title">
                <h2>We Offer Professional Solutions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="features-tab">
                <div class="row">
                    <div class="col-lg-4">
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
                    </div>
                    <div class="col-lg-8">
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
                                    <div class="image">
                                        <img :src="tab.image" alt="image">
                                    </div>

                                    <div class="content">
                                        <p>{{tab.description}}</p>

                                        <router-link 
                                            to="/services-details" 
                                            class="btn btn-primary mt-1"
                                        >
                                            Read More
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shape-img1"><img src="../../assets/images/shapes/shape-1.png" alt="image"></div>
        <div class="shape-img3"><img src="../../assets/images/shapes/shape-3.png" alt="image"></div>
        <div class="shape-img2"><img src="../../assets/images/shapes/shape-2.svg" alt="image"></div>
        <div class="shape-img5"><img src="../../assets/images/shapes/shape-5.svg" alt="image"></div>
        <div class="shape-img4"><img src="../../assets/images/shapes/shape-4.svg" alt="image"></div>
        <div class="dot-shape1"><img src="../../assets/images/shapes/dot-1.png" alt="image"></div>
        <div class="dot-shape2"><img src="../../assets/images/shapes/dot-3.png" alt="image"></div>
    </div>
</template>

<script>
export default {
    name: 'WeOfferProfessionalSolutions',
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,

            tabs: [
                {
                    id: 1,
                    title: 'Data',
                    image: require('../../assets/images/services-img-1.png'),
                    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
                },
                {
                    id: 2,
                    title: 'Automation Optimization',
                    image: require('../../assets/images/services-img-1.png'),
                    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
                },
                {
                    id: 3,
                    title: 'Security & Surveillance',
                    image: require('../../assets/images/services-img-1.png'),
                    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
                },
                {
                    id: 4,
                    title: 'Health & Manufacturing',
                    image: require('../../assets/images/services-img-1.png'),
                    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
                },
                {
                    id: 5,
                    title: 'Software Engineers',
                    image: require('../../assets/images/services-img-1.png'),
                    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
                },
                {
                    id: 6,
                    title: 'IT Professional',
                    image: require('../../assets/images/services-img-1.png'),
                    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
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