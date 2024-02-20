<template>
    <div>
        <div class="projects-details-area ptb-110">
            <div class="container">
                <div class="projects-details">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="projects-details-image">
                                <img :src="host + firstproject.img" alt="image" style="height:300px; width:400px;">
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="projects-details-image">
                                <img :src="host + firstproject.img1" alt="image" style="height:300px; width:400px;">
                                
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="projects-details-info">
                                <div class="d-table">
                                    <div class="d-table-cell">
                                        <ul>
                                            <li><span>项目名称:</span>{{firstproject.name}}</li>
                                            <br>
                                            <!-- <li><span>负责人:</span>{{firstproject.head}}</li>
                                            <li><span>状态:</span>{{firstproject.project_state}}</li> -->
                                            <li><span>项目负责人:</span> {{firstproject.leader}}</li><br>
                                            <li><span>起始日期:</span> {{firstproject.show_date}}</li><br>
                                            <li><span>项目状态:</span> {{firstproject.present_state}}<br>
                                             <!-- <router-link to="/">www.strend.com</router-link> -->
                                             </li>
                                            <!-- <li><span>Tags:</span> App, Design, Web, Dev</li> -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="projects-details-desc">
                        <!-- <h3>{{firstproject.project_title}}</h3> -->

                        <p>{{firstproject.description}}</p>

                        <!-- <p>Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p> -->

                        <!-- <blockquote class="wp-block-quote">
                            <p class="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </blockquote>

                        <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis.</p>

                        <p>Nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'ProjectsDetailsContent',
    mounted() {
    this.postData();
  },
  data() {
    return {
        project:[],
        // firstproject:{},
        firstproject:{},
        host:'http://backend.hsturing.com/'
    };
  },
  methods:{
      postData(){
      axios({
      method:"POST",
      url:"http://backend.hsturing.com/getTLSPresentContentData",
      data:{
        params:{
            id:this.$route.params.id,
        },
      },
    }).then((res)=>{
      this.project=res.data.result.present_content
      this.firstproject=this.project[0];
    });
    },
  },
};
</script>