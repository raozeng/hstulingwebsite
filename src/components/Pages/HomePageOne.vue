<template>
    <div>
        <Navbar />
        <MainBanner />
        <EngagingNewAudiences />
        <WeOfferProfessionalSolutions />
        <CheckOutWebinar />
        <FeaturedCustomers />
        <FeedbackSlider />
        <OurPricingPlan />
        <OurRecentStory />
        <StartYourFreeTrial />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import MainBanner from '../HomeOne/MainBanner'
import EngagingNewAudiences from '../HomeOne/EngagingNewAudiences'
import WeOfferProfessionalSolutions from '../HomeOne/WeOfferProfessionalSolutions'
import CheckOutWebinar from '../Common/CheckOutWebinar'
import FeaturedCustomers from '../Common/FeaturedCustomers'
import FeedbackSlider from '../Common/FeedbackSlider'
import OurPricingPlan from '../Common/OurPricingPlan'
import OurRecentStory from '../Common/OurRecentStory'
import StartYourFreeTrial from '../HomeOne/StartYourFreeTrial'
import Footer from '../Layouts/Footer'

export default {
    components: {
        Navbar,
        MainBanner,
        EngagingNewAudiences,
        WeOfferProfessionalSolutions,
        CheckOutWebinar,
        FeaturedCustomers,
        FeedbackSlider,
        OurPricingPlan,
        OurRecentStory,
        StartYourFreeTrial,
        Footer,
    }
}
</script>
