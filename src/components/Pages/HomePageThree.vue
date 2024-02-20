<template>
    <div>
        <Navbar class="navbar-style-four" />
        <MainBanner />
        <OurFeaturedSolutions />
        <EngagingNewAudiences />
        <WeOfferProfessionalSolutions />
        <CompletedProjects />
        <ProudProjects />
        <OurPricingPlanTwo />
        <WhatClientsSay />
        <OurRecentStory />
        <StartYourFreeTrial />
        <Partner />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import MainBanner from '../HomeThree/MainBanner'
import OurFeaturedSolutions from '../Common/OurFeaturedSolutions'
import EngagingNewAudiences from '../Common/EngagingNewAudiences'
import WeOfferProfessionalSolutions from '../Common/WeOfferProfessionalSolutions'
import CompletedProjects from '../Common/CompletedProjects'
import ProudProjects from '../Common/ProudProjects'
import OurPricingPlanTwo from '../Common/OurPricingPlanTwo'
import WhatClientsSay from '../Common/WhatClientsSay'
import OurRecentStory from '../Common/OurRecentStory'
import StartYourFreeTrial from '../Common/StartYourFreeTrial'
import Partner from '../Common/Partner'
import Footer from '../Layouts/Footer'

export default {
    components: { 
        Navbar,
        MainBanner,
        OurFeaturedSolutions,
        EngagingNewAudiences,
        WeOfferProfessionalSolutions,
        CompletedProjects,
        ProudProjects,
        OurPricingPlanTwo,
        WhatClientsSay,
        OurRecentStory,
        StartYourFreeTrial,
        Partner,
        Footer,
    }
}
</script>
