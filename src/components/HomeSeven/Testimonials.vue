<template>
    <div class="unique-testimonials-section ptb-110">
        <div class="container">
            <div class="unique-testimonials-slides">
                <carousel
                    :autoplay="7000"
                    :wrap-around="true"
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="unique-testimonials-box">
                            <span class="sub-title">{{slide.title}}</span>
                            <p>{{slide.desc}}</p>
                            <div class="client-info">
                                <h3>{{slide.name}}</h3>
                                <span>{{slide.position}}</span>

                                <div class="image">
                                    <img :src="slide.image" class="rounded-circle" alt="image">
                                </div>
                            </div>

                            <div class="testimonials-shape-1">
                                <img src="../../assets/images/home-seven/testimonials-shape-1.png" alt="image">
                            </div>
                            <div class="testimonials-shape-2">
                                <img src="../../assets/images/home-seven/testimonials-shape-2.png" alt="image">
                            </div>
                        </div>
                    </slide>

                    <template #addons>
                        <Pagination />
                    </template> 
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Testimonials',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                title: 'EXCILENT WORK DONE BY STREND!',
                desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla faucibus pulvinar iaculis et eu arcu mauris euismod duis diam nunc ultrices blandit montes quis id erat diam non rhoncus cras elit.',
                name: 'Thomas Adbadon',
                position: 'Global Head of Operations - Techxol LTD.',
                image: require('../../assets/images/author-1.jpg')
            },
            {
                id: 2,
                title: 'EXCILENT WORK DONE BY STREND!',
                desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla faucibus pulvinar iaculis et eu arcu mauris euismod duis diam nunc ultrices blandit montes quis id erat diam non rhoncus cras elit.',
                name: 'John Smith',
                position: 'Web Developer',
                image: require('../../assets/images/author-2.jpg')
            },
            {
                id: 3,
                title: 'EXCILENT WORK DONE BY STREND!',
                desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla faucibus pulvinar iaculis et eu arcu mauris euismod duis diam nunc ultrices blandit montes quis id erat diam non rhoncus cras elit.',
                name: 'Camile Taylor',
                position: 'Desginer',
                image: require('../../assets/images/author-3.jpg')
            },
        ],
    }),
})
</script>