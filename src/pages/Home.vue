<template>
    <v-app>
      <v-main class="mainApp" id="top">
        <Navbar
          @toProject="scrolToProject"
          @toAboutMe="scrolToAboutMe"
          @toExperience="scrolToExperience"
          @toContact="scrolToContact"
        />
        <Jumbutron @toExperience="scrolToExperience" id="jumbotron"/>
        <AboutMe id="about" />
        <Timeline id="timeline" :classTimelineItem="nameClassTimelineItem" :classTimelineDate="nameClassTimelineDate"/>
        <Project id="project" :nameClassProject="nameClassProject"/>
        <FormEmail id="contactMe" :nameClassForm="nameClassForm" />
        <Footer />
      </v-main>

      <div :class="nameClassButtomUp ? 'buttonUp' : 'closeButtonUp'">
        <v-btn @click="scrollToTop" color="light-blue accent-1" icon>
          <v-icon> mdi-arrow-up </v-icon>
        </v-btn>
      </div>
    </v-app>
  </template>

  <script>
  import AboutMe from "../components/AboutMe.vue";
  import ButtonUp from "../components/ButtonUp.vue";
  import Footer from "../components/Footer.vue";
  import FormEmail from "../components/FormEmail.vue";
  import Jumbutron from "../components/Jumbutron.vue";
  import Navbar from "../components/Navbar.vue";
  import Project from "../components/Project.vue";
  import Timeline from "../components/Timeline.vue";
  import LocomotiveScroll from "locomotive-scroll";
  export default {
    components: {
      Navbar,
      Jumbutron,
      AboutMe,
      Timeline,
      Project,
      FormEmail,
      Footer,
      ButtonUp,
    },
    data: () => ({
      nameClassTimelineItem : null,
      nameClassTimelineDate : null,
      nameClassProject: null,
      nameClassForm: null,
      nameClassButtomUp: null
    }),
    mounted(){
      window.onscroll = (()=> {
        this.onScroll()
      })
    },
    methods: {
      onScroll(){
        const scrollTopHeight = Math.ceil(document.documentElement.scrollTop)
        if(scrollTopHeight >= 150){
          this.nameClassTimelineItem = true
          this.nameClassTimelineDate = true
          this.nameClassButtomUp = true
        }
        else if(scrollTopHeight <= 150){
          this.nameClassButtomUp = false
        }
        else if(scrollTopHeight >= 1500){
          this.nameClassProject = true
        }
        else if(scrollTopHeight >= 3000){
          this.nameClassForm = true
        }
      },
      scrolToProject() {
        const scroll = new LocomotiveScroll();
        const project = document.querySelector("#project");
        scroll.scrollTo(project);
      },
      scrolToAboutMe() {
        const scroll = new LocomotiveScroll();
        const about = document.querySelector("#about");
        scroll.scrollTo(about);
      },
      scrolToExperience() {
        const scroll = new LocomotiveScroll();
        const timeline = document.querySelector("#timeline");
        scroll.scrollTo(timeline);
      },
      scrolToContact() {
        const scroll = new LocomotiveScroll();
        const contact = document.querySelector("#contactMe");
        console.log(contact);
        scroll.scrollTo(contact);
      },
      scrollToTop() {
        const scroll = new LocomotiveScroll();
        const navbarSection = document.querySelector("#top");
        scroll.scrollTo(navbarSection);
      },
    },
  };
  </script>

  <style scoped>
  .mainApp {
    font-family: "Montserrat", sans-serif;
    margin: 0px;
    padding: 0px;
    background: linear-gradient(180deg, #9aa9fb 0%, rgba(61, 203, 194, 0) 100%);
  }
  .buttonUp {
    animation: fadeInUp;
    animation-duration: 2s;
    display: flex;
    justify-items: end;
    right: 0;
    bottom: 0;
    margin-right: 2em;
    margin-bottom: 2em;
    position: fixed;
  }
  .closeButtonUp{
    width: 0;
    height: 0;
  }
  </style>
