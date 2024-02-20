<template>
    <div>
        <NavbarStyleTwo class="navbar-style-two" />
        <PageTitle pageTitle="About Us" />
        <EngagingNewAudiences />
        <!-- <WeOfferProfessionalSolutions /> -->
        <MeetOurTeam />
        <FeaturedCustomers />
        <FeedbackSlider />
        <OurPricingPlan />
        <!-- <StartYourFreeTrial /> -->
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import PageTitle from '../Common/PageTitle'
import EngagingNewAudiences from '../AboutUs/EngagingNewAudiences'
// import WeOfferProfessionalSolutions from '../AboutUs/WeOfferProfessionalSolutions'
import MeetOurTeam from '../AboutUs/MeetOurTeam'
import FeaturedCustomers from '../Common/FeaturedCustomers'
import FeedbackSlider from '../Common/FeedbackSlider'
import OurPricingPlan from '../Common/OurPricingPlan'
// import StartYourFreeTrial from '../AboutUs/StartYourFreeTrial'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        EngagingNewAudiences,
        // WeOfferProfessionalSolutions,
        MeetOurTeam,
        FeaturedCustomers,
        // FeedbackSlider,
        // OurPricingPlan,
        // StartYourFreeTrial,
        Footer,
    }
}
</script>
