<template>
  <div class="container bg">
    <div class="section-topic">
      <label class="section-text">{{ $t("message.section.about")}}</label>
    </div>
    <div class="about-bar">
      <div class="about-box">
        <div class="about-box-card">
          <h5 class="abt-topic">{{ $t("message.about.box1.title")}}</h5>
          <p class="abt-paragraph">{{ $t("message.about.box1.paragraph")}}</p>
        </div>
      </div>
      <div class="about-box">
        <div class="about-box-card">
          <h5 class="abt-topic">{{ $t("message.about.box2.title")}}</h5>
          <p class="abt-paragraph">{{ $t("message.about.box2.paragraph")}}</p>
        </div>
      </div>
      <div class="about-box">
        <div class="about-box-card">
          <h5 class="abt-topic">{{ $t("message.about.box3.title")}}</h5>
          <p class="abt-paragraph">{{ $t("message.about.box3.paragraph")}}</p>
        </div>
      </div>
    </div>
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
.section-topic {
  width: 100%;
  padding: 20px;
}
.container {
  padding: 0;
}
.section-text {
  color: rgb(194, 194, 194);
  margin-bottom: 0px;
  font-weight: bold;
  font-size: 1.8rem;
}
.about-box {
  color: #ffffff;
  padding: 50px 30px;
  display: block;
  text-align: center;
  transition: all 0.3s;
}

.about-box:hover {
  background-color: #292929;
  transition: all 0.3s;
}

.about-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
.bg::-webkit-scrollbar {
  display: none;
}
.abt-topic {
  color: #e5b865;
  font-weight: bold;
  font-family: "Chakra Petch";
  cursor: default;
}
.abt-paragraph {
  color: rgb(194, 194, 194);
  font-family: "Sarabun";
  font-size: 14px;
  cursor: default;
}

@media screen and (max-width: 425px) {
  .about-bar {
    display: flex;
    overflow-y: scroll;
  }
  .section-text {
    font-size: 1.5rem;
    padding: 10px 0px;
    text-align: center;
  }
  .about-box {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 100%;
    padding: 0;
    padding-right: 20px;
  }
  .about-box-card {
    padding: 20px 20px 5px 20px;
    color: #ffffff;
    width: 100%;
    height: 180px;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.43);
    -moz-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.43);
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.43);
    margin: 0 15px 0 0;
  }
  .about-bar {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 35px 30px;
  }
  .about-icon-div {
    padding-bottom: 15px;
  }
  .section-topic {
    padding: 20px 20px 0 20px;
  }
  .section-topic > label.section-text {
    padding-bottom: 0px;
  }
}
</style>
