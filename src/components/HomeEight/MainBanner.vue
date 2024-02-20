<template>
    <div>
        <div class="ml-main-banner-area with-linear-gradient-color">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="ml-main-banner-content with-white-color-text">
                            <span class="sub-title">Analysis & Deep Machine Learning With <b>Ai</b></span>
                            <h1>AI and Machine <span>Learning</span> Products Creators</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul class="banner-btn">
                                <li>
                                    <router-link to="/contact" class="btn btn-primary">
                                        Get Started Free
                                    </router-link>
                                </li>
                                <li>
                                    <div
                                        class="video-btn"
                                        v-on:click="isPopupMethod(isPopup)"
                                        style="cursor: pointer"
                                    >
                                        <i class="flaticon-play-button"></i> 
                                        Watch Intro Video
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="ml-main-banner-wrap-image">
                            <img src="../../assets/images/home-eight/banner/main.png" alt="image">

                            <div class="circle-shape"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="ai-main-banner-shape4">
                <img src="../../assets/images/home-eight/banner/shape.png" alt="image">
            </div>
        </div>

        <div 
            class="popup-video" 
            v-if="isPopup"
        >
            <div class="d-table">
                <div class="d-table-cell">
                    <div 
                        class="popup-overlay-close"
                        v-on:click="isPopupMethod(isPopup)"
                    >
                        <div class="popup-overlay-close-line"></div>
                        <div class="popup-overlay-close-line"></div>
                    </div>
                    <div class="play-video">
                        <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner',
    data (){
        return {
            isPopup: false,
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
}
</script>