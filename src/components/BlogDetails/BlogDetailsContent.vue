<template>
    <div class="blog-details-area ptb-110">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details">
                        <div class="article-image">
                            <img :src="host + firnew.img" alt="image">
                        </div>

                        <!-- <div v-for="(item,index) in news" :key="index">
                            <div v-html="item.description">
                            </div>
                        </div> -->

                        <div class="article-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><span>发布时间:</span> <router-link to="/blog-one">{{firnew.show_date}}</router-link></li>
                                    <li><span>作者:</span> <router-link to="/blog-one">{{firnew.author}}</router-link></li>
                                </ul>
                            </div>

                            <h3>{{firnew.name}}</h3>
                            <div v-html="firnew.description"></div>
                            <!-- <div dangerouslySetInnerHTML={{__html: firnew.description}} /> -->

                            <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> -->

                            <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p> -->

                            <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> -->

                            <blockquote class="wp-block-quote">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                <cite>Tom Cruise</cite>
                            </blockquote>

                            <p>Equidem impedit officiis quo te. Illud partem sententiae mel eu, euripidis urbanitas et sit. Mediocrem reprimique an vim, veniam tibique omittantur duo ut, agam graeci in vim. Quot appetere patrioque te mea, animal aliquip te pri. Ad vis animal ceteros percipitur, eos tollit civibus percipitur no.</p>

                            <ul class="wp-block-gallery columns-3">
                                <li class="blocks-gallery-item">
                                    <figure>
                                        <img src="../../assets/images/blog/blog-8.jpg" alt="image">
                                    </figure>
                                </li>

                                <li class="blocks-gallery-item">
                                    <figure>
                                        <img src="../../assets/images/blog/blog-3.jpg" alt="image">
                                    </figure>
                                </li>

                                <li class="blocks-gallery-item">
                                    <figure>
                                        <img src="../../assets/images/blog/blog-4.jpg" alt="image">
                                    </figure>
                                </li>
                            </ul>

                            <h3>10 Tactics for marketing your company</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>

                            <ul class="article-features-list">
                                <li>Devices can grind down to a halt.</li>
                                <li>Small companies Reairing business.</li>
                                <li>Repairs are competitive with anyone</li>
                                <li>Repair broken buttons, speakers</li>
                                <li>Repairs are competitive with anyone</li>
                            </ul>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>

                        <div class="article-footer">
                            <div class="article-tags">
                                <span><i class="fas fa-bookmark"></i></span>

                                <router-link to="/blog-one">返回首页</router-link>
                                <!-- <router-link to="/blog-one">Games</router-link>,
                                <router-link to="/blog-one">Travel</router-link> -->
                            </div>

                            <!-- <div class="article-share">
                                <ul class="social">
                                    <li><a href="https://facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div> -->
                        </div>
                    </div>

                    <!-- <div class="comments-area">
                        <h3 class="comments-title">2 Comments:</h3>

                        <ol class="comment-list">
                            <li class="comment">
                                <div class="comment-body">
                                    <div class="comment-meta">
                                        <div class="comment-author vcard">
                                            <img src="../../assets/images/author-1.jpg" class="avatar" alt="image">
                                            <b class="fn">James Anderson</b>
                                            <span class="says">says:</span>
                                        </div>

                                        <div class="comment-metadata">
                                            April 24, 2022 at 10:59 am
                                        </div>
                                    </div>

                                    <div class="comment-content">
                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>

                                    <div class="reply">
                                        <a href="/blog-one" class="comment-reply-link">Reply</a>
                                    </div>
                                </div>

                                <ol class="children">
                                    <li class="comment">
                                        <div class="comment-body">
                                            <div class="comment-meta">
                                                <div class="comment-author vcard">
                                                    <img src="../../assets/images/author-2.jpg" class="avatar" alt="image">
                                                    <b class="fn">Steven Smith</b>
                                                    <span class="says">says:</span>
                                                </div>
    
                                                <div class="comment-metadata">
                                                    April 24, 2022 at 10:59 am
                                                </div>
                                            </div>
    
                                            <div class="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
    
                                            <div class="reply">
                                                <a href="/blog-one" class="comment-reply-link">Reply</a>
                                            </div>
                                        </div>
                                    
                                        <ol class="children">
                                            <li class="comment">
                                                <div class="comment-body">
                                                    <div class="comment-meta">
                                                        <div class="comment-author vcard">
                                                            <img src="../../assets/images/author-3.jpg" class="avatar" alt="image">
                                                            <b class="fn">Sarah Taylor</b>
                                                            <span class="says">says:</span>
                                                        </div>
            
                                                        <div class="comment-metadata">
                                                            April 24, 2022 at 10:59 am
                                                        </div>
                                                    </div>
            
                                                    <div class="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>
            
                                                    <div class="reply">
                                                        <a href="/blog-one" class="comment-reply-link">Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>

                            <li class="comment">
                                <div class="comment-body">
                                    <div class="comment-meta">
                                        <div class="comment-author vcard">
                                            <img src="../../assets/images/author-2.jpg" class="avatar" alt="image">
                                            <b class="fn">John Doe</b>
                                            <span class="says">says:</span>
                                        </div>

                                        <div class="comment-metadata">
                                            April 24, 2022 at 10:59 am
                                        </div>
                                    </div>

                                    <div class="comment-content">
                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>

                                    <div class="reply">
                                        <a href="/blog-one" class="comment-reply-link">Reply</a>
                                    </div>
                                </div>

                                <ol class="children">
                                    <li class="comment">
                                        <div class="comment-body">
                                            <div class="comment-meta">
                                                <div class="comment-author vcard">
                                                    <img src="../../assets/images/author-4.jpg" class="avatar" alt="image">
                                                    <b class="fn">James Anderson</b>
                                                    <span class="says">says:</span>
                                                </div>
    
                                                <div class="comment-metadata">
                                                    April 24, 2022 at 10:59 am
                                                </div>
                                            </div>
    
                                            <div class="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
    
                                            <div class="reply">
                                                <a href="/blog-one" class="comment-reply-link">Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </li>
                        </ol>

                        <div class="comment-respond">
                            <h3 class="comment-reply-title">Leave a Reply</h3>

                            <form class="comment-form">
                                <p class="comment-notes">
                                    <span id="email-notes">Your email address will not be published.</span>
                                    Required fields are marked 
                                    <span class="required">*</span>
                                </p>
                                <p class="comment-form-comment">
                                    <label>Comment</label>
                                    <textarea name="comment" id="comment" cols="45" rows="5" maxlength="65525" required="required"></textarea>
                                </p>
                                <p class="comment-form-author">
                                    <label>Name <span class="required">*</span></label>
                                    <input type="text" id="author" name="author" required="required">
                                </p>
                                <p class="comment-form-email">
                                    <label>Email <span class="required">*</span></label>
                                    <input type="email" id="email" name="email" required="required">
                                </p>
                                <p class="comment-form-url">
                                    <label>Website</label>
                                    <input type="url" id="url" name="url">
                                </p>
                                <p class="comment-form-cookies-consent">
                                    <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent">
                                    <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                </p>
                                <p class="form-submit">
                                    <input type="submit" name="submit" id="submit" class="submit" value="Post A Comment">
                                </p>
                            </form>
                        </div>
                    </div> -->
                </div>

                <!-- <div class="col-lg-4 col-md-12">
                    <BLogDetailsSidebar />
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import BLogDetailsSidebar from '../BlogDetails/BLogDetailsSidebar';
import axios from "axios";


export default {
    name: 'BlogDetailsContent',
    components: {
        BLogDetailsSidebar,
    },
    mounted(){
        this.postData();
    },
    data(){
        return{
            host:'http://backend.hsturing.com/',
            news:[],
            firnew:{},
            firnewde:{},
        };
    },
    methods:{
        postData(){
            axios({
                method:"POST",
                url:"http://backend.hsturing.com/getTLSNewsContentDate",
                data:{
                    params:{
                        id:this.$route.params.id,
                        // id:3,
                    },
                },
            }).then((res)=>{
                this.news=res.data.result.news_content
                this.firnew=this.news[0]
                this.firnewde=this.firnew.description
            })
        },
    },
}
</script>