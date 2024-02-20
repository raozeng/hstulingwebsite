<template>
    <div class="projects-area pt-0 ptb-110">
        <div class="container">
            <div class="section-title">
                <h2>Proud Projects That Make Us Stand Out</h2>
            </div>
        </div>

        <div class="container-fluid">
            <div class="projects-slides">
                <carousel
                    :autoplay="5000"
                    :wrap-around="true"
                    :breakpoints="breakpoints"
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="single-projects-box">
                            <img :src="slide.image" alt="image">
                        
                            <div class="plus-icon">
                                <router-link :to="slide.link">
                                    <span></span>
                                </router-link>
                            </div>
                        </div>
                    </slide>
                
                    <template #addons>
                        <navigation>
                            <template #next>
                                <span><i class="fas fa-arrow-right"></i></span>
                            </template>
                            <template #prev>
                                <span><i class="fas fa-arrow-left"></i></span>
                            </template>
                        </navigation>
                    </template> 
                </carousel>
            </div>
        </div>

        <div class="circle-shape1"><img src="../../assets/images/projects-shape.png" alt="image"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'ProudProjects',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/images/projects-img-1.jpg'),
                link: '/projects-details'
            },
            {
                id: 2,
                image: require('../../assets/images/projects-img-2.jpg'),
                link: '/projects-details'
            },
            {
                id: 3,
                image: require('../../assets/images/projects-img-3.jpg'),
                link: '/projects-details'
            },
            {
                id: 4,
                image: require('../../assets/images/projects-img-4.jpg'),
                link: '/projects-details'
            },
            {
                id: 5,
                image: require('../../assets/images/projects-img-5.jpg'),
                link: '/projects-details'
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 2,
                snapAlign: 'left',
            },
            768: {
                itemsToShow: 2,
                snapAlign: 'left',
            },
            1024: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 4,
                snapAlign: 'left',
            },
        },
    }),
})
</script>