<template>
    <div class="ai-subscribe-area ptb-100">
        <div class="container">
            <div class="ai-subscribe-content">
                <h5>图灵社是你获取信息，提升能力的理想平台。<br>如果你有任何问题、合作意向，请随时联系我们。<br>感谢您的支持与关注！</h5>
                <br>
                <router-link to="/contact" class="btn btn-primary"
                    >If you are interested, please contact us</router-link>

                <!-- <form class="newsletter-form">
                    <input type="email" class="input-newsletter" v-model="form.name" placeholder="Enter your email" name="EMAIL" required autocomplete="off">

                    <button type="submit">Subscribe</button>
                    <div class="newsletter-checkbox-btn">
                        <input class="inp-cbx" id="cbx" type="checkbox">
                        <label class="cbx" for="cbx">
                            <span>
                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                            <span>I agree that submitted data is being collected stored.</span>
                        </label>
                    </div>
                </form> -->
            </div>
        </div>

        <div class="ai-subscribe-shape">
            <img src="../../assets/images/home-six/subscribe-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Subscribe'
}
</script>
