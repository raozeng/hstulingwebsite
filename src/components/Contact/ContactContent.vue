<template>
  <div class="contact-area ptb-110">
    <div class="container">
      <div class="section-title">
        <h1>联系我们</h1>
        <h5>图灵社是你获取信息，提升能力的理想平台。如果你有任何问题、合作意向，请随时联系我们。感谢您的支持与关注！</h5>

        <!-- <div>{{firstcontacts.telephone}}</div> -->
        <!-- <p>
          图灵社是你获取信息，提升能力的理想平台。如果你有任何问题、合作意向，请随时联系我们。感谢您的支持与关注！
        </p> -->
      </div>

      <div class="contact-form">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12">
            <div class="contact-image">
              <img src="../../assets/images/contact.png" alt="image" />
            </div>
          </div>

          <div class="col-lg-7 col-md-12">
            <form id="contactForms">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      v-model="form.name"
                      class="form-control"
                      required placeholder="Name"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      v-model="form.phone"
                      class="form-control"
                      required
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      v-model="form.email"
                      required
                      class="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="msg_subject"
                      id="msg_subject"
                      v-model="form.theme"
                      class="form-control"
                      required
                      placeholder="Theme"
                    />
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <textarea
                      name="message"
                      class="form-control"
                      id="message"
                      v-model="form.content"
                      cols="30"
                      rows="5"
                      required
                      placeholder="Content"
                    ></textarea>
                  </div>
                </div>

                <!-- <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="img"
                      name="img"
                      id="img"
                      v-model="form.theme"
                      class="form-control"
                      required
                      placeholder="Theme"
                    />
                  </div>
                </div> -->

                <div class="col-lg-12 col-md-12">
                  <button class="btn btn-primary" @click.prevent="handleSubmit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="contact-info">
        <div class="contact-info-content">
          <h3>Contact us by Phone Number or Email Address</h3>
          <h2>
            <a href="tel:+8803219265168"><div>{{firstcontacts.telephone}}</div></a>
            <span>OR</span>
            <a href="mailto:strend@gmail.com"><div>{{firstcontacts.email}}</div></a>
          </h2>
          <!-- <h1> {{}}</h1> -->
          <!-- <ul class="social">
            <li>
              <a href="https://twitter.com/" target="_blank"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li>
              <a href="https://youtube.com/" target="_blank"
                ><i class="fab fa-youtube"></i
              ></a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="https://linkedin.com/" target="_blank"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </li>
            <li>
              <a href="https://instagram.com/" target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactContent",
  mounted() {
    this.postData();
  },
  data() {
    return {
      form: {},
      contacts:[],
      firstcontacts:{},
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.form);
      
    //   axios.post('pot',{...this.form}).then((res)=>{
    //       alert('提交成功')
    //   })
    axios({
        method:"POST",
        url:"http://backend.hsturing.com/getTLSContactData",
        data: {
          params: {
            ...this.form
          },
        },
        }).then((res)=>{
            alert('提交成功')
        });
    // axios({
    //     method:"POST",
    //     url:"http://10.133.64.124:8231/getTLSContactEmailData",
    //     data:{
    //       params:{
    //       },
    //     },
    // }).then((res)=>{
    //   this.contacts=res.data.result.contacts,
    //   this.firstcontacts=this.contacts[0]
    //   // console.log(res);
    // });
    },
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