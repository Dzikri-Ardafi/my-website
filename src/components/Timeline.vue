<template>
  <div  class="mt-16">
    <div class="d-flex justify-center mb-3">
      <div class="d-flex dividerSection mt-5">
        <div>
          <hr class="firstDivider mr-5" width="55px" color="#BD00FF" />
        </div>
        <div>
          <hr class="secondDivider" color="#BD00FF" width="10px" />
        </div>
      </div>
      <p class="titleSection">My Experience</p>
    </div>

    <div class="wrapperTimeline">

        <v-timeline side="end">
        <v-timeline-item
          v-for="itemExperince in experince"
          :key="itemExperince.name"
          large
        >
          <template v-slot:icon>
            <v-avatar
              style="box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25)"
              color="#A1FFF4"
              class="dotTimeline"
            ></v-avatar>
          </template>
          <template v-slot:opposite>
            <div v-if="classTimelineDate" :class="classTimelineDate ? 'dateExperienced' : '-'">
            <span class="dateExperience">
              {{ itemExperince.date }}
            </span>
            <br />
            <span class="estimated" v-if="itemExperince.isEstimated === true">
              <p style="color: #9a9a9a; font-size: 15px; font-weight: 700">
                (estimated)
              </p>
            </span>
          </div>
          </template>


          <v-card v-if="classTimelineItem" class="cardExperience mb-5" :class="classTimelineItem ? 'itemExperienced' : '-'">
            <v-card-title class="text-h5 titleExperince">
              {{ itemExperince.name }}
            </v-card-title>

            <v-card-subtitle class="companyName">
              {{ itemExperince.company }}
            </v-card-subtitle>
            <v-card-subtitle class="dateMiniWidth mt-1">
              <p>{{ itemExperince.date }} <span v-if="itemExperince.isEstimated ===true">
                <p style="color: #9a9a9a; font-size: 15px; font-weight: 700">
                (estimated)
              </p>
                </span></p>
            </v-card-subtitle>
            <v-card-text class="detailExperince">{{
              itemExperince.detail
            }}</v-card-text>

            <v-btn
              class="ml-3 px-7 my-1 rounded-pill"
              :color="skill.color"
              v-for="skill in itemExperince.skill"
              :key="skill"
            >
              <p
                class="my-auto mx-auto text-capitalize"
                style="font-weight: 600; color: white; font-size: 17px"
              >
                {{ skill.name }}
              </p>
            </v-btn>

          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>
<script>
export default {
  name: "Timeline Component",
  props: {
    classTimelineItem: {
      type: String,
      required: true
    },
    classTimelineDate: {
      type: String,
      required: true
    }

  },
  watch: {
    classTimeline(e){
      if(this.classTimeline){
        console.log(e)
      }
    }
  },
  data() {
    return {
      experince: [
        {
          name: "Independent Study - Kampus Merdeka Batch 2",
          date: "Feb 2020 - July 2022",
          company: "Alterra Academy",
          detail:
            "individual learning using the Vue JS programming language and final projects in the form of teams of several specific skills",
          skill: [
            {
              color: "#00A3FF",
              name: "Vue JS",
            },
            {
              color: "#DB00FF",
              name: "Nuxt JS",
            },
          ],
        },
        {
          name: "Internship Maintenance Electrical Engineering",
          date: "July 2022 - August 2022",
          company: "PT Aisin Indonesia",
          detail: "Performs checking and maintenance of the transformer",
          skill: [
            {
              color: "#FF001F",
              name: "Maintenance",
            },
          ],
        },
        {
          name: "Internship Front-End Web Developer",
          date: "August 2022 - Nov 2022",
          company: "Sagara Technology",
          detail:
            "developed a website project as a team according to the design of the figma and in accordance with the direction of the Product Management",
          skill: [
            {
              name: "React JS",
              color: "#6100FF",
            },
            {
              name: "Vue JS",
              color: "#00A3FF",
            },
            {
              name: "MUI",
              color: "#1400FF",
            },
          ],
        },
        {
          name: "Independent Study - Kampus Merdeka Batch 3",
          date: "August 2022 - Des 2022",
          company: "Dicoding Academy",
          detail:
            "individual learning using the React JS programming language and final projects as a team to develop a new website",
          skill: [
            {
              name: "React JS",
              color: "#6100FF",
            },
            {
              name: "Javascript",
              color: "#FFA800",
            },
          ],
        },
        {
          name: "Internship Front-End Web Developer",
          date: "Nov 2022 - Mei 2023",
          isEstimated: true,
          company: "Alterra Academy",
          detail:
            "Developed a website project as a team according with user to handle a project website",
          skill: [
            {
              color: "#DB00FF",
              name: "Nuxt JS",
            },
            {
              name: "Vue JS",
              color: "#00A3FF",
            },
            {
              name: "Vuetify",
              color: "#01AE8F",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.titleExperince {
  font-style: normal;
  font-size: 27px;
  font-weight: 600;
  font-size: 27px;
}
.dateExperienced {
  animation: fadeInLeft;
  animation-duration: 2s;
}
.itemExperienced {
  animation: fadeInRight;
  animation-duration: 2s;
}
.dotTimeline{
  animation: fadeInUp;
  animation-duration: 3s;
}
.dateMiniWidth, .estimated {
  display: none;
}
.dotTimeline {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
}
.companyName {
  height: 23px;
  font-size: 23px;
  font-weight: 500;
  color: #696969;
}
.detailExperince {
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #696969;
}
.cardExperience {
  padding: 2em 2em;
  width: 743px;
  height: auto;
  background: #eaeff7dc;
  border-left: 10px solid rgba(42, 106, 106, 0.48);
  box-shadow: 2px 5px 4px rgba(58, 159, 159, 0.25);
  border-radius: 10px 20px;
}
.dateExperience {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
}
@media only screen and (max-width: 960px) {
  .cardExperience {
    width: 55%;
  }
  .dateMiniWidth {
    color: rgba(11, 0, 90, 0.797);
    font-weight: 600;
    font-size: 15px;
    font-style: italic;
    display: block;
  }
  .dateExperience {
    display: none;
  }

}
</style>
