<template>
  <div class="home-display" style="padding-top:80px;background-color: rgb(51, 51, 51);">
    <div class="header-bg-home d-flex align-items-center">
      <div class="container" style="margin-top: -65px;">
        <div class="d-flex flex-column">
          <span class="page-title">{{ $t("message.pageheader.home.title") }}</span>
          <span class="page-subtitle">{{ $t("message.pageheader.home.subtitle") }}</span>
        </div>
      </div>
    </div>
    <div class="container page-start">
      <homeslide />
    </div>
    <div style="width: 100vw;">
      <homeabout />
    </div>
    <div class="container" style="padding:0px;">
      <survey />
    </div>
    <div class="container" style="padding:0px;display: flex;justify-content: center;">
      <feature />
    </div>
    <div class="container" style="width:100vw;padding:0;">
      <update />
    </div>
    <div class="container" style="padding:0px;">
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
