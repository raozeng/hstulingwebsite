<template>
  <div class="main-banner">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container-fluid">
          <div class="main-banner-content">
            <h1>World’s Leading Machine Learning Company</h1>
            <p>ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.</p>
            <div class="btn-box">
              <a href="/contact" class="btn btn-primary">Schedule a Demo</a>
              <router-link to="/contact" class="optional-btn">Get Started Free</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="featured-services-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-featured-services-box">
              <div class="icon">
                <i class="flaticon-robot"></i>
              </div>

              <h3>
                <router-link to="/services-details">Robotic Process Automation</router-link>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-featured-services-box active">
              <div class="icon">
                <i class="flaticon-artificial-intelligence"></i>
              </div>

              <h3>
                <router-link to="/services-details">Cognitive Automation</router-link>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div class="single-featured-services-box">
              <div class="icon">
                <i class="flaticon-machine-learning"></i>
              </div>

              <h3>
                <router-link to="/services-details">Cognitive Engagement</router-link>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner"
};
</script>