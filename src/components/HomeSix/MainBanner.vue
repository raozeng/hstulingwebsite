<template>
  <div>
    <div class="ai-main-banner-area">
      <div class="container-fluid">
        <div class="ai-main-banner-content">
          <!-- <template v-for="item in banners">
            <div>{{ item.name }}</div>
          </template> -->

          <!-- <div>{{ firstBanner.name }}</div> -->

          <!-- <div>{{a}}</div>
            <div>{{++a}}</div> -->

          <h1>
            图灵学社带您科技梦想起航
            <!-- {{ resulty.jsonrpc }}
            {{ a }} -->
          </h1>
          <p>编织代码，探索未知，追逐梦想，创新闪耀，图灵社与您一起开启科技之路</p>
          <ul class="banner-btn">
            <li>
              <router-link to="/contact" class="btn btn-primary">加入我们</router-link>
            </li>
            <!-- <li>
              <div
                class="video-btn"
                v-on:click="isPopupMethod(isPopup)"
                style="cursor: pointer"
              >
                <i class="flaticon-play-button"></i>
                Watch Intro Video
              </div>
            </li> -->
          </ul>
        </div>
      </div>

      <div class="ai-main-banner-image">
        <img src="../../assets/images/home-six/banner/main1.png" alt="image" />
        <div class="circle-shape"></div>
      </div>
      <div class="ai-main-banner-image right-image">
        <img src="../../assets/images/home-six/banner/main2.png" alt="image" />
        <div class="circle-shape"></div>
      </div>

      <div class="ai-main-banner-shape-1">
        <img src="../../assets/images/home-six/banner/shape-1.png" alt="image" />
      </div>
      <div class="ai-main-banner-shape-2">
        <img src="../../assets/images/home-six/banner/shape-2.png" alt="image" />
      </div>
      <div class="ai-main-banner-shape-3">
        <img src="../../assets/images/home-six/banner/shape-2.png" alt="image" />
      </div>
    </div>

    <div class="popup-video" v-if="isPopup">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="popup-overlay-close" v-on:click="isPopupMethod(isPopup)">
            <div class="popup-overlay-close-line"></div>
            <div class="popup-overlay-close-line"></div>
          </div>
          <div class="play-video">
            <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'MainBanner',
    mounted() {
      this.postData()
    },
    data() {
      return {
        isPopup: false,
        resulty: '',
        firstBanner: {},
        banners: [],
      }
    },
    methods: {
      isPopupMethod(isPopup) {
        return (this.isPopup = !isPopup)
      },
      postData() {
        axios({
          method: 'POST',
          url: 'http://backend.hsturing.com/getTLSIndexData',
          data: {
            params: {},
          },
        }).then((res) => {
          this.resulty = res.data.result
          // this.banners = res.data.result.banners;
          // this.firstBanner = this.banners[0]
          // console.log(res);
          // .data.result.banners
        })
      },
    },
  }
</script>
