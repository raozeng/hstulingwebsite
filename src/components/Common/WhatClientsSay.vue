<template>
    <div class="testimonials-area ptb-110">
        <div class="container">
            <div class="section-title">
                <h2>What Clients Say About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="testimonials-slides">
                <carousel
                    :autoplay="5000"
                    :wrap-around="true"
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="single-testimonials-item">
                            <div class="client-info">
                                <img src="../../assets/images/author-3.jpg" alt="image">
                                <h3>Sarah Taylor</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </slide>
                
                    <template #addons>
                        <Pagination />
                    </template> 
                </carousel>
            </div>
        </div>
        
        <div class="shape-img1"><img src="../../assets/images/shapes/shape-1.png" alt="image"></div>
        <div class="shape-img3"><img src="../../assets/images/shapes/shape-3.png" alt="image"></div>
        <div class="shape-img2"><img src="../../assets/images/shapes/shape-2.svg" alt="image"></div>
        <div class="shape-img5"><img src="../../assets/images/shapes/shape-5.svg" alt="image"></div>
        <div class="shape-img4"><img src="../../assets/images/shapes/shape-4.svg" alt="image"></div>
        <div class="dot-shape1"><img src="../../assets/images/shapes/dot-1.png" alt="image"></div>
        <div class="dot-shape2"><img src="../../assets/images/shapes/dot-3.png" alt="image"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'WhatClientsSay',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/images/author-3.jpg'),
                name: 'Sarah Taylor',
                position: 'CEO at Envato',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!',
            },
            {
                id: 2,
                image: require('../../assets/images/author-1.jpg'),
                name: 'Steven Smith',
                position: 'CEO at Envato',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!',
            },
            {
                id: 3,
                image: require('../../assets/images/author-2.jpg'),
                name: 'James Eva',
                position: 'CEO at Envato',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!',
            },
        ],
    }),
})
</script>