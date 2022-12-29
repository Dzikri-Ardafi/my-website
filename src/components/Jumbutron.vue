<template>
  <div class="jumbutron px-15 mt-16">
    <v-row>
      <!-- section detail -->
      <v-col cols="8" class="ml-16 mt-15 mainWrapper">
        <div class="my-15">
          <p class="hyText font-weight-black">Hi, Iam</p>
          <div class="d-flex">
            <div class="nameDiv">
              <p class="nameText font-weight-bold mr-3">Dzikri Ardafi</p>
            </div>

            <p class="roleText my-auto ml-3">Frontend Web Developer</p>
          </div>
          <v-btn @click="$emit('toExperience')" text class="buttonGoToExperience rounded-lg" color="#0098B9">
            <p>Lets see my Experience</p>
          </v-btn>
        </div>
      </v-col>
      <!-- section photo -->
      <v-col class="profileWrapper" cols="3">
        <img src="../assets/images/profileImage.png" alt="profle Image" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Jumbotron Component",
  data() {
    //
  },
};
</script>

<style>
.hyText {
  color: #00819d;
  font-size: 25px;
}
.profileWrapper{
  animation: fadeInRight;
  animation-duration: 2s;
}
.mainWrapper{
  animation: fadeInLeft;
  animation-duration: 2s;
}
.nameText {
  font-size: 45px;
}
.nameDiv {
  width: max-content;
  border-right: 1px solid black;
}
.roleText {
  font-size: 32px;
  font-weight: 300;
}
.buttonGoToExperience p {
  color: black;
  font-weight: 500;
}
</style>
