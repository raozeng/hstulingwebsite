<template>
    <div class="partner-area ptb-110 bg-f2f6f9">
        <div class="container">
            <div class="section-title">
                <h2>Featured Customers & Partners</h2>
            </div>

            <div class="customers-partner-list">
                <div class="partner-item" v-for="(item,index) in customer" :key="index">
                    <div class="partner-image">
                        <img :src="this.host + item.img" alt="image">
                    </div>
                </div>

                <!-- <div class="partner-item">
                    <div class="partner-image">
                        <img src="../../assets/images/partners/partner-2.png" alt="image">
                    </div>
                </div>

                <div class="partner-item">
                    <div class="partner-image">
                        <img src="../../assets/images/partners/partner-3.png" alt="image">
                    </div>
                </div>

                <div class="partner-item">
                    <div class="partner-image">
                        <img src="../../assets/images/partners/partner-4.png" alt="image">
                    </div>
                </div>

                <div class="partner-item">
                    <div class="partner-image">
                        <img src="../../assets/images/partners/partner-5.png" alt="image">
                    </div>
                </div>

                <div class="partner-item">
                    <div class="partner-image">
                        <img src="../../assets/images/partners/partner-6.png" alt="image">
                    </div>
                </div>

                <div class="partner-item">
                    <div class="partner-image">
                        <img src="../../assets/images/partners/partner-1.png" alt="image">
                    </div>
                </div>

                <div class="partner-item">
                    <div class="partner-image">
                        <img src="../../assets/images/partners/partner-2.png" alt="image">
                    </div>
                </div>

                <div class="partner-item">
                    <div class="partner-image">
                        <img src="../../assets/images/partners/partner-3.png" alt="image">
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'FeaturedCustomers',
    mounted(){
        this.postData();
    },
    data(){
        return{
            customer:[],
            host:'http://backend.hsturing.com/',
        };
    },
    methods:{
        postData(){
            axios({
                method:"POST",
                url:"http://backend.hsturing.com/getTLSAboutUsData",
                data:{
                    params:{

                    },
                },
            }).then((res)=>{
                this.customer=res.data.result.cooperates
            });
        },
    },
};
</script>