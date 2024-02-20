<template>
    <div class="home-slides">
        <carousel
            :autoplay="7000"
            :wrap-around="true"
        >
            <slide 
                v-for="slide in carouselItems" 
                :key="slide.id"
            >
                <div class="main-banner item-bg1">
                    <div class="container">
                        <div class="main-banner-content">
                            <h1>{{slide.heading}}</h1>
                            <p>{{slide.description}}</p>
                            <div class="btn-box">
                                <router-link to="/contact" class="btn btn-primary">Schedule a Demo</router-link>
                                <router-link to="/contact" class="optional-btn">Get Started Free</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>
                
            <template #addons>
                <Navigation />
            </template> 
        </carousel>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'MainBanner',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                class: 'main-banner item-bg1',
                heading: 'World’s Leading Machine Learning Company',
                description: 'ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.',
            },
            {
                id: 2,
                class: 'main-banner item-bg2',
                heading: 'World’s Leading Machine Learning Company',
                description: 'ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.',
            },
        ],
    }),
})
</script>