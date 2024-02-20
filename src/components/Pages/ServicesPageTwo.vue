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
    }
}
</script>
