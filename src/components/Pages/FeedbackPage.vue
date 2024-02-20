<template>
    <div>
        <NavbarStyleTwo class="navbar-style-two" />
        <PageTitle pageTitle="Feedback" />
        <WhatClientsSay />
        <FeedbackSlider />
        <OurCustomerReview />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import PageTitle from '../Common/PageTitle'
import WhatClientsSay from '../Common/WhatClientsSay'
import FeedbackSlider from '../Common/FeedbackSlider'
import OurCustomerReview from '../Feedback/OurCustomerReview'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        WhatClientsSay,
        FeedbackSlider,
        OurCustomerReview,
        Footer,
    }
}
</script>
