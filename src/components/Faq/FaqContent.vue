<template>
    <div class="faq-area ptb-110">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="faq-accordion">
                        <accordion>
                            <accordion-item v-for="(item,index) in faq" :key="index">
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        {{item.question}}
                                        <i class='fas fa-plus'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>{{item.answer}}</p>
                                </template>
                            </accordion-item>
                            <!-- <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        Is Smart Lock required for instant apps?
                                        <i class='fas fa-plus'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </template>
                            </accordion-item> -->
                            <!-- <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        Why Choose Our Services In Your Business?
                                        <i class='fas fa-plus'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        Can I have multiple activities in a single feature?
                                        <i class='fas fa-plus'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        Which material types can you work with?
                                        <i class='fas fa-plus'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        Why Choose Our Services In Your Business?
                                        <i class='fas fa-plus'></i>
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </template>
                            </accordion-item> -->
                        </accordion>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="faq-content">
                        <div class="section-title">
                            <span>Ask Question</span>
                            <h2>Frequently Asked Questions</h2>
                            <p>Veniam quis nostrud exercitation ullamco laboris nist aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur excepteur sint occaecat aboris nisi ut aliquip.</p>
                        </div>
                        <div class="faq-image">
                            <img src="../../assets/images/faq.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="faq-contact">
                <div class="section-title">
                    <h2>Do You Have Any Questions</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="faq-contact-form">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-12">
                            <div class="faq-contact-image">
                                <img src="../../assets/images/contact.png" alt="image">
                            </div>
                        </div>

                        <div class="col-lg-7 col-md-12">
                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            class="form-control" 
                                            required placeholder="Name">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" class="form-control" required placeholder="Email">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="phone_number" id="phone_number" required class="form-control" placeholder="Phone">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" class="form-control" required placeholder="Subject">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" id="message" cols="30" rows="5" required placeholder="Your Message"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import axios from "axios";

export default {
    name: 'FaqContent',
    components: {
        Accordion,
        AccordionItem
    },
    mounted(){
        this.postData();
    },
    data(){
        return{
            faq:[],
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
                this.faq=res.data.result.questions
            })
        }
    }
}
</script>