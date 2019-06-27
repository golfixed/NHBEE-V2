<template>
  <router-link :to="link" >
    <div class="menubar-item" @click="menubarToggle();">{{label}}</div>
  </router-link>
</template>

<script>
export default {
  name: "test",
  props: ["label", "link"],
  methods: {
        menubarToggle() {
        this.$store.commit("MENU_TOGGLE")
    },
  }
};
</script>

<style scoped>
.menubar-item {
  padding: 10px;
}
</style>
