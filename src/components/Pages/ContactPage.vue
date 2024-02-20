<template>
    <div>
        <NavbarStyleTwo class="navbar-style-two" />
        <PageTitle pageTitle="Contact" />
        <ContactContent />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import PageTitle from '../Common/PageTitle'
import ContactContent from '../Contact/ContactContent'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        ContactContent,
        Footer,
    }
}
</script>