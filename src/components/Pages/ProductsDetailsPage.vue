<template>
    <div>
        <NavbarStyleTwo class="navbar-style-two" />
        <PageTitle pageTitle="Product Details" />
        <ProductDetailsContent />
        <RelatedProducts />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import PageTitle from '../Common/PageTitle'
import ProductDetailsContent from '../ProductDetails/ProductDetailsContent'
import RelatedProducts from '../ProductDetails/RelatedProducts'
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        ProductDetailsContent,
        RelatedProducts,
        Footer,
    },
}
</script>
