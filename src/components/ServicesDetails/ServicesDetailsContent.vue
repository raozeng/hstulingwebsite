<template>
    <div>
        <div class="services-details-area ptb-110">
            <div class="container">
                <div class="services-details-overview">
                    <div class="services-details-desc">
                        {{firstre.glory}}
                        <h3>{{firstre.glory}} Infrastructure</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.</p>
                        <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
                    </div>

                    <div class="services-details-image">
                        <img src="../../assets/images/services-details-1.jpg" alt="image">
                    </div>
                </div>

                <!-- <div class="services-details-overview">
                    <div class="services-details-image">
                        <img src="../../assets/images/services-details-2.jpg" alt="image">
                    </div>

                    <div class="services-details-desc">
                        <h3>Information Retrieval</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.</p>
                        <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

// const routes = [
//   {
//     path: '/user/:id',
//     name: 'user',
//     component: User
//   }
// ]

export default {

    // created () {
    //     console.log(this.$route.params.id)
    // },

    name: 'ServicesDetailsContent',
    mounted(){
        this.postData();
    },
    data(){
        return{
            result:[],
            firstre:{},
        };
    },
    methods:{
        postData(){
            axios({
                method:"POST",
                url:"http://backend.hsturing.com/getTLSPeopleContentData",
                data:{
                    params:{
                        // id:this.item.id
                        id:this.$route.params.id
                    },
                },
            }).then((res)=>{
                this.result=res.data.result.people_content
                this.firstre=this.result[0]
            });
        },
    },
};
</script>