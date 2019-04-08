<template>
  <div style="padding-top:50px;background-color: #1b1b1b;">
    <!-- HOME TEST
    <h3>{{ $t("message.test") }}</h3>-->
    <!-- HOME SLIDE IS HERE -->
    <div class="container homeslide">
      <homeslide/>
    </div>
    <div class="container">
      <homeabout/>
    </div>
  </div>
</template>

<script>
import layout_default from "@/layouts/main.vue";
import homeslide from "@/components/home/slide.vue";
import homeabout from "@/components/home/about.vue";
export default {
  name: "home_page",
  components: {
    homeslide,
    homeabout
  },
  created() {
    this.$emit(`update:layout`, layout_default);
  }
};
</script>

<style scoped>
.homeslide {
  height: auto;
}
</style>
