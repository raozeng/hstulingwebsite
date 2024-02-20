<template>
    <div class="ai-pricing-area ">
         <div class="container">
            <div class="section-title with-underline-text">
                <h2>人员招募</h2>
                <!-- <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut eget pellentesque nulla viverr.</p> -->
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6" v-for="(item,index) in result" :key="index">
                    <div class="ai-pricing-card">
                        <div class="pricing-header">
                            <h3>{{item.type_id}}</h3><br>
                            <!-- <p>{{item.show_date}}</p> -->
                        </div>
                        <!-- <div class="price">
                            $250 <span>/month</span>
                        </div> -->
                        <ul class="pricing-features">
                            <li> <b>开始日期：</b> {{item.show_date}}</li>
                            <li> <b>截至日期：</b> {{item.show_date}}</li>
                            <li> <b>招募状态：</b> {{item.ircruit_state}}</li>
                            <li> <b>招募要求:</b> </li>
                            <ol>
                                <li>{{item.description1}}</li>
                                <li>{{item.description2}}</li>
                                <li>{{item.description3}}</li>
                            </ol>
                            <!-- <li v-for="(condition,index) in result" :key="index"> Customer Service</li> -->
                            <!-- <li>  {{item.description2}}</li> -->
                            <!-- <li> {{item.description3}}</li> -->
                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/contact" class="btn btn-primary">contact us</router-link>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-lg-4 col-md-6">
                    <div class="ai-pricing-card">
                        <div class="pricing-header">
                            <h3>Premium</h3>
                            <p>For small business</p>
                        </div>
                        <div class="price">
                            $480 <span>/month</span>
                        </div>
                        <ul class="pricing-features">
                            <li><i class="fas fa-check"></i> Drag & Drop Builder</li>
                            <li><i class="fas fa-check"></i> Lead Generation & Sales</li>
                            <li><i class="fas fa-check"></i> Boot & Digital Assistants</li>
                            <li><i class="fas fa-check"></i> Customer Service</li>
                            <li><i class="fas fa-check"></i> Up to 1000 Subscribers</li>
                            <li><i class="fas fa-check"></i> Unlimited Broadcasts</li>
                            <li><i class='fas fa-times'></i> Landing Pages & Web Widgets</li>
                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/contact" class="btn btn-primary">Book A Demo</router-link>
                        </div>
                        <div class="tag">POPULAR</div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="ai-pricing-card">
                        <div class="pricing-header">
                            <h3>Business</h3>
                            <p>For companies & business</p>
                        </div>
                        <div class="price">
                            $1200 <span>/month</span>
                        </div>
                        <ul class="pricing-features">
                            <li><i class="fas fa-check"></i> Drag & Drop Builder</li>
                            <li><i class="fas fa-check"></i> Lead Generation & Sales</li>
                            <li><i class="fas fa-check"></i> Boot & Digital Assistants</li>
                            <li><i class="fas fa-check"></i> Customer Service</li>
                            <li><i class="fas fa-check"></i> Up to 1000 Subscribers</li>
                            <li><i class="fas fa-check"></i> Unlimited Broadcasts</li>
                            <li><i class="fas fa-check"></i> Landing Pages & Web Widgets</li>
                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/contact" class="btn btn-primary">Book A Demo</router-link>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>

        <div class="ai-pricing-shape-1">
            <img src="../../assets/images/home-six/pricing-shape.png" alt="image">
        </div>
        <div class="ai-pricing-shape-2">
            <img src="../../assets/images/home-six/pricing-shape.png" alt="image">
        </div> 
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'EasyPricingPlan',
    mounted(){
        this.postData();
    },
    data(){
        return {
            result:[],
        };
    },
    methods:{
        postData(){
            axios({
                method:"POST",
                url:"http://backend.hsturing.com/getTLSirecruitDate",
                data:{
                    params:{
                    },
                },
            }).then((res)=>{
                this.result=res.data.result.irecruits
            });
        },
    },
};
</script>