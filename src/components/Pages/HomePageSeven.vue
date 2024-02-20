<template>
    <div>
        <Topbar />
        <Navbar class="navbar-area-with-position-relative" />
        <MainBanner />
        <Funfacts />
        <Featured />
        <About />
        <BusinessSolution />
        <ProfessionalSolutions />
        <Testimonials />
        <EasyPricingPlan />
        <Blog />
        <Subscribe />
        <FooterStyleTwo />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import MainBanner from '../HomeSeven/MainBanner'
import Funfacts from '../HomeSeven/Funfacts'
import Featured from '../HomeSeven/Featured'
import About from '../HomeSeven/About'
import BusinessSolution from '../HomeSeven/BusinessSolution'
import ProfessionalSolutions from '../HomeSeven/ProfessionalSolutions'
import Testimonials from '../HomeSeven/Testimonials'
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
        BusinessSolution,
        ProfessionalSolutions,
        Testimonials,
        EasyPricingPlan,
        Blog,
        Subscribe,
        FooterStyleTwo,
    }
}
</script>
