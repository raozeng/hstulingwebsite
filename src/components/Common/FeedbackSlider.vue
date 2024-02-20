<template>
    <!-- <div class="feedback-area">
        <div class="feedback-slides">
            <carousel
                :autoplay="7000"
                :wrap-around="true"
            >
                <slide 
                    v-for="slide in carouselItems" 
                    :key="slide.id"
                >
                    <div class="row m-0">
                        <div class="col-lg-6 col-md-12 p-0">
                            <div class="feedback-item">
                                <p>{{slide.description}}</p>

                                <div class="client-info">
                                    <div class="client-pic">
                                        <img :src="slide.image" alt="image">
                                    </div>
                                    <h3>{{slide.name}}</h3>
                                    <span>{{slide.position}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12 p-0">
                            <div :class="slide.class">
                                <img :src="slide.image" alt="image">
                            </div>
                        </div>
                    </div>
                </slide>
                
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template> 
            </carousel>
        </div>
    </div> -->
    <h1></h1>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'FeedbackSlider',
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour predefined words which dont look.',
                name: 'Filip Luis',
                position: 'Founder & CEO',
                class: 'client-image bg1',
                image: require('../../assets/images/client-1.jpg'),
            },
            {
                id: 2,
                description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour predefined words which dont look.',
                name: 'Sarah Taylor',
                position: 'Designer',
                class: 'client-image bg2',
                image: require('../../assets/images/client-2.jpg'),
            },
            {
                id: 3,
                description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour predefined words which dont look.',
                name: 'Meg Lanning',
                position: 'Support',
                class: 'client-image bg3',
                image: require('../../assets/images/client-3.jpg'),
            },
        ],
    }),
})
</script>