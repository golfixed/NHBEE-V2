<template>
  <div class="container-fluid bg" style="padding: 10px;  transition: all 0.3s;">
    <div class="row" style="width: 500px; margin-bottom:20px;">
      <h3
        style="color: white;padding-left: 50px;margin-bottom:0px;font-weight:bold;"
      >New release - most recent</h3>
    </div>
    <div class="bar" style=" text-align: start; overflow:hidden;">
      <div class="abt-hover">
        <h5 class="abt-topic">New1</h5>
        <p
          class="abt-paragraph"
        >To become a center of excellence in research.</p>
      </div>
      <div class="abt-hover">
        <h5 class="abt-topic">New2</h5>
        <p
          class="abt-paragraph"
        >Deep tech researches of honeybees for multidisciplinary approach.</p>
      </div>
      <div class="abt-hover">
        <h5 class="abt-topic">New3</h5>
        <p
          class="abt-paragraph"
        >Research on adaptive behavioral ecology and sociobiology in honeybees.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeabout"
};
</script>

<style scoped>
.bg {
  background-color: #1d1d1d;
}
.left-bd {
  border-left: 5px solid green;
}
.abt-topic {
  color: #e5b865;
  font-weight: bold;
}
.abt-paragraph {
  color: white;
}
.bar {
  position: relative;
  display: flex;
  transition: all 0.3s;
}
.abt-hover {
  background-color: transparent;
  padding: 50px 40px;
  width: 33.33%;
  transition: all 0.3s;
  height: 200px;
}
.abt-hover:hover {
  background-color: #2e2e2e;
  transition: all 0.3s;
  padding: 50px 40px;
  width: calc(33.33% + 60px);
  height: 270px;
}
</style>
