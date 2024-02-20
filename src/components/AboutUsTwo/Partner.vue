<template>
    <div class="partner-section ptb-110 bg-f2f6f9">
        <div class="container">
            <div class="section-title">
                <h2>Our Valuable Branding Partner</h2>
            </div>
            <div class="partner-slides">
                <carousel
                    :autoplay="5000"
                    :wrap-around="true"
                    :breakpoints="breakpoints"
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="single-partner-item">
                            <div class="partner-image">
                                <img :src="slide.image" alt="image">
                            </div>
                        </div>
                    </slide>

                    <template #addons>
                    </template> 
                </carousel>
            </div>
        </div>

        <div class="dot-shape1"><img src="../../assets/images/shapes/dot-1.png" alt="image"></div>
        <div class="shape-img2"><img src="../../assets/images/shapes/shape-2.svg" alt="image"></div>
        <div class="shape-img4"><img src="../../assets/images/shapes/shape-4.svg" alt="image"></div>
        <div class="shape-img5"><img src="../../assets/images/shapes/shape-5.svg" alt="image"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Partner',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/images/partners/partner-1.png')
            },
            {
                id: 2,
                image: require('../../assets/images/partners/partner-2.png')
            },
            {
                id: 3,
                image: require('../../assets/images/partners/partner-3.png')
            },
            {
                id: 4,
                image: require('../../assets/images/partners/partner-4.png')
            },
            {
                id: 5,
                image: require('../../assets/images/partners/partner-5.png')
            },
            {
                id: 6,
                image: require('../../assets/images/partners/partner-6.png')
            },
            {
                id: 7,
                image: require('../../assets/images/partners/partner-1.png')
            },
            {
                id: 8,
                image: require('../../assets/images/partners/partner-2.png')
            },
            {
                id: 9,
                image: require('../../assets/images/partners/partner-3.png')
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 2,
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 3,
                snapAlign: 'left',
            },
            768: {
                itemsToShow: 4,
                snapAlign: 'left',
            },
            1024: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 5,
                snapAlign: 'left',
            },
        },
    }),
})
</script>