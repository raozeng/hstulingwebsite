<template>
    <div class="ai-services-area with-linear-gradient-optional-color pt-100">
        <div class="container">
            <div class="section-title with-underline-text">
                <h2>We Offer Professional <b>Solutions</b> With Artificial Intelligence</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut eget pellentesque nulla viverr.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-services-card text-center">
                        <div class="image-icon">
                            <img src="../../assets/images/home-six/services/icon1.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">Software Engineers</router-link>
                        </h3>
                        <p>Lorem ipsum dolor consectetur sit amet dipiscing elit sed dosiy eiusmod lorem ipsum dolor.</p>
                        <router-link to="/services-details" class="read-btn">Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-services-card text-center">
                        <div class="image-icon bg-two">
                            <img src="../../assets/images/home-six/services/icon2.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">Data Analysts</router-link>
                        </h3>
                        <p>Lorem ipsum dolor consectetur sit amet dipiscing elit sed dosiy eiusmod lorem ipsum dolor.</p>
                        <router-link to="/services-details" class="read-btn">Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-services-card text-center">
                        <div class="image-icon bg-three">
                            <img src="../../assets/images/home-six/services/icon3.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">Security & Surveillance</router-link>
                        </h3>
                        <p>Lorem ipsum dolor consectetur sit amet dipiscing elit sed dosiy eiusmod lorem ipsum dolor.</p>
                        <router-link to="/services-details" class="read-btn">Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-services-card text-center">
                        <div class="image-icon bg-four">
                            <img src="../../assets/images/home-six/services/icon4.png" alt="icon">
                        </div>
                        <h3>
                            <router-link to="/services-details">Health & Manufacturing</router-link>
                        </h3>
                        <p>Lorem ipsum dolor consectetur sit amet dipiscing elit sed dosiy eiusmod lorem ipsum dolor.</p>
                        <router-link to="/services-details" class="read-btn">Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="ai-all-services-btn">
                        <router-link to="/services-one" class="btn btn-primary">View All Services</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfessionalSolutions'
}
</script>