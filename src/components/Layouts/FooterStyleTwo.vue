<template>
    <footer class="footer-wrap-area pt-100">
        <div class="container">
            <div class="row">
                <!-- <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget ps-5"> -->
                        <!-- <h3>Services</h3>

                        <ul class="footer-services-list">
                            <li>
                                <router-link to="/services-details">Product Engineering</router-link>
                            </li>
                            <li>
                                <router-link to="/services-details">UX/UI Design</router-link>
                            </li>
                            <li>
                                <router-link to="/services-details">Big Data Analysis</router-link>
                            </li>
                            <li>
                                <router-link to="/services-details">Desktop Applications</router-link>
                            </li>
                            <li>
                                <router-link to="/services-details">Mobile Applications</router-link>
                            </li>
                        </ul> -->
                    <!-- </div>
                </div> -->

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <router-link to="/">
                                <img src="../../assets/images/white-logo.png" alt="image" />
                            </router-link>
                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                        </div>

                        <!-- <ul class="social">
                            <li>
                                <a href="https://facebook.com/" target="_blank">
                                    <i class="flaticon-facebook-letter-logo"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <i class="flaticon-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/" target="_blank">
                                    <i class="flaticon-instagram-logo"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/" target="_blank">
                                    <i class="flaticon-youtube-play-button"></i>
                                </a>
                            </li>
                        </ul> -->
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Quick Links</h3>

                        <ul class="quick-links-list">
              <li>
                <router-link to="/about-one">关于我们</router-link>
              </li>
              <li>
                <router-link to="/services-two">服务领域</router-link>
              </li>
              <li>
                <router-link to="/projects">项目成果</router-link>
              </li>
              <li>
                <router-link to="/blog-one">新闻动态</router-link>
              </li>
              <li>
                <router-link to="/contact">联系我们</router-link>
              </li>
              <!-- <li>
                <router-link to="/contact">Support</router-link>
              </li> -->
              <!-- <li>
                <a href="https://play.google.com/store/apps" target="_blank"
                  >Applications</a
                >
              </li> -->
            </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Contacts</h3>

                        <ul class="footer-contact-list">
                            <li>
                                <span>Address: </span>{{firstcon.address}}
                            </li>
                            <li>
                                <span>Email: </span> {{firstcon.email}}
                                <!-- <a href="mailto:hello@strend.com">hello@strend.com</a> -->
                            </li>
                            <li>
                                <span>Phone: </span> 
                                {{firstcon.telephone}}
                                <!-- <a href="tel:+44587154756">+44 587 154756</a> -->
                            </li>
                            <!-- <li>
                                <span>Fax: </span>
                                <a href="tel:+447854578964">+44 785 4578964</a>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <p>
                            &copy; {{currentYear}}
                            <router-link to="/">图灵学社</router-link>. All Rights Reserved.
                        </p>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <ul>
                            <li>
                                <router-link to="/privacy-policy">Privacy Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/terms-of-service">Terms & Conditions</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>

        <div class="footer-wrap-shape-1">
            <img src="../../assets/images/home-six/footer/shape-1.png" alt="image">
        </div>
        <div class="footer-wrap-shape-2">
            <img src="../../assets/images/home-six/footer/shape-2.png" alt="image">
        </div>
        <div class="footer-wrap-shape-3">
            <img src="../../assets/images/home-six/footer/shape-3.png" alt="image">
        </div>
    </footer>
</template>

<script>
import axios from "axios";

export default {
    name: "FooterStyleTwo",
    mounted(){
        this.postData();
    },
    data() {
        return {
            currentYear: new Date().getFullYear(),
            contact:[],
            firstcon:{},
        };
    },
    methods:{
    postData(){
      axios({
        method:"POST",
        url:"http://backend.hsturing.com/getTLSContactEmailData",
        data:{
          params:{
          },
        },
      }).then((res)=>{
        this.contact=res.data.result.contacts,
        this.firstcon=this.contact[0]
      })
    }
  }
};
</script>