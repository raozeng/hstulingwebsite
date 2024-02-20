<template>
    <div>
        <div class="webinar-area">
            <div class="row m-0">
                <div class="col-lg-6 p-0">
                    <div class="webinar-content">
                        <h2>Check out our Latest Webinar</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                        <p>There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by
                        injected humour, or randomised words which don't look even
                        slightly believable. If you are going to use a passage.</p>
                        <router-link to="/services-details" class="btn btn-primary">
                            Watch More
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="webinar-video-image">
                        <img src="../../assets/images/woman.jpg" alt="image" />
                        <div
                            class="video-btn"
                            v-on:click="isPopupMethod(isPopup)"
                            style="cursor: pointer"
                        >
                            <i class="flaticon-play-button"></i>
                        </div>
                    </div>
                </div>
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
    name: 'CheckOutWebinar',
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
