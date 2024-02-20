<template>
    <div>
        <div class="projects-area ptb-110">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-md-6" v-for="(item,index) in project" :key="index">
                        <div class="single-projects-box">
                            <!-- <img :src="attr('src',host + item.img1)" alt="image"> -->
                            <img :src=" host + item.img" alt="图片无法加载">
                            <div class="plus-icon">
                                <router-link :to="'/projects-details/' + item.id">
                                    <span></span>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-projects-box">
                            <img src="../../assets/images/projects-img-2.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <router-link to="/projects-details">
                                    <span></span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-projects-box">
                            <img src="../../assets/images/projects-img-3.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <router-link to="/projects-details">
                                    <span></span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-projects-box">
                            <img src="../../assets/images/projects-img-4.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <router-link to="/projects-details">
                                    <span></span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-projects-box">
                            <img src="../../assets/images/projects-img-5.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <router-link to="/projects-details">
                                    <span></span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-projects-box">
                            <img src="../../assets/images/projects-img-6.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <router-link to="/projects-details">
                                    <span></span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-projects-box">
                            <img src="../../assets/images/projects-img-7.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <router-link to="/projects-details">
                                    <span></span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-projects-box">
                            <img src="../../assets/images/projects-img-8.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <router-link to="/projects-details">
                                    <span></span>
                                </router-link>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>

            <div class="circle-shape1">
                <img src="../../assets/images/projects-shape.png" alt="image">
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'ProjectsContent',
    mounted() {
    this.postData();
  },
    data() {
    return {
      project:[],
    //   imgsrc1:{},
    host:'http://backend.hsturing.com/',
    };
  },
  methods:{
      postData(){
      axios({
      method:"POST",
      url:"http://backend.hsturing.com/getTLSProjectData",
      data:{
        params:{
        },
      },
    }).then((res)=>{
        this.project=res.data.result.presents
        // this.imgsrc1=this.project[0].img1

    });
    },
  }
}
</script>