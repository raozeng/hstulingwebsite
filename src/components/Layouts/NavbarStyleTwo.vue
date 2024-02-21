<template>
  <div :class="['navbar-area', { 'is-sticky': isSticky }]">
    <div class="strend-nav">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link class="navbar-brand" to="/">
            <img src="../../assets/logo-write.png" class="main-logo tuling-logo" alt="logo" />
            <img src="../../assets/logo.png" class="optional-logo tuling-logo" alt="logo" />
          </router-link>

          <div
            class="navbar-toggler"
            @click="active = !active"
            :aria-pressed="active ? 'true' : 'false'"
            v-bind:class="{ active: button_active_state }"
            v-on:click="button_active_state = !button_active_state"
          >
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </div>

          <div class="collapse navbar-collapse" :class="{ show: active }">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">首页</router-link>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">关于我们 <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/about-one" class="nav-link">关于我们</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/team" class="nav-link">团队成员</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/partner" class="nav-link">合作对象</router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/faq" class="nav-link">常见问题</router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link to="/services-two" class="nav-link">服务领域</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/projects" class="nav-link">项目成果</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/blog-one" class="nav-link">新闻动态</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/contact" class="nav-link">联系我们</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavbarStyleTwo',
    data() {
      return {
        isSticky: false,
        isSearch: false,
        active: false,
        button_active_state: false,
        active_state: false,
      }
    },

    mounted() {
      const that = this
      window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY
        if (scrollPos >= 100) {
          that.isSticky = true
        } else {
          that.isSticky = false
        }
      })
    },

    computed: {
      shoppingCart() {
        return this.$store.state.cart
      },
    },

    methods: {
      isSearchMethod(isSearch) {
        console.log(this.isSearch)
        return (this.isSearch = !isSearch)
      },
    },
  }
</script>

<style scoped lang="scss">
  $main-color: #24589a;
  .tuling-logo {
    width: 200px;
  }
  .active-state {
    a {
      color: $main-color;
    }
  }
</style>
