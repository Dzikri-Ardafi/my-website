<template>
  <div>
    <div class="d-flex justify-center mb-3">
      <div class="d-flex dividerSection mt-5">
        <div>
          <hr class="firstDivider mr-5" width="55px" color="#BD00FF" />
        </div>
        <div>
          <hr class="secondDivider" color="#BD00FF" width="10px" />
        </div>
      </div>
      <p class="titleSection">Contact Me</p>
    </div>
    <v-container fluid class="main mb-16 px-16">
      <v-card style="box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25)" class="cardForm px-5 py-16" :class="nameClassForm ? 'cardFormWrapper' : '-'">

          <form action="https://formsubmit.co/dzkri.ardfi@gmail.com" method="POST">
            <v-col md="6" sm="12">
            <!-- disabled captca -->
            <input type="hidden" name="_captcha" value="false">
            <!-- element is sending email is complete -->
            <input type="hidden" name="_next" :value="URL">
            <v-text-field
              v-model="emailForm"
              :value="emailForm"
              type="email"
              name="email"
              required
              density="comfortable"
              color="grey lighten-5"
              variant="outlined"
              bg-color="#F2F4FF"
              placeholder="Your Email"
              outlined
            />
            </v-col>
          <v-col md="6" sm="12">
            <v-text-field
              required
              v-model="subjectMessage"
              :value="subjectMessage"
              density="comfortable"
              color="grey lighten-5"
              variant="outlined"
              bg-color="#F2F4FF"
              placeholder="Subject"
              name="_subject"
            />
          </v-col>
         <v-col cols="12">
          <v-textarea
            v-model="bodyMessage"
            :value="bodyMessage"
            type="text"
            name="message"
            required
            color="grey lighten-5"
            variant="outlined"
            bg-color="#F2F4FF"
            placeholder="Your Message"
          ></v-textarea>
         </v-col>
          <div align="end">
            <v-btn
              type="submit"
              @click="sendEmail"
              elevation="0"
              width="170px"
              height="50px"
              color="#81BCB5"
              class="text-capitalize rounded-pill"
            >
              <p
                style="color: black; font-weight: 700; font-size: 15px"
                class="mx-auto my-auto"
              >
                Send
              </p>
              <v-icon class="pl-5 my-auto" color="black">
                mdi-arrow-right
              </v-icon>
              <v-tooltip activator="parent" location="bottom">
                  To: dzkri.ardfi@gmail.com
              </v-tooltip>
            </v-btn>
          </div>
        </form>

      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  props: {
    nameClassForm: {
      type: Boolean,
      required: true
    },
  },
  data: ()=>({
        emailForm: '',
        subjectMessage: '',
        bodyMessage: '',
        URL: ''
    }),
    mounted(){
      this.URL = `${window.location.origin}/thank-you`
    }
};
</script>

<style scoped>
.main .cardForm {
  background: rgba(145, 189, 184, 0.38);
  border-radius: 5px 25px;
}
.cardFormWrapper{
  animation: fadeInUp;
  animation-duration: 2s;
}

</style>
