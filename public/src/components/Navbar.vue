<template>
  <div class="navbar">
    <v-toolbar
      class="px-10 toolbar"
      dense
      dark
      color="#a2b0fdd5"
      elevation=""
    >
      <v-spacer></v-spacer>
      <div class="buttonWrapper d-flex justify-space-around">
        <v-btn text class="text-capitalize" @click="$emit('toAboutMe')">
          About
        </v-btn>
        <v-btn text class="text-capitalize" @click="$emit('toExperience')">
          Experience
        </v-btn>
        <v-btn text class="text-capitalize" @click="$emit('toProject')">
          Project
        </v-btn>
        <v-btn text class="text-capitalize" @click="$emit('toContact')">
          Contact
        </v-btn>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Navbar Component",
  data() {
    return {
      //
    };
  },
};
</script>

<style>
.navbar {
  width: 100%;
  border-bottom: 1px solid black;
  border: 1px solid rgba(0, 39, 241, 0.14);
  box-shadow: 0px 1px 1px rgba(0, 8, 198, 0.08);
  z-index: 500;
}
.toolbar{
  background: #a2b0fdd5;
}
.buttonWrapper button:hover{
  background-color: transparent;
  color: rgb(75, 2, 178);
}
.buttonWrapper button:not(:hover){
  color: rgb(26, 26, 27);
}
</style>
