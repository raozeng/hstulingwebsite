<template>
    <div>
        <NavbarStyleTwo class="navbar-style-two" />
        <PageTitle pageTitle="Services" />
        <ServicesContentTwo />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import PageTitle from '../Common/PageTitle'
import ServicesContentTwo from '../ServicesThree/ServicesContentTwo'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        ServicesContentTwo,
        Footer,
    }
}
</script>
