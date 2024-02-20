<template>
    <div class="services-section bg-f2f6f9 ptb-110">
        <div class="container">
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

                                        <!-- <router-link 
                                            to="/services-details" 
                                            class="btn btn-primary mt-1"
                                        >
                                            Read More
                                        </router-link> -->
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
                    title: '技术咨询&指导',
                    image: require('../../assets/images/services-img-1.png'),
                    description: '我们的社团成员具备丰富的计算机技术知识和经验，在软件开发、网络安全、数据分析等方面能够提供专业的咨询和指导。无论您在学习、工作还是创业过程中遇到什么技术难题，我们都会尽力帮助您找到解决方案。',
                },
                {
                    id: 2,
                    title: '项目合作&支持',
                    image: require('../../assets/images/services-img-1.png'),
                    description: '如果您有一个创新的项目想要实现，需要技术上的支持和合作，图灵社可以成为您的理想合作伙伴。我们的社团成员可以参与到您的项目中，提供技术咨询、编码实现、测试等方面的支持，帮助您顺利完成项目。',
                },
                {
                    id: 3,
                    title: '技术培训&讲座',
                    image: require('../../assets/images/services-img-1.png'),
                    description: '图灵社定期举办各类技术培训和讲座，涵盖了编程语言、算法与数据结构、人工智能、区块链、云计算等热门技术领域。不论您是初学者还是有一定基础的技术爱好者，我们都有适合您的培训和讲座内容，帮助您提升技术水平。',
                },
                {
                    id: 4,
                    title: '项目展示&交流',
                    image: require('../../assets/images/services-img-1.png'),
                    description: '我们鼓励社团成员积极参与各类科技竞赛和项目实践，并定期组织项目展示和交流活动。无论您有一个优秀的项目想要展示，或者想要与其他技术爱好者进行交流与合作，我们的活动将为您提供一个良好的平台。',
                },
                {
                    id: 5,
                    title: '社团文化建设',
                    image: require('../../assets/images/services-img-1.png'),
                    description: '作为一个社团，图灵社注重成员之间的交流与合作，我们定期组织各种技术沙龙、团队建设活动和社团聚会，营造积极向上的学习氛围和友好的社团文化。',
                },
                {
                    id: 6,
                    title: '技术社群建设',
                    image: require('../../assets/images/services-img-1.png'),
                    description: '作为一个计算机社团，图灵社致力于建设一个积极向上的技术社群。我们鼓励社团成员之间的交流与合作，提供一个互帮互助、共同学习的平台。我们定期组织各类技术沙龙、讨论会和研讨会，让成员们能够分享自己的经验和知识，从而促进技术水平的提升。',
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