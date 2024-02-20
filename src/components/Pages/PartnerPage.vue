<template>
    <div>
        <NavbarStyleTwo class="navbar-style-two" />
        <PageTitle pageTitle="Partner" />
        <FeaturedCustomers />
        <!-- <Partner /> -->
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import PageTitle from '../Common/PageTitle'
import FeaturedCustomers from '../Common/FeaturedCustomers'
import Partner from '../Common/Partner'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        FeaturedCustomers,
        Partner,
        Footer,
    }
}
</script>
