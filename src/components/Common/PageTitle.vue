<template>
    <div class="page-title-area item-bg1">
        <div class="container">
            <div class="page-title-content">
                <!-- <h2>{{pageTitle}}</h2> -->
                <!-- <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li>{{pageTitle}}</li>
                </ul> -->
            </div>
        </div>

        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PageTitle',
    props: ['pageTitle']
}
</script>