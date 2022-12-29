<template>
  <v-footer class="footerWrapper">
    <div style="width: 100%">
      <div class="d-flex justify-center mt-1">
        <div class="d-flex my-auto" style="column-gap: 1em">
          <a href="https://www.linkedin.com/in/dzikri-ardafi-77775b231/" target="_blank">
            <i class="icon ri-linkedin-box-line ri-xl"></i>
          </a>
          <a href="https://github.com/Dzikri-Ardafi" target="_blank">
            <i class="icon ri-github-fill ri-xl"></i>         
          </a>
          <a href="https://www.instagram.com/dzkri.ardfi/" target="_blank">
            <i class="icon ri-instagram-line ri-xl"></i>
          </a>
        </div>
        <div />
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      //
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.footerWrapper{
  background-color: rgba(79, 167, 185, 0.436)
}
.icon{
  color: rgb(101, 101, 197);
}
</style>
