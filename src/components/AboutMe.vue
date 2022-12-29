<template>
  <div class="aboutMeWrapper mx-auto px-16">
    <div class="cardAboutUs mt-16 px-15">
      <div class="d-flex justify-center mb-3">
        <div class="d-flex dividerSection mt-5">
          <div>
            <hr class="firstDivider mr-5" width="55px" color="#BD00FF" />
          </div>
          <div>
            <hr class="secondDivider" color="#BD00FF" width="10px" />
          </div>
        </div>
        <p class="titleSection">Know More About Me</p>
      </div>
      <div class="content text-center">
        <p>
          Hello, I'm Dzikri Ardafi (21). 7th semester student of Electrical
          Engineering study program from Gunadarma University. Someone who likes
          challenges, creative, responsible and reliable. I am a competent
          person and highly committed to the work or activity I am working on.
          I'm used to working in a team and used to communicating about project
          progress. I am experienced with web development, specifically its web
          frontend. I have the ability in language programming i.e. javascript.
          I'm using React JS or Vue JS to create an interactive web app.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About Me Component",
};
</script>

<style>
.cardAboutUs {
  background: #e9effa50;
  border-radius: 3px 50px;
  padding: 2em;
  box-shadow: 2px 5px 4px rgba(51, 125, 146, 0.25);
}
.aboutMeWrapper{
  animation: fadeIn;
  animation-duration: 2s;
}
.dividerSection {
  width: 100px;
}
.firstDivider {
  height: max-content;
  border: 1.5px solid #bd00ff;
}
.secondDivider {
  border: 0.5px solid #bd00ff;
  margin-top: 1px;
  margin-left: -10px;
}
.titleSection {
  color: #491f5c;
  font-weight: 700;
  font-size: 30px;
  margin-left: -0.5em;
}
.content {
  font-weight: 500;
  font-size: 20px;
  color: black;
}
</style>
