<template>
  <div class="box row">
    <div
      class="col-lg-4 col-sm-4 col-xs-12 feature f1 d-flex align-items-center justify-content-center flex-column"
    >
      <h4 class="fea-topic d-flex justify-content-center">CONTACT US</h4>
      <p
        class="fea-paragraph"
      >To become a center of excellence in research and extension of developing and implementing the utilization of native honeybees and pollinators.</p>
      <button class="d-flex align-items-center light-btn fea-btn" style="padding: 0px 20px;">
        CONTACT PAGE
        <mdb-icon style="margin-left: 20px;" icon="arrow-right"/>
      </button>
    </div>
    <div
      class="col-lg-4 col-sm-4 col-xs-12 feature f2 d-flex align-items-center justify-content-center flex-column"
    >
      <h4 class="fea-topic d-flex justify-content-center">RESEARCH</h4>
      <p
        class="fea-paragraph"
      >To become a center of excellence in research and extension of developing and implementing the utilization of native honeybees and pollinators.</p>
      <button class="d-flex align-items-center light-btn fea-btn" style="padding: 0px 20px;">
        EXPLORE RESEARCHES
        <mdb-icon style="margin-left: 20px;" icon="arrow-right"/>
      </button>
    </div>
    <div
      class="col-lg-4 col-sm-4 col-xs-12 feature f3 d-flex align-items-center justify-content-center flex-column"
    >
      <h4 class="fea-topic d-flex justify-content-center">PRO STAFF</h4>
      <p
        class="fea-paragraph"
      >To become a center of excellence in research and extension of developing and implementing the utilization of native honeybees and pollinators.</p>
      <button class="d-flex align-items-center light-btn fea-btn" style="padding: 0px 20px;">
        GET KNOW MORE
        <mdb-icon style="margin-left: 20px;" icon="arrow-right"/>
      </button>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
export default {
  name: "features",
  components: {
    mdbIcon
  }
};
</script>

<style scpoed>
.light-btn {
  border: 1px solid black;
  color: white;
  background-color: black;
  height: 45px;
  font-size: 1rem;
  margin: 20px 0px;
}
.box {
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.f1 {
  background-image: url("/static/img/home/ql/contact.jpg");
  background-size: cover;
  background-position: center;
  transition: all 0.4s;
}
.f2 {
  background-image: url("/static/img/home/ql/research.jpg");
  background-size: cover;
  background-position: center;
  transition: all 0.4s;
}
.f3 {
  background-image: url("/static/img/home/ql/staff.jpg");
  background-size: cover;
  background-position: center;
  transition: all 0.4s;
}

.f1:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/static/img/home/ql/contact.jpg");
  background-size: cover;
  background-position: center;
  transition: all 0.4s;
}
.f2:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/static/img/home/ql/research.jpg");
  background-size: cover;
  background-position: center;
  transition: all 0.4s;
}
.f3:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/static/img/home/ql/staff.jpg");
  background-size: cover;
  background-position: center;
  transition: all 0.4s;
}

.feature {
  color: white;
  background-color: transparent;
  transition: all 0.4s;
  padding: 40px;
}
.feature:hover {
  width: 33.33%;
  height: auto;
  background-color: grey;
  transition: all 0.4s;
  padding: 40px;
}

.fea-topic {
  color: #e5b865;
  font-weight: bold;
}
.fea-paragraph {
  color: white;
  height: 0;
  overflow: hidden;
  transition: all 0.4s;
}

/* .feature > .fea-btn {
    display: none !important;
} */

.feature:hover > .fea-paragraph {
  display: inherit !important;
  transition: all 0.4s;
  height: 100%;
}
.feature:hover > .fea-btn {
  transition: all 0.4s;
  height: 45px;
  margin: 20px 0;
}
</style>
