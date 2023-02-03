<template>
  <div class="mx-16 mb-16 mt-16">
    <div class="d-flex justify-center mb-3">
      <div class="d-flex dividerSection mt-5">
        <div>
          <hr class="firstDivider mr-5" width="55px" color="#BD00FF" />
        </div>
        <div>
          <hr class="secondDivider" color="#BD00FF" width="10px" />
        </div>
      </div>
      <p class="titleSection">My Project</p>
    </div>
    <div class="wrapperProject">
      <div v-for="n in 6" :key="n" :class="nameClassProject ? 'contentProject' : '-'">
        <v-card
          elevation="0"
          height="250px"
          class="rounded-xl"
          style="background: #91bdb8"
        >
        </v-card>
        <div class="d-flex justify-center">
          <div />
          <v-btn
            style="
              width: 311px;
              height: 66px;
              margin-top: -2em;
              background: rgba(0, 107, 141, 0.95);
              box-shadow: 0px 4px 4px rgba(0, 56, 255, 0.25);
              border-radius: 5px;
            "
          >
            <p
              class="text-capitalize"
              style="font-weight: 700; font-size: 18px"
            >
              Title project
            </p>
            <v-icon class="ml-5"> mdi-arrow-right </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project Component",
  props: {
    nameClassProject: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      //
    };
  },
};
</script>

<style>
.wrapperProject {
  display: grid;

  grid-template-columns: repeat(3, auto);
  column-gap: 1em;
  row-gap: 5em;
}
@media only screen and (max-width: 960px){
  .wrapperProject {
  display: grid;
  grid-template-columns: repeat(1, 100%);
}
}
.contentProject{
  animation: pulse;
  animation-duration: 1s ;
}
</style>
