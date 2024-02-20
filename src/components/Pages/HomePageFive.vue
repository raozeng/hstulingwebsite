<template>
    <div>
        <NavbarStyleTwo class="navbar-style-three p-relative" />
        <MainBanner />
        <MainServices />
        <WhyChooseUs />
        <WeOfferProfessionalSolutions />
        <OurCustomerReview />
        <OurLatestWebinar />
        <OurPricingPlan />
        <StartYourFreeTrial />
        <Partner />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import MainBanner from '../HomeFive/MainBanner'
import MainServices from '../HomeFive/MainServices'
import WhyChooseUs from '../HomeFive/WhyChooseUs'
import WeOfferProfessionalSolutions from '../HomeFive/WeOfferProfessionalSolutions'
import OurCustomerReview from '../HomeFive/OurCustomerReview'
import OurLatestWebinar from '../HomeFive/OurLatestWebinar'
import OurPricingPlan from '../HomeFive/OurPricingPlan'
import StartYourFreeTrial from '../HomeFive/StartYourFreeTrial'
import Partner from '../HomeFive/Partner'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        MainBanner,
        MainServices,
        WhyChooseUs,
        WeOfferProfessionalSolutions,
        OurCustomerReview,
        OurLatestWebinar,
        OurPricingPlan,
        StartYourFreeTrial,
        Partner,
        Footer,
    }
}
</script>
