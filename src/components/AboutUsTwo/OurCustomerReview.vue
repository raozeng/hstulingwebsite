<template>
    <div class="testimonials-section ptb-110">
        <div class="container">
            <div class="section-title">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="content">
                            <h2>Our Customer Review</h2>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <div class="icon">
                            <i class="flaticon-chat"></i>
                        </div>
                    </div>
                </div>
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
                        <div class="single-testimonials-box">
                            <p>{{slide.description}}</p>
                            <div class="client-info">
                                <h3>{{slide.name}}</h3>
                                <span>{{slide.position}}</span>
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
    name: 'OurCustomerReview',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour predefined words which dont look.',
                name: 'Filip Luis',
                position: 'Founder & CEO',
            },
            {
                id: 2,
                description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour predefined words which dont look.',
                name: 'Sarah Taylor',
                position: 'Designer',
            },
            {
                id: 3,
                description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour predefined words which dont look.',
                name: 'Meg Lanning',
                position: 'Support',
            },
        ],
    }),
})
</script>