<template>
    <div class="ai-blog-area pt-100 pb-70" style="background-color:#F7FBFF;">
        <div class="container">
            <div class="section-title with-underline-text">
                <h2>新闻动态<br>
                <!-- <p> 中秋快乐<img class="img-fluid o_we_custom_image" src="http://backend.hsturing.com/web/image/225-1404d6d5/R-C.jpg?access_token=b2cce958-302e-4d5c-8d6c-97a3d7a2a32a"></p> -->
                    <!-- 我们致力于报道和分享社团内最新的活动、项目进展以及会员成就 -->
                    </h2>
                <p>我们致力于分享社团内最新的活动、项目进展以及会员成就<br>
                希望您能够通过阅读我们的新闻，更好地认识我们的社团和我们的成员</p>
            </div>
            <!-- <div v-for="(item,index) in news" :key="index">
                <div :v-html="item.description">
                    {{item.description}}
                </div>
            </div> -->
            

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6" v-for="(item,index) in news" :key="index">
                    <div class="ai-blog-card">
                        <div class="entry-thumbnail">
                            <router-link :to="'/blog-details/' + item.id"><img :src="host + item.img" alt="image"></router-link>
                        </div>
                        <div class="entry-post-content">
                            <div class="tag">
                                <router-link :to="'/blog-details/' + item.id">{{item.tag}}</router-link>
                            </div>
                            <h3><router-link :to="'/blog-details/' + item.id">{{item.name}}</router-link></h3>
                            <!-- <div>{{itme.description}}</div> -->
                            <ul class="entry-meta">
                                <!-- <li>By <router-link to="/blog-one">Thomas Kelbin</router-link></li> -->
                                <li>{{item.author}}</li>
                                <li>{{item.show_date}}</li>
                                <!-- <li>0 Comment</li> -->
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-lg-4 col-md-6">
                    <div class="ai-blog-card">
                        <div class="entry-thumbnail">
                            <router-link to="/blog-details"><img src="../../assets/images/home-six/blog/blog2.jpg" alt="image"></router-link>
                        </div>
                        <div class="entry-post-content">
                            <div class="tag">
                                <router-link to="/blog-details">TECHNOLOGY</router-link>
                            </div>
                            <h3><router-link to="/blog-details">I Used The Web For A Day On A 50 MB Budget</router-link></h3>
                            <ul class="entry-meta">
                                <li>By <router-link to="/blog-one">Thomas Kelbin</router-link></li>
                                <li>17th January</li>
                                <li>0 Comment</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="ai-blog-card">
                        <div class="entry-thumbnail">
                            <router-link to="/blog-details"><img src="../../assets/images/home-six/blog/blog3.jpg" alt="image"></router-link>
                        </div>
                        <div class="entry-post-content">
                            <div class="tag">
                                <router-link to="/blog-details">TECHNOLOGY</router-link>
                            </div>
                            <h3><router-link to="/blog-details">Here Are The 5 Most Telling Signs Of Micromanagement</router-link></h3>
                            <ul class="entry-meta">
                                <li>By <router-link to="/blog-one">Thomas Kelbin</router-link></li>
                                <li>17th January</li>
                                <li>0 Comment</li>
                            </ul>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Blog',
    mounted(){
        this.postData();
    },
    data(){
        return{
            news:[],
            host:'http://backend.hsturing.com/',
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
                this.news=res.data.result.News
            });
        },
    },
};
</script>