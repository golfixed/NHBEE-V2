<template>
  <div class="teamcard">
    <div class="profile-img-div">
      <img class="profile-img" :src="pictureURL" alt="profile-photo" />
      <!-- <div class="hexTop"></div>
      <div class="hexBottom"></div>-->
    </div>
    <div class="detail-div">
      <p class="name">{{name}}</p>
      <p class="position">{{position}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "teamcard",
  props: ["pictureURL", "name", "position"]
};
</script>

<style scoped>
.teamcard {
  overflow: hidden;
}
.profile-img-div {
  max-width: 100%;
  max-height: 200px;
  display: flex;
  justify-content: center;
}
.profile-img {
  /* width: 100%; */
  width: auto !important; /*Keep the aspect ratio of the image*/
  height: 150px !important;
  border-radius: 50%;
}
.name {
  color: #585858;
  font-weight: bold;
}
.position {
  color: #868686;
}
.name,
.position {
  font-size: 14px;
  text-align: center;
  margin: 0;
}
.detail-div {
  padding: 10px;
}
@media screen and (max-width: 768px) {
  .profile-img {
    /* width: 100%; */
    width: auto !important; /*Keep the aspect ratio of the image*/
    height: 90px !important;
    /* border-radius: 50%; */
  }
}

.hexagon {
  position: relative;
  width: 300px;
  height: 173.21px;
  margin: 86.6px 0;
  background-image: url("/static/img/team/profile.png");
  background-size: auto 346.4102px;
  background-position: center;
}

.hexTop,
.hexBottom {
  position: absolute;
  z-index: 1;
  width: 212.13px;
  height: 212.13px;
  overflow: hidden;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background: inherit;
  left: 43.93px;
}

/*counter transform the bg image on the caps*/
.hexTop:after,
.hexBottom:after {
  content: "";
  position: absolute;
  width: 300px;
  height: 173.20508075688775px;
  -webkit-transform: rotate(45deg) scaleY(1.7321) translateY(-86.6025px);
  -ms-transform: rotate(45deg) scaleY(1.7321) translateY(-86.6025px);
  transform: rotate(45deg) scaleY(1.7321) translateY(-86.6025px);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  background: inherit;
}

.hexTop {
  top: -106.066px;
}

.hexTop:after {
  background-position: center top;
}

.hexBottom {
  bottom: -106.066px;
}

.hexBottom:after {
  background-position: center bottom;
}

.hexagon:after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0;
  width: 300px;
  height: 173.2051px;
  z-index: 2;
  background: inherit;
}
</style>
