<template>
    <div>
        <NavbarStyleTwo class="navbar-style-two" />
        <PageTitle pageTitle="Projects Details" />
        <ProjectsDetailsContent />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import PageTitle from '../Common/PageTitle'
import ProjectsDetailsContent from '../ProjectsDetails/ProjectsDetailsContent'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        ProjectsDetailsContent,
        Footer,
    }
}
</script>
