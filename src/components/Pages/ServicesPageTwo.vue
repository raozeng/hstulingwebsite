<!--
 * @Author: August_rush
 * @Date: 2024-02-20 16:43:29
 * @LastEditors: August_rush 864011713@qq.com
 * @LastEditTime: 2024-02-20 21:36:17
 * @FilePath: \hsturingwebsite\src\components\Pages\ServicesPageTwo.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <NavbarStyleTwo class="navbar-style-two" />
    <PageTitle pageTitle="Services" />
    <WeOfferProfessionalSolutions />
    <Footer />
  </div>
</template>

<script>
  import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
  import PageTitle from '../Common/PageTitle'
  import WeOfferProfessionalSolutions from '../ServicesTwo/WeOfferProfessionalSolutions'
  import Footer from '../Layouts/Footer'

  export default {
    components: {
      NavbarStyleTwo,
      PageTitle,
      WeOfferProfessionalSolutions,
      Footer,
    },
  }
</script>
