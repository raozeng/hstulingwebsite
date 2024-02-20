<template>
    <div class="top-featured-area pt-100 pb-100">
        <div class="container">
            <div class="section-title with-underline-text">
                <h2>Our Top <b>Featured</b> Solutions Transforming Enterprises With AI</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut eget pellentesque nulla viverr.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-3 col-sm-6">
                    <div class="top-featured-card text-center">
                        <div class="image-icon">
                            <img src="../../assets/images/home-six/featured/icon1.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">Robotic Automation</router-link>
                        </h3>
                        <router-link to="/services-details" class="learn-btn">Learn More</router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="top-featured-card text-center">
                        <div class="image-icon">
                            <img src="../../assets/images/home-six/featured/icon2.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">Machine Learning</router-link>
                        </h3>
                        <router-link to="/services-details" class="learn-btn">Learn More</router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="top-featured-card text-center">
                        <div class="image-icon">
                            <img src="../../assets/images/home-six/featured/icon3.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">Cognitive Engagement</router-link>
                        </h3>
                        <router-link to="/services-details" class="learn-btn">Learn More</router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="top-featured-card text-center">
                        <div class="image-icon">
                            <img src="../../assets/images/home-six/featured/icon4.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">Cognitive Automation</router-link>
                        </h3>
                        <router-link to="/services-details" class="learn-btn">Learn More</router-link>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="top-featured-btn">
                        <router-link to="/contact" class="btn btn-primary">Get Started Free</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Featured'
}
</script>