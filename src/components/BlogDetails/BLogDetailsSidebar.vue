<template>
  <div class="widget-area" id="secondary">
    <div class="widget widget_search">
      <form class="search-form">
        <label>
          <span class="screen-reader-text">Search for:</span>
          <input type="search" class="search-field" placeholder="Search..." />
        </label>
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>

    <div class="widget widget-posts-thumb">
      <h3 class="widget-title">Popular Posts</h3>

      <div class="item">
        <router-link to="/blog-details" class="thumb">
          <span class="fullimage cover bg1" role="img"></span>
        </router-link>
        <div class="info">
          <time datetime="2019-06-30">June 10, 2022</time>
          <h4 class="title usmall">
            <router-link to="/blog-details"
              >Making Peace With The Feast Or Famine Of Freelancing</router-link
            >
          </h4>
        </div>

        <div class="clear"></div>
      </div>

      <div class="item">
        <router-link to="/blog-details" class="thumb">
          <span class="fullimage cover bg2" role="img"></span>
        </router-link>
        <div class="info">
          <time datetime="2019-06-30">June 21, 2022</time>
          <h4 class="title usmall">
            <router-link to="/blog-details">I Used The Web For A Day On A 50 MB Budget</router-link>
          </h4>
        </div>

        <div class="clear"></div>
      </div>

      <div class="item">
        <router-link to="/blog-details" class="thumb">
          <span class="fullimage cover bg3" role="img"></span>
        </router-link>
        <div class="info">
          <time datetime="2019-06-30">June 30, 2022</time>
          <h4 class="title usmall">
            <router-link to="/blog-details">How To Create A Responsive Popup Gallery?</router-link>
          </h4>
        </div>

        <div class="clear"></div>
      </div>
    </div>

    <div class="widget widget_categories">
      <h3 class="widget-title">Categories</h3>

      <ul>
        <li><router-link to="/blog-one">Business</router-link></li>
        <li><router-link to="/blog-one">Privacy</router-link></li>
        <li><router-link to="/blog-one">Technology</router-link></li>
        <li><router-link to="/blog-one">Tips</router-link></li>
        <li><router-link to="/blog-one">Uncategorized</router-link></li>
      </ul>
    </div>

    <div class="widget widget_tag_cloud">
      <h3 class="widget-title">Tags</h3>

      <div class="tagcloud">
        <router-link to="/blog-one">IT <span class="tag-link-count"> (3)</span></router-link>
        <router-link to="/blog-one">Strend <span class="tag-link-count"> (3)</span></router-link>
        <router-link to="/blog-one">Games <span class="tag-link-count"> (2)</span></router-link>
        <router-link to="/blog-one">Fashion <span class="tag-link-count"> (2)</span></router-link>
        <router-link to="/blog-one">Travel <span class="tag-link-count"> (1)</span></router-link>
        <router-link to="/blog-one">Smart <span class="tag-link-count"> (1)</span></router-link>
        <router-link to="/blog-one">Marketing <span class="tag-link-count"> (1)</span></router-link>
        <router-link to="/blog-one">Tips <span class="tag-link-count"> (2)</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'BLogDetailsSidebar',
    mounted() {
      this.postData()
    },
    data() {
      return {}
    },
    methods: {
      postData() {
        axios({
          method: 'POST',
          url: 'http://backend.hsturing.com/getTLSNewsData',
          data: {
            params: {
              // id:this.$route.params.id
            },
          },
        }).then((res) => {
          console.log(res)
        })
      },
    },
  }
</script>
