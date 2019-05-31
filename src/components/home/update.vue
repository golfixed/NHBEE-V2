<template>
  <div class="container bg">
    <div class="row" style="margin:0;">
      <span class="section-text">{{ $t("message.section.news")}}</span>
    </div>
    <div class="update-display">
      <div class="navigate-icon">
        <i class="fas fa-chevron-left arrow-color"></i>
      </div>
      <div class="row ud-bar">
        <div class="ud-box">
          <h5 class="ud-topic">{{ $t("message.update.date")}}</h5>
          <p class="ud-paragraph">"{{ $t("message.update.topic")}}"</p>
        </div>
        <div class="ud-box">
          <h5 class="ud-topic">{{ $t("message.update.date")}}</h5>
          <p class="ud-paragraph">"{{ $t("message.update.topic")}}"</p>
        </div>
        <div class="ud-box">
          <h5 class="ud-topic">{{ $t("message.update.date")}}</h5>
          <p class="ud-paragraph">"{{ $t("message.update.topic")}}"</p>
        </div>
      </div>
      <div class="navigate-icon">
        <i class="fas fa-chevron-right arrow-color"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeupdate"
};
</script>

<style scoped>
.update-display {
  display: grid;
  grid-template-columns: 7% 86% 7%;
}
.navigate-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section-text {
  color: rgb(194, 194, 194);
  margin-bottom: 0px;
  font-weight: bold;
  font-size: 1.8rem;
  padding: 30px;
}
.ud-box {
  color: #ffffff;
  padding: 0px 30px;
  display: block;
  text-align: left;
  width: 33.33%;
  transition: all 0.3s;
}
.ud-box:hover {
  background-color: #292929;
  transition: all 0.3s;
}
.ud-bar {
  display: flex;
  overflow-y: scroll;
}
.arrow-color {
  color: #e5b865;
}
.bg {
  background-color: #1d1d1d;
  width: 100%;
  display: block;
  padding: 0 0 30px 0;
}
.ud-topic {
  color: rgb(150, 150, 150);
  margin-bottom: 20px;
}
.ud-paragraph {
  color: rgb(220, 220, 220);
  font-weight: bold;
}

@media screen and (max-width: 425px) {
  .section-text {
    font-size: 1.5rem;
    padding: 30px 10px;
    text-align: center;
  }
  .ud-box {
    color: #ffffff;
    width: 290px;
    border: 1px solid #e5b865;
    flex: 0 0 auto;
    padding: 20px 20px 5px 20px;
    margin: 0 15px 0 0;
  }
  .ud-bar {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 15px 15px 15px;
  }
}
</style>
