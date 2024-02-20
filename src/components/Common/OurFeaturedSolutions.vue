<template>
    <div class="featured-solutions-area ptb-110">
        <div class="container">
            <div class="section-title">
                <h2>Our Featured Solutions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-featured-solutions-box">
                        <div class="icon">
                            <img src="../../assets/images/icon1.png" alt="image">
                        </div>
                        <h3><router-link to="/services-details">Robotic Automation</router-link></h3>
                        <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                        <router-link to="/services-details" class="learn-more-btn">Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-featured-solutions-box">
                        <div class="icon">
                            <img src="../../assets/images/icon2.png" alt="image">
                        </div>
                        <h3><router-link to="/services-details">Machine Learning</router-link></h3>
                        <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                        <router-link to="/services-details" class="learn-more-btn">Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-featured-solutions-box">
                        <div class="icon">
                            <img src="../../assets/images/icon3.png" alt="image">
                        </div>
                        <h3><router-link to="/services-details">Cognitive Engagement</router-link></h3>
                        <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                        <router-link to="/services-details" class="learn-more-btn">Read More</router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="shape-img2"><img src="../../assets/images/shapes/shape-2.svg" alt="image"></div>
        <div class="shape-img3"><img src="../../assets/images/shapes/shape-3.png" alt="image"></div>
        <div class="shape-img5"><img src="../../assets/images/shapes/shape-5.svg" alt="image"></div>
        <div class="dot-shape1"><img src="../../assets/images/shapes/dot-1.png" alt="image"></div>
        <div class="dot-shape2"><img src="../../assets/images/shapes/dot-3.png" alt="image"></div>
    </div>
</template>

<script>

export default {
    name: 'OurFeaturedSolutions'
}
</script>