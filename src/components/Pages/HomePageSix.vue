<template>
    <div>
        <Topbar />
        <Navbar class="navbar-area-with-position-relative" />
        <MainBanner />
        <Funfacts />
        <Featured />
        <About />
        <ProfessionalSolutions />
        <ComputerVision />
        <EasyPricingPlan />
        <Blog />
        <Subscribe />
        <FooterStyleTwo />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import MainBanner from '../HomeSix/MainBanner'
import Funfacts from '../Common/Funfacts'
import Featured from '../HomeSix/Featured'
import About from '../Common/About'
import ProfessionalSolutions from '../HomeSix/ProfessionalSolutions'
import ComputerVision from '../HomeSix/ComputerVision'
import EasyPricingPlan from '../Common/EasyPricingPlan'
import Blog from '../Common/Blog'
import Subscribe from '../Common/Subscribe'
import FooterStyleTwo from '../Layouts/FooterStyleTwo'

export default {
    components: {
        Topbar,
        Navbar,
        MainBanner,
        Funfacts,
        Featured,
        About,
        ProfessionalSolutions,
        ComputerVision,
        EasyPricingPlan,
        Blog,
        Subscribe,
        FooterStyleTwo,
    }
}
</script>
