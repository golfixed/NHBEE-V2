<template>
  <div class="main-body" id="app" style="font-family: 'NotoThai', sans-serif;">
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layout: "div"
    };
  }
};
</script>

<style>
@font-face {
  font-family: "NotoThai";
  src: url("../static/fonts/NotoSansThai-unhinted/NotoSansThai-Regular.ttf");
}
@font-face {
  font-family: "NotoThai-paragraph";
  src: url("../static/fonts/NotoSerifThai-unhinted/NotoSerifThai-Regular.ttf");
}

a {
  color: white;
}
a:hover {
  color: white;
}
button,
button > p,
button > h1,
button > h2,
button > h3,
button > h4,
button > h5,
button > label,
button > span {
  user-select: none;
}
</style>
