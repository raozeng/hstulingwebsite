<template>
    <section class="ai-services-area pt-100 pb-100">
        <div class="container">
            <div class="section-title with-underline-text">
                <h1>项目成果</h1>
                <!-- <h4>图灵社在不断探索创新的道路上取得了丰硕的成果。以下是我们最引以为豪的项目成果，展现了我们对于计算机领域的深入研究、实践经验以及对技术发展的持续追求。</h4> -->
                <p>图灵社在不断探索创新的道路上取得了丰硕的成果。以下是我们最引以为豪的项目成果，展现了我们对于计算机领域的深入研究、实践经验以及对技术发展的持续追求。</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6" v-for="(item,index) in Present" :key="index">
                    <div class="single-services-card">
                        <div class="image-icon">
                            <img :src="host + item.img" alt="icon" style="height: 90px;width: 100px;border-radius: 50%;z-index: 1;">
                        </div>
                        <h3>
                            <!-- <router-link to="/services-details">{{item.name}}</router-link> -->
                            <h2>{{item.name}}</h2>
                        </h3>
                        <p>{{item.description}}</p>
                        <router-link :to="'/projects-details/' + item.id" class="read-btn">Read More</router-link>
                    </div>
                </div>

                <!-- <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-card">
                        <div class="image-icon bg-two">
                            <img src="../../assets/images/home-six/services/icon2.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">我在第四页Data Analysts</router-link>
                        </h3>
                        <p>我在第四页Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem ipsum dolor sit am adipiscing elit sed do eiusmod.</p>
                        <router-link to="/services-details" class="read-btn">我在第四页Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-card">
                        <div class="image-icon bg-three">
                            <img src="../../assets/images/home-six/services/icon3.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">我在第四页Security & Surveillance</router-link>
                        </h3>
                        <p>我在第四页Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem ipsum dolor sit am adipiscing elit sed do eiusmod.</p>
                        <router-link to="/services-details" class="read-btn">我在第四页Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-card">
                        <div class="image-icon bg-four">
                            <img src="../../assets/images/home-six/services/icon4.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">我在第四页Health & Manufacturing</router-link>
                        </h3>
                        <p>我在第四页Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem ipsum dolor sit am adipiscing elit sed do eiusmod.</p>
                        <router-link to="/services-details" class="read-btn">我在第四页Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-card">
                        <div class="image-icon bg-five">
                            <img src="../../assets/images/home-six/services/icon5.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">我在第四页Robotic Automation</router-link>
                        </h3>
                        <p>我在第四页Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem ipsum dolor sit am adipiscing elit sed do eiusmod.</p>
                        <router-link to="/services-details" class="read-btn">我在第四页Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-card">
                        <div class="image-icon bg-six">
                            <img src="../../assets/images/home-six/services/icon6.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">我在第四页Automatic Optimization</router-link>
                        </h3>
                        <p>我在第四页Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem ipsum dolor sit am adipiscing elit sed do eiusmod.</p>
                        <router-link to="/services-details" class="read-btn">我在第四页Read More</router-link>
                    </div>
                </div> -->

                <div class="col-lg-12 col-md-12">
                    <div class="ai-all-services-btn">
                        <router-link to="/projects" class="btn btn-primary">了解更多</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="ai-services-shape">
            <img src="../../assets/images/home-six/services/shape.png" alt="image">
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: 'ProfessionalSolutions',
    mounted(){
        this.postData();
    },
    data(){
        return{
           Present:[], 
           host:'http://backend.hsturing.com/'
        };
    },
    methods:{
        postData(){
            axios({
                method:"POST",
                url:"http://backend.hsturing.com/getTLSIndexData",
                data:{
                    params:{
                    },
                },
            }).then((res)=>{
                this.Present=res.data.result.Index_projects;
            })
        },
    },
};
</script>