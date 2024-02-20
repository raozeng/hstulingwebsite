<template>
    <div class="team-area ptb-110">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6"  v-for="(item,index) in people" :key="index">
                    <div class="single-team-box" >
                        <div class="image">
                            <img :src="host + item.img" alt="team">
                            <!-- <img :src="item.img" alt="team"> -->
                            <!-- <div class="social">
                                <a href="https://facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="https://instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                            </div> -->
                        </div>

                        <div class="content">
                            <h3>{{item.name}}</h3>
                            <span>{{item.posts}}</span>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-12 col-md-12">
                            <div class="pagination-area">
                                <router-link to="/team" class="prev page-numbers"><i class="fas fa-angle-double-left"></i></router-link>
                                <router-link to="/team" class="page-numbers">1</router-link> -->
                                <!-- <span class="page-numbers current" aria-current="page">2</span> -->
                                <!-- <router-link to="/team" class="page-numbers">2</router-link>
                                <router-link to="/team" class="page-numbers">3</router-link>
                                <router-link to="/team" class="page-numbers">4</router-link>
                                <router-link to="/team" class="next page-numbers"><i class="fas fa-angle-double-right"></i></router-link>
                            </div>
                        </div> -->

                
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'TeamCard',
    mounted() {
    this.postData();
  },
  data() {
    return {
        people:[],
        // firstpeople:{},
        host:'http://backend.hsturing.com/'
    };
  },
  methods:{
      postData(){
      axios({
      method:"POST",
      url:"http://backend.hsturing.com/getTLSPeoplesData",
      data:{
        params:{
            // page_num:2
        },
      },
    }).then((res)=>{
      this.people=res.data.result.peoples
    //   this.firstpeople=this.people[0];
    });
    },
  }
}
</script>