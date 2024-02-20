<template>
    <div>
        <NavbarStyleTwo class="navbar-style-two" />
        <PageTitle pageTitle="Pricing" />
        <OurPricingPlan />
        <OurPricingPlanTwo />
        <OurPricingPlanThree />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import PageTitle from '../Common/PageTitle'
import OurPricingPlan from '../Pricing/OurPricingPlan'
import OurPricingPlanTwo from '../Pricing/OurPricingPlanTwo'
import OurPricingPlanThree from '../Pricing/OurPricingPlanThree'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        OurPricingPlan,
        OurPricingPlanTwo,
        OurPricingPlanThree,
        Footer,
    }
}
</script>
