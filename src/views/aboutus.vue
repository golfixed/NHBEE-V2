<template>
  <div class="home-display" style="padding-top:80px;background-color: rgb(51, 51, 51);">
    <div class="header-bg-about page-header d-flex align-items-center">
      <div class="container page-header-title" style="margin-top: -65px;">
        <div class="d-flex flex-column">
          <span class="page-title">{{ $t("message.pageheader.about.title") }}</span>
          <span class="page-subtitle">{{ $t("message.pageheader.about.subtitle") }}</span>
        </div>
      </div>
    </div>
    <div class="container page-start">
      <div class="page-body" style="overflow: hidden;">
        <div class="body-padding">
          <div class="section-about">
            <div class="about-1st-sec" style="grid-column: span 2;">
              <div>
                <p class="topic">{{ $t("message.page2_about.paragraph1title") }}</p>
              </div>
              <div>
                <p>{{ $t("message.page2_about.paragraph1") }}</p>
              </div>
            </div>
            <div class="about-logo d-flex justify-content-center align-items-center">
              <img class="p-2" src="/static/img/logo.png" style="width: 40%;" />
              <img class="p-2" src="/static/img/logo-kmutt.png" style="width: 40%;" />
            </div>
            <div class="about-slide" style="grid-column: span 3;">
              <div class="slide-imgcard">
                <img src="/static/img/about/pic2.jpg" class="about-pic" />
              </div>
              <div class="slide-imgcard">
                <img src="/static/img/about/pic3.jpg" class="about-pic" />
              </div>
              <div class="slide-imgcard">
                <img src="/static/img/about/pic4.jpg" class="about-pic" />
              </div>
            </div>
            <div style="grid-column: span 3;">
              <div>
                <p>{{ $t("message.page2_about.paragraph2") }}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div>
                <p class="topic">{{ $t("message.page2_about.paragraph3title") }}</p>
              </div>
              <div>
                <p>{{ $t("message.page2_about.paragraph3") }}</p>
              </div>
            </div>
            <div class="col-md-12">
              <div>
                <p class="topic">{{ $t("message.page2_about.paragraph4title") }}</p>
              </div>
              <div>
                <p>{{ $t("message.page2_about.paragraph4") }}</p>
                <li>{{ $t("message.page2_about.paragraph4_item1") }}</li>
                <li>{{ $t("message.page2_about.paragraph4_item2") }}</li>
                <li>{{ $t("message.page2_about.paragraph4_item3") }}</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layout_default from "@/layouts/main.vue";
export default {
  name: "aboutuspage",
  created() {
    this.$emit(`update:layout`, layout_default);
  }
};
</script>

<style scoped>
.header-bg-about {
  background-image: url("/static/img/about.png");
  background-position: 0%;
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
.col-style {
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
}
.page-body {
  background-color: white;
  height: fit-content;
  border-radius: 5px;
  padding: 30px;
  -webkit-box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.19);
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

.about-slide {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 0;
}
.slide-imgcard {
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.slide-imgcard > img {
  width: 300px;
}
.section-about {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
}
@media screen and (max-width: 425px) {
  .page-body {
    border-radius: 0;
    box-shadow: none;
  }
  .about-slide {
    display: flex;
    overflow-y: scroll;
    padding: 20px 0;
    margin: 0 -30px;
    width: 100vw;
  }
  .about-slide > .slide-imgcard:first-child {
    margin-left: 30px;
  }
  .slide-imgcard {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 15px;
  }
  .slide-imgcard > img {
    width: 300px;
  }
  .about-logo {
    display: none !important;
  }
  .about-1st-sec {
    grid-column: span 3 !important;
  }
}
</style>
