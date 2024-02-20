<template>
    <div>
        <Navbar class="navbar-area-with-position-relative with-white-color" />
        <MainBanner />
        <Featured />
        <Funfacts />
        <About class="pt-100" />
        <ProfessionalSolutions />
        <ComputerVision />
        <BusinessSolution />
        <EasyPricingPlan />
        <Team />
        <Blog />
        <Subscribe />
        <FooterStyleTwo />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import MainBanner from '../HomeEight/MainBanner'
import Featured from '../HomeEight/Featured'
import Funfacts from '../Common/Funfacts'
import About from '../Common/About'
import ProfessionalSolutions from '../HomeEight/ProfessionalSolutions'
import ComputerVision from '../HomeEight/ComputerVision'
import BusinessSolution from '../HomeEight/BusinessSolution'
import EasyPricingPlan from '../HomeEight/EasyPricingPlan'
import Team from '../HomeEight/Team'
import Blog from '../Common/Blog'
import Subscribe from '../Common/Subscribe'
import FooterStyleTwo from '../Layouts/FooterStyleTwo'

export default {
    components: {
        Navbar,
        MainBanner,
        Featured,
        Funfacts,
        About,
        ProfessionalSolutions,
        ComputerVision,
        BusinessSolution,
        EasyPricingPlan,
        Team,
        Blog,
        Subscribe,
        FooterStyleTwo,
    }
}
</script>
