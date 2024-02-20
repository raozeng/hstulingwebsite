<template>
    <div class="blog-area ptb-110">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6" v-for="(item,index) in project" :key="index">
                    <div class="single-blog-post">
                        <div class="entry-thumbnail">
                            <router-link :to="'/blog-details/' + item.id">
                            <img :src="host + item.img" alt="image"></router-link>
                        </div>

                        <div class="entry-post-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><router-link :to="'/blog-details/' + item.id">Admin</router-link></li>
                                    <li>August 15, 2022</li>
                                </ul>
                            </div>

                            <h3><router-link :to="'/blog-details/' + item.id">Making Peace With The Feast Or Famine Of Freelancing</router-link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            <router-link :to="'/blog-details/' + item.id" class="learn-more-btn">Read More <i class="flaticon-add"></i></router-link>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="entry-thumbnail">
                            <router-link to="/blog-details"><img src="../../assets/images/blog/blog-2.jpg" alt="image"></router-link>
                        </div>

                        <div class="entry-post-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><router-link to="/blog-one">Admin</router-link></li>
                                    <li>August 18, 2022</li>
                                </ul>
                            </div>

                            <h3><router-link to="/blog-details">I Used The Web For A Day On A 50 MB Budget</router-link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            <router-link to="/blog-details" class="learn-more-btn">Read More <i class="flaticon-add"></i></router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="entry-thumbnail">
                            <router-link to="/blog-details"><img src="../../assets/images/blog/blog-3.jpg" alt="image"></router-link>
                        </div>

                        <div class="entry-post-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><router-link to="/blog-one">Admin</router-link></li>
                                    <li>August 15, 2022</li>
                                </ul>
                            </div>

                            <h3><router-link to="/blog-details">Here are the 5 most telling signs of micromanagement</router-link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            <router-link to="/blog-details" class="learn-more-btn">Read More <i class="flaticon-add"></i></router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="entry-thumbnail">
                            <router-link to="/blog-details"><img src="../../assets/images/blog/blog-4.jpg" alt="image"></router-link>
                        </div>

                        <div class="entry-post-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><router-link to="/blog-one">Admin</router-link></li>
                                    <li>August 15, 2022</li>
                                </ul>
                            </div>

                            <h3><router-link to="/blog-details">Add And Show Image With Size From Elementor Widget</router-link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            <router-link to="/blog-details" class="learn-more-btn">Read More <i class="flaticon-add"></i></router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="entry-thumbnail">
                            <router-link to="/blog-details"><img src="../../assets/images/blog/blog-5.jpg" alt="image"></router-link>
                        </div>

                        <div class="entry-post-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><router-link to="/blog-one">Admin</router-link></li>
                                    <li>August 18, 2022</li>
                                </ul>
                            </div>

                            <h3><router-link to="/blog-details">How To The Active Menu Based On URL In Next.JS?</router-link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            <router-link to="/blog-details" class="learn-more-btn">Read More <i class="flaticon-add"></i></router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="entry-thumbnail">
                            <router-link to="/blog-details"><img src="../../assets/images/blog/blog-6.jpg" alt="image"></router-link>
                        </div>

                        <div class="entry-post-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><router-link to="/blog-one">Admin</router-link></li>
                                    <li>August 15, 2022</li>
                                </ul>
                            </div>

                            <h3><router-link to="/blog-details">Instagram Feed Add To Your WordPress Site</router-link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            <router-link to="/blog-details" class="learn-more-btn">Read More <i class="flaticon-add"></i></router-link>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <router-link to="/blog-one" class="prev page-numbers"><i class="fas fa-angle-double-left"></i></router-link>
                        <router-link to="/blog-one" class="page-numbers">1</router-link> -->
                        <!-- <span class="page-numbers current" aria-current="page">2</span> -->
                        <!-- <router-link to="/blog-one" class="page-numbers">2</router-link>
                        <router-link to="/blog-one" class="page-numbers">3</router-link>
                        <router-link to="/blog-one" class="page-numbers">4</router-link>
                        <router-link to="/blog-one" class="next page-numbers"><i class="fas fa-angle-double-right"></i></router-link>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'BlogCart',
    mounted(){
        this.postData();
    },
    data(){
        return{
            project:[],
            host:'http://backend.hsturing.com/',
        };
    },
    methods:{
        postData(){
            axios({
                method:"POST",
                url:"http://backend.hsturing.com/getTLSnewsDate",
                data:{
                    params:{
                        id:this.$route.params.id,
                    },
                },
        }).then((res)=>{
            this.project=res.data.result.news
        });
    },
    },
    
};
</script>