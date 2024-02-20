<template>
    <div class="topbar-wrap-area">
        <div class="container-fluid">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-3 col-md-3">
                    <div class="topbar-content">
                        <!-- <span>Welcome to TuLing. Need Help? <router-link to="/contact">Contact Us</router-link></span> -->
                    </div>
                </div>
                <div class="col-lg-9 col-md-9">
                    <ul class="topbar-action-list">
                        <!-- <li><i class="fas fa-map-marker"></i> 2750 Quadra Street Victoria, Canada</li> -->
                        <li>
                            <i class="fas fa-phone"></i> <a href="tel:44587154756">
                                <div>{{firstcontacts.telephone}}</div></a>
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i> <a href="mailto:strend@gmail.com">
                                <div>{{firstcontacts.email}}</div></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Topbar',
    mounted() {
        this.postData();
    },
    data(){
        return{
            contacts:[],
            firstcontacts:{},
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
                this.contacts=res.data.result.contacts,
                this.firstcontacts=this.contacts[0]
            });
        },
    },
};
</script>