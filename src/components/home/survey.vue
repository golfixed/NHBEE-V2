<template>
  <div class="container bg d-flex align-items-center justify-content-center flex-column">
    <div class="d-flex flex-column text-box">
      <span class="line1">{{ $t("message.survey.line1")}}</span>
      <span class="line2">{{ $t("message.survey.line2")}}</span>
    </div>
    <router-link to="/survey">
      <button class="d-flex align-items-center light-btn">
        {{ $t("message.survey.btn")}}
        <mdb-icon style="margin-left: 20px;" icon="arrow-right" />
      </button>
    </router-link>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
export default {
  name: "survey",
  components: {
    mdbIcon
  }
};
</script>

<style scoped>
.bg {
  background-image: url("/static/img/home/survey_bg.png");
  background-size: cover;
  padding: 50px;
}
.light-btn {
  border: 1px solid black;
  color: white;
  background-color: black;
  height: 45px;
  font-size: 22px;
  margin-top: 20px;
  padding: 0px 20px;
}
.line1 {
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
}
.line2 {
  color: #e5b865;
  font-size: 2.5rem;
  font-weight: bold;
}
.text-box {
  padding-bottom: 20px;
  text-align: center;
}
@media screen and (max-width: 425px) {
  .bg {
    padding: 50px 20px;
  }
  .line1 {
    font-size: 1.5rem;
  }
  .line2 {
    font-size: 2rem;
  }
  .text-box {
    padding-bottom: 0px;
  }
}
</style>
