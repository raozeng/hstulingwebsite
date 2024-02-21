<!--
 * @Author: August_rush
 * @Date: 2024-02-20 16:43:29
 * @LastEditors: August_rush 864011713@qq.com
 * @LastEditTime: 2024-02-20 20:30:42
 * @FilePath: \hsturingwebsite\src\components\Pages\HomePageSix.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <!-- <Topbar /> -->
    <Navbar class="navbar-area-with-position-relative" />
    <MainBanner />
    <Funfacts />
    <Featured />
    <About />
    <ProfessionalSolutions />
    <ComputerVision />
    <EasyPricingPlan />
    <Blog />
    <Subscribe />
    <FooterStyleTwo />
  </div>
</template>

<script>
  import Topbar from '../Layouts/Topbar'
  import Navbar from '../Layouts/Navbar'
  import MainBanner from '../HomeSix/MainBanner'
  import Funfacts from '../Common/Funfacts'
  import Featured from '../HomeSix/Featured'
  import About from '../Common/About'
  import ProfessionalSolutions from '../HomeSix/ProfessionalSolutions'
  import ComputerVision from '../HomeSix/ComputerVision'
  import EasyPricingPlan from '../Common/EasyPricingPlan'
  import Blog from '../Common/Blog'
  import Subscribe from '../Common/Subscribe'
  import FooterStyleTwo from '../Layouts/FooterStyleTwo'

  export default {
    components: {
      Topbar,
      Navbar,
      MainBanner,
      Funfacts,
      Featured,
      About,
      ProfessionalSolutions,
      ComputerVision,
      EasyPricingPlan,
      Blog,
      Subscribe,
      FooterStyleTwo,
    },
  }
</script>
