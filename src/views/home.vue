<template>
  <div
    class="home-display"
    style="padding-top:80px;background-color: rgb(51, 51, 51);"
    pointer-events="none"
  >
    <div class="header-bg-home d-flex align-items-center">
      <div class="container" style="margin-top: -65px;padding: 0 15px 0 15px;">
        <div class="d-flex flex-column">
          <span class="page-title">{{ $t("message.pageheader.home.title") }}</span>
          <span class="page-subtitle">{{ $t("message.pageheader.home.subtitle") }}</span>
        </div>
      </div>
    </div>
    <div class="home-block page-start">
      <homeslide />
    </div>
    <div class="home-block">
      <homeabout />
    </div>
    <div class="home-block">
      <survey />
    </div>
    <div class="home-block">
      <feature />
    </div>
    <div class="home-block">
      <update />
    </div>
    <div class="home-block">
      <survey2 />
    </div>
  </div>
</template>

<script>
import layout_default from "@/layouts/main.vue";
import homeslide from "@/components/home/slide.vue";
import homeabout from "@/components/home/about.vue";
import survey from "@/components/home/survey.vue";
import survey2 from "@/components/home/survey2.vue";
import feature from "@/components/home/features.vue";
import update from "@/components/home/update.vue";
export default {
  name: "home_page",
  components: {
    homeslide,
    homeabout,
    survey,
    survey2,
    feature,
    update
  },
  data() {
    return {
      golf: {}
    };
  },
  created() {
    this.$emit(`update:layout`, layout_default);
  }
};
</script>

<style scoped>
.header-bg-home {
  height: 280px;
  background-image: url("/static/img/home.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (min-width: 769px) {
  .res-height {
    height: 350px;
  }
}
@media screen and (max-width: 768px) {
  .res-height {
    height: 250px;
  }
}
@media screen and (max-width: 425px) {
  .res-height {
    height: 150px;
  }
}
</style>
