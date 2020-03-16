<template>
  <div class="main-layout">
    <navbar />
    <slot />
    <footerall />
  </div>
</template>

<script>
import navbar from "@/components/layouts/navbar.vue";
import footerall from "@/components/layouts/footer.vue";
export default {
  name: "main_layout",
  components: {
    navbar,
    footerall
  }
};
</script>

<style>
.home-block {
  width: 100vw;
}
.main-layout {
  width: 100vw;
  max-width: 100vw;
  display: grid;
}
a,
li,
ul {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
.nav-searchbar {
  border: 1px solid grey;
  padding: 5px;
}
.page-paper {
  -webkit-box-shadow: -1px 1px 20px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 20px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 20px -1px rgba(0, 0, 0, 0.75);
}
.page-start {
  padding: 0px;
  margin-top: -70px;
}
.home-display {
  width: 100vw;
  max-width: 100vw;
  padding-bottom: 40px;
  display: grid;
  grid-template-rows: auto auto auto auto auto auto;
}

.page-title {
  color: #e3b800;
  font-size: 2.5rem;
  font-weight: bold;
}
.page-subtitle {
  color: #5d5d5d;
  font-size: 1.8rem;
  font-weight: bold;
}

.page-title,
.page-subtitle {
  text-align: left;
}
.page-header {
  height: 280px;
}
.popup-mask {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
@media screen and (max-width: 425px) {
  .home-display {
    padding-bottom: 0px;
  }
  .page-start {
    padding: 0;
    margin-top: 0;
  }
  .page-header-title {
    padding-left: 30px;
    margin-top: 0 !important;
  }
  .page-header {
    height: 150px;
  }
}
</style>
