<template>
  <div>
    <NavbarStyleTwo class="navbar-style-two" />
    <PageTitle pageTitle="Projects" />
    <ProjectsContent />
    <Footer />
  </div>
</template>

<script>
  import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
  import PageTitle from '../Common/PageTitle'
  import ProjectsContent from '../Projects/ProjectsContent'
  import Footer from '../Layouts/Footer'

  export default {
    components: {
      NavbarStyleTwo,
      PageTitle,
      ProjectsContent,
      Footer,
    },
  }
</script>
