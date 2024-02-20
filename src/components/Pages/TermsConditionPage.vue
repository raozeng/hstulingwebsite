<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Terms Of Service" />
        <TermsOfServiceContent />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import PageTitle from '../Common/PageTitle'
import TermsOfServiceContent from '../TermsOfService/TermsOfServiceContent'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        TermsOfServiceContent,
        Footer,
    }
}
</script>