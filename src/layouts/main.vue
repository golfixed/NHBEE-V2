<template>
  <div style="margin: 0px; padding: 0px;">
    <navbar/>
    <slot/>
    <footerall/>
  </div>
</template>

<script>
import navbar from "@/components/layouts/navbar.vue";
import footerall from '@/components/layouts/footer.vue';
export default {
  name: "main_layout",
  components: {
    navbar,
    footerall
  }
};
</script>

<style>
</style>
