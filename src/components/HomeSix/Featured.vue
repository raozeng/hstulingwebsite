<template>
  <div class="top-featured-area pt-100 pb-70">
    <div class="container">
      <div class="row justify-content-center">
        <!-- <div class="col-lg-3 col-sm-6" >
                    <div class="top-featured-content">
                        <h2>指导老师</h2>
                        <p>
                            我们拥有一支技术精湛的开发团队，我们的团队成员来自不同领域，包括软件开发、设计等。具有深厚的专业知识和广泛的行业经验。
                        </p>

                        <div class="featured-btn">
                            <router-link to="/contact" class="btn btn-primary">我在第二页Get Started Free</router-link>
                        </div>
                    </div>
                </div> -->

        <div class="col-lg-3 col-sm-6" v-for="(item, index) in people" :key="index">
          <div class="top-featured-card text-center">
            <div class="image-icon">
              <img
                :src="this.host + item.img"
                alt="icon"
                style="height: 100px; width: 100px; border-radius: 50%; z-index: 1"
              />
            </div>
            <h3>
              <!-- <router-link to="/services-details"></router-link> -->
              {{ item.name }}
            </h3>
            <router-link :to="'/services-details/' + item.id" class="learn-btn"
              >了解更多</router-link
            >
            <!-- const User = {
                          template: '<div>User</div>',
                        }
                        const routes = [
                          // 动态字段以冒号开始
                          { path: '/users/:id', component: User },
                        ] -->
            <!-- <router-link :to="{name:'services-details',params:{id:item.id}}"></router-link> -->
          </div>
        </div>

        <!-- <div class="col-lg-3 col-sm-6">
                    <div class="top-featured-card text-center">
                        <div class="image-icon">
                            <img src="../../assets/images/home-six/featured/icon2.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">我在第二页Machine Learning</router-link>
                            {{secondpeople.name}}
                        </h3>
                        <router-link to="/services-details" class="learn-btn">了解更多</router-link>
                    </div>
                </div> -->

        <!-- <div class="col-lg-3 col-sm-6">
                    <div class="top-featured-card text-center">
                        <div class="image-icon">
                            <img src="../../assets/images/home-six/featured/icon3.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">我在第二页Cognitive Engagement</router-link>
                            {{thredpeople.name}}
                        </h3>
                        <router-link to="/services-details" class="learn-btn">了解更多</router-link>
                    </div>
                </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Featured',
    mounted() {
      this.postData()
    },
    data() {
      return {
        people: [],
        // firstpeople:{},
        is_representative: {},
        host: 'http://backend.hsturing.com/',
      }
    },
    methods: {
      postData() {
        axios({
          method: 'POST',
          url: 'http://backend.hsturing.com/getTLSIndexData',
          data: {
            params: {
              is_representative: 1,
            },
          },
        }).then((res) => {
          this.people = res.data.result.Peoples
          // this.firstpeople=this.people[0]
        })
      },
    },
  }
</script>
