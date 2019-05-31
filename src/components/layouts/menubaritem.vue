<template>
  <router-link to="link">
    <div class="menubar-item">{{label}}</div>
  </router-link>
</template>

<script>
export default {
  name: "test",
  props: ["label", "link"]
};
</script>

<style scoped>
.menubar-item {
    padding: 10px;
}
</style>
