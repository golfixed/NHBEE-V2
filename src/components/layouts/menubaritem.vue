<template>
  <router-link v-if="link" :to="link">
    <div class="menubar-item" @click="menubarToggle();">{{label}}</div>
  </router-link>
</template>

<script>
export default {
  name: "test",
  props: {
    label: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  },
  methods: {
    menubarToggle() {
      this.$store.commit("MENU_TOGGLE");
    }
  }
};
</script>

<style scoped>
.menubar-item {
  padding: 10px;
  transition: all 0.1s;
}
.menubar-item:hover {
  color: #e5b764;
}
</style>
