<template>
    <div class="about-area ptb-110">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="about-image">
                        <img src="../../assets/images/about-1.jpg" alt="image">
                        <img src="../../assets/images/about-2.jpg" alt="image">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <h2>关于我们</h2>
                        <!-- <h2>Engaging New Audiences Through Smart Approach</h2> -->
                        <h5>我们致力于为广大学生提供一个与众不同的学习和交流平台。无论您是对编程有浓厚兴趣的菜鸟程序员，还是已经拥有丰富计算机经验的大牛，我们都欢迎您加入我们的大家庭。我们秉持着开放、合作和创新的精神，在图灵社，您将有机会与优秀的学生、老师和教授互动，共同探索计算机科学的无限可能。无论您的目标是成为一名顶尖程序员、研究人工智能领域，还是创办属于自己的科技企业，图灵社都将竭诚支持您的发展。</h5>
                        <!-- <router-link to="/about-one" class="btn btn-primary">Discover More</router-link> -->
                    </div>
                </div>
            </div>

            <div class="about-inner-area">
                <div class="row">

                     <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div class="about-text">
                            <h3>我们的成员</h3>
                            <p>图灵社的成员，都是一群充满热情和才华的对人工智能感兴趣的人。我们拥有广泛的知识背景和专业技能，在人工智能领域有着丰富的经验和卓越的成就。我们追求卓越，致力于提供最先进的人工智能解决方案，以满足客户的需求。我们注重团队合作和持续学习，不断挑战自我，不断提高技术水平。我们深信人工智能的发展将引领未来，而作为图灵社的一员，我们将为此不懈努力。</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="about-text">
                            <h3>我们的历史</h3>
                            <p>图灵社成立于xx年，是一个致力于推动人工智能发展的创新社团。自图灵社创建以来，我们取得了令人瞩目的成就。我们的团队由一群富有激情和专业知识的学生和指导老师组成，他们的努力使得图灵社成为人工智能领域的重要参与者。我们的历史不仅仅是一段时间的积累，更是团队的智慧和创新的结晶。</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="about-text">
                            <h3>我们的使命</h3>
                            <p>图灵社的使命是通过创新科技改善人类生活。我们致力于研发先进的人工智能技术，并将其运用于各个领域，以解决现实世界中的难题。我们相信，通过智能技术的推动，可以提高生产效率、改善医疗、推动可持续发展、提升教育水平等，为人类社会带来积极影响。我们不断探索和创新，力求引领人工智能的发展，以实现更美好的未来。</p>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>

        <div class="shape-img1"><img src="../../assets/images/shapes/shape-1.png" alt="image"></div>
        <div class="shape-img2"><img src="../../assets/images/shapes/shape-2.svg" alt="image"></div>
        <div class="shape-img3"><img src="../../assets/images/shapes/shape-3.png" alt="image"></div>
        <div class="shape-img4"><img src="../../assets/images/shapes/shape-4.svg" alt="image"></div>
        <div class="shape-img5"><img src="../../assets/images/shapes/shape-5.svg" alt="image"></div>
        <div class="shape-img6"><img src="../../assets/images/shapes/shape-6.png" alt="image"></div>
        <div class="dot-shape1"><img src="../../assets/images/shapes/dot-1.png" alt="image"></div>
        <div class="dot-shape2"><img src="../../assets/images/shapes/dot-3.png" alt="image"></div>
    </div>
</template>

<script>

export default {
    name: 'EngagingNewAudiences',
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
      // console.log(res);
    });
    },
    }
}
</script>