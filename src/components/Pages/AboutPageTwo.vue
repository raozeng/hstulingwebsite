<template>
    <div>
        <NavbarStyleTwo class="navbar-style-two" />
        <PageTitle pageTitle="About Us" />
        <AboutContent />
        <WeOfferProfessionalSolutions />
        <MeetOurTeam />
        <Partner />
        <OurCustomerReview />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import PageTitle from '../Common/PageTitle'
import AboutContent from '../AboutUsTwo/AboutContent'
import WeOfferProfessionalSolutions from '../AboutUsTwo/WeOfferProfessionalSolutions'
import MeetOurTeam from '../AboutUsTwo/MeetOurTeam'
import Partner from '../AboutUsTwo/Partner'
import OurCustomerReview from '../AboutUsTwo/OurCustomerReview'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        AboutContent,
        WeOfferProfessionalSolutions,
        MeetOurTeam,
        Partner,
        OurCustomerReview,
        Footer,
    }
}
</script>
