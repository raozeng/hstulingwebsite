<template>
    <div class="main-services-area ptb-110">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-main-services-box">
                        <div class="icon">
                            <i class="flaticon-robot-1"></i>
                        </div>
                        <h3><router-link to="/services-details">Robotic Process Automation</router-link></h3>
                        <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                        <router-link to="/services-details" class="link-btn">Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-main-services-box">
                        <div class="icon">
                            <i class="flaticon-neural"></i>
                        </div>
                        <h3><router-link to="/services-details">Machine Learning</router-link></h3>
                        <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                        <router-link to="/services-details" class="link-btn">Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-main-services-box">
                        <div class="icon">
                            <i class="flaticon-machine-learning"></i>
                        </div>
                        <h3><router-link to="/services-details">Cognitive Engagement</router-link></h3>
                        <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                        <router-link to="/services-details" class="link-btn">Read More</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainServices'
}
</script>