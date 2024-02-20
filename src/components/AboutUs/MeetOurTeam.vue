<template>
    <div class="team-area ptb-110">
        <div class="container">
            <div class="section-title">
                <h2>Meet Our Team</h2>
            </div>

            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6" v-for="(item,index) in people" :key="index">
                    <div class="single-team-box">
                        <div class="image">
                            <img src="../../assets/images/team/team-1.jpg" alt="team">

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

                <!-- <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team-box">
                        <div class="image">
                            <img src="../../assets/images/team/team-2.jpg" alt="team">

                            <div class="social">
                                <a href="https://facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="https://instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>

                        <div class="content">
                            <h3>Lucy Eva</h3>
                            <span>Manager</span>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team-box">
                        <div class="image">
                            <img src="../../assets/images/team/team-3.jpg" alt="team">

                            <div class="social">
                                <a href="https://facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="https://instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>

                        <div class="content">
                            <h3>Steven Smith</h3>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team-box">
                        <div class="image">
                            <img src="../../assets/images/team/team-4.jpg" alt="team">

                            <div class="social">
                                <a href="https://facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="https://instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>

                        <div class="content">
                            <h3>Sarah Taylor</h3>
                            <span>Desginer</span>
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
    name: 'MeetOurTeam',
    mounted() {
    this.postData();
  },
  data(){
      return{
          people:[],
        //   firstpeople:{},
      };
  },
  methods:{
      postData(){
      axios({
      method:"POST",
      url:"http://backend.hsturing.com/getTLSAboutUsData",
      data:{
        params:{
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