<template>
    <div>
        <NavbarStyleTwo class="navbar-style-two" />
        <PageTitle pageTitle="Privacy Policy" />
        <PrivacyPolicyContent />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import PageTitle from '../Common/PageTitle'
import PrivacyPolicyContent from '../PrivacyPolicy/PrivacyPolicyContent'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        PrivacyPolicyContent,
        Footer,
    }
}
</script>