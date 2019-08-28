<template>
  <div class="home-display" style="padding-top:80px;background-color: rgb(51, 51, 51);">
    <div class="header-bg-about d-flex align-items-center">
      <div class="container" style="margin-top: -65px;">
        <div class="d-flex flex-column">
          <span class="page-title" style="color: #232323;">{{ $t("message.pageheader.team.title") }}</span>
          <span
            class="page-subtitle"
            style="color: #3c3c3c;"
          >{{ $t("message.pageheader.team.subtitle") }}</span>
        </div>
      </div>
    </div>
    <div class="container page-start">
      <div class="page-body" style="overflow: hidden;">
        <div class="team-title">
          <h5 class="team-title-text">Core Competency</h5>
          <h3 class="team-title-sub">The groups as a whole</h3>
          <p class="team-title-para">
            Developing and implementing the integrative and multidiscriplinary approches
            <br />to realization on native pollinator health and beekeeping industry for ecological and economical services
          </p>
        </div>
        <div class="staff-display">
          <teamcard
            v-for="(team, i) in teamList"
            :key="i"
            :value="i"
            :name="team['name']"
            :position="team['position']"
            :pictureURL="team['pictureURL']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teamcard from "@/components/team/teamcard.vue";
import layout_default from "@/layouts/main.vue";
export default {
  name: "aboutuspage",
  created() {
    this.$emit(`update:layout`, layout_default);
  },
  components: {
    teamcard
  },
  data() {
    return {
      teamList: [
        {
          name: "Assist. Prof. Dr. Orawan Duangphakdee",
          position: "Ph.D. (Biological Science)",
          pictureURL: "static/img/team/profile.png"
        },
        {
          name: "Mr.Preecha Rod-in",
          position: "M.Sc. (Natural Resource Management)",
          pictureURL: "static/img/team/profile.png"
        },
        {
          name: "Assoc Prof. Dr. Soontorngun",
          position: "",
          pictureURL: "static/img/team/profile.png"
        },
        {
          name: "Assist. Prof. Dr. Winyu",
          position: "(Chemistry)",
          pictureURL: "static/img/team/profile.png"
        },
        {
          name: "Dr. Nongrat Phoka",
          position: "Ph.D. (Genetic Engineering)",
          pictureURL: "static/img/team/profile.png"
        },
        {
          name: "Dr. Panutda Yodsang",
          position: "Ph.D. (Biochemistry)",
          pictureURL: "static/img/team/profile.png"
        },
        {
          name: "Prof. Dr. Tirenee Atchalakul",
          position: "",
          pictureURL: "static/img/team/profile.png"
        },
        {
          name: "Asisst Prof. Dr. Panuthat",
          position: "Ph.D. (Engineering)",
          pictureURL: "static/img/team/profile.png"
        },
        {
          name: "Dr.Kanteera Soontharapirakku",
          position: "Ph.D. (Biochemistry)",
          pictureURL: "static/img/team/profile.png"
        },
        {
          name: "Assist. Prof. Dr. Teeraphan Laomettachit",
          position:
            "Ph.D. (Genetics, Bioinformatics and Computational Biology)",
          pictureURL: "static/img/team/profile.png"
        },
        {
          name: "Dr. Teerasit Termsaithong",
          position: "Ph.D. (Information Science and Technology)",
          pictureURL: "static/img/team/profile.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.team-title {
  text-align: left;
  border: solid #ffffff61;
  border-width: 0 0 0 2px;
  /* border-radius: 10px; */
  margin: 30px 0 40px 20px;
  padding-left: 15px;
}
.team-title-text {
  color: #6b6b6b;
}
.team-title-sub {
  color: #3c3c3c;
  font-weight: bold;
}
.team-title-para {
  color: #6b6b6b;
}
.header-bg-about {
  height: 280px;
  background-image: url("/static/img/team-bg.png");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
.about-pic {
  margin: 0px 0px 10px 0px;
  width: 100%;
  border-radius: 5px;
}
.topic {
  margin: 10px 0px 10px 0px;
  padding-left: 10px;
  color: #e3b800;
  font-weight: bold;
  font-size: 20px;
  border-color: #e3b800;
  border: solid;
  border-width: 0px 0px 0px 3px;
}
.about-header-bg {
  height: 280px;
  background-image: url("/static/img/about/bg.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
.col-style {
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
}
.page-body {
  height: fit-content;
  border-radius: 5px;
  padding: 30px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.5)
    ),
    url("/static/img/team/bodybg.png");
  -webkit-box-shadow: 0px 2px 10px -1px rgba(255, 255, 255, 0.19);
  box-shadow: 0px 2px 10px -1px rgba(250, 250, 250, 0.19);
}
.staff-display {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 40px;
}

.aboutimg-div {
  border-radius: 5px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}
.top-fix {
  margin-top: -310px;
}

/* TABLET */
@media screen and (max-width: 1024px) {
  .staff-display {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
  }
  .page-body {
    border-radius: 0;
    padding: 20px;
  }
}
/* MOBILE */
@media screen and (max-width: 425px) {
  .staff-display {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
  }
  .page-body {
    border-radius: 0;
    padding: 20px;
  }
  .team-title {
    margin: 30px 0 40px 0px;
  }
}
</style>
