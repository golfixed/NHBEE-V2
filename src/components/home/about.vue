<template>
  <div class="container bg">
    <div class="row">
      <span class="section-text">{{ $t("message.section.about")}}</span>
    </div>
    <div class="row about-bar">
      <div class="about-box">
        <div class="about-icon-div">
          <i class="fas fa-bullseye about-icon"></i>
        </div>
        <h5 class="abt-topic">{{ $t("message.about.box1.title")}}</h5>
        <p class="abt-paragraph">{{ $t("message.about.box1.paragraph")}}</p>
      </div>
      <div class="about-box">
        <div class="about-icon-div">
          <i class="fas fa-flask about-icon"></i>
        </div>
        <h5 class="abt-topic">{{ $t("message.about.box2.title")}}</h5>
        <p class="abt-paragraph">{{ $t("message.about.box2.paragraph")}}</p>
      </div>
      <div class="about-box">
        <div class="about-icon-div">
          <i class="fas fa-directions about-icon"></i>
        </div>
        <h5 class="abt-topic">{{ $t("message.about.box3.title")}}</h5>
        <p class="abt-paragraph">{{ $t("message.about.box3.paragraph")}}</p>
      </div>
    </div>

    <!-- <div class="row" style="width:100%;margin-bottom:20px;">
      <h3
        style="color: white;padding-left: 50px;margin-bottom:0px;font-weight:bold;"
      >About Native Honeybee Laboratory</h3>
    </div>-->
    <!-- <div class="row bar" style=" text-align: start; overflow:hidden;">
      <div class="col-lg-4 col-sm-4 col-xs-12 abt-hover" v-bind:class="{'open': about1}" @click="click(1)">
        <div class="leftbox">
          <h5 class="abt-topic">The goal of NHBEE 1</h5>
          <p
            class="abt-paragraph"
          >To become a center of excellence in research and extension of developing and implementing the utilization of native honeybees and pollinators.</p>
        </div>
        <div class="rightbox img1"></div>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-12 abt-hover" v-bind:class="{'open': about1}" @click="click(1)">
        <div class="leftbox">
          <h5 class="abt-topic">The goal of NHBEE 1</h5>
          <p
            class="abt-paragraph"
          >To become a center of excellence in research and extension of developing and implementing the utilization of native honeybees and pollinators.</p>
        </div>
        <div class="rightbox img1"></div>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-12 abt-hover" v-bind:class="{'open': about1}" @click="click(1)">
        <div class="leftbox">
          <h5 class="abt-topic">The goal of NHBEE 1</h5>
          <p
            class="abt-paragraph"
          >To become a center of excellence in research and extension of developing and implementing the utilization of native honeybees and pollinators.</p>
        </div>
        <div class="rightbox img1"></div>
      </div>


    </div>-->
  </div>
</template>

<script>
export default {
  name: "homeabout",
  data() {
    return {
      about1: false,
      about2: false,
      about3: false
    };
  },
  methods: {
    click(index) {
      if (index == 1) {
        this.about1 = !this.about1;
        this.about2 = this.about3 = false;
      } else if (index == 2) {
        this.about2 = !this.about2;
        this.about1 = this.about3 = false;
      } else {
        this.about3 = !this.about3;
        this.about1 = this.about2 = false;
      }
    }
  }
};
</script>

<style scoped>
.section-text {
  color: #e5b865;
  margin-bottom: 0px;
  font-weight: bold;
  font-size: 1.8rem;
  padding: 30px;
}
.about-box {
  color: #ffffff;
  padding: 30px;
  display: block;
  text-align: center;
  width: 33.33%;
}
.about-bar {
  display: flex;
  overflow-y: scroll;
}
.about-icon-div {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
}
.about-icon {
  font-size: 50px;
  color: #e5b865;
}
.bg {
  background-color: #1d1d1d;
  width: 100%;
}
.abt-topic {
  color: #e5b865;
  font-weight: bold;
}
.abt-paragraph {
  color: rgb(194, 194, 194);
}

@media screen and (max-width: 425px) {
  .section-text {
    font-size: 1.5rem;
    padding: 30px 10px;
    text-align: center;
  }
  .about-box {
    color: #ffffff;
    width: 300px;
    border: 1px solid #e5b865;
    border-radius: 5px;
    flex: 0 0 auto;
    padding: 20px 20px 5px 20px;
    margin: 0 15px 0 0;
  }
  .about-bar {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 15px 15px 15px;
  }
  .about-icon-div {
    padding-bottom: 15px;
  }
}

/*
.left-box {
  border-left: 5px solid green;
}
.bar {
  position: relative;
  display: flex;
  transition: all 0.3s;
}
.abt-hover {
  background-color: transparent;
  padding: 50px 40px;
  width: 33.33%;
  transition: all 0.7s;
  height: 200px;
}
.abt-hover.open {
  background-color: #2e2e2e;
  transition: all 0.3s;
  padding: 50px 40px;
  width: 100%;
  height: 270px;
}
.abt-hover .leftbox{
    width: 100% !important;
    max-width: 100% !important;
    padding:30px;
}
.abt-hover.open .leftbox {
    width: 50% !important;
    max-width: 50% !important;
    padding:30px;
}
.abt-hover .rightbox {
    width: 0% !important;
    max-width: 0% !important;
}
.abt-hover.open .rightbox {
    width: 50% !important;
    max-width: 50% !important;
}
.img1 {
  background-image: url("/static/img/about/pic3.jpg");
  background-position: center;
  background-size: cover;
  height: auto;
  width: 100%;
  transition: all 0s;
} */
</style>
