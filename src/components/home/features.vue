<template>
  <div class="container">
    <div class="row" style="width:100%;margin:0;padding:0;">
      <div
        class="col-lg-4 col-sm-4 col-xs-12 feature f1 d-flex align-items-center justify-content-center flex-column"
      >
        <h4 class="fea-topic d-flex justify-content-center">{{ $t("message.feature.item1.title") }}</h4>
        <p class="fea-paragraph">{{ $t("message.feature.item1.description") }}</p>
        <router-link to="/contact">
          <button class="d-flex align-items-center light-btn fea-btn" style="padding: 0px 20px;">
            {{ $t("message.feature.item1.btn") }}
            <mdb-icon style="margin-left: 20px;" icon="arrow-right" />
          </button>
        </router-link>
      </div>
      <div
        class="col-lg-4 col-sm-4 col-xs-12 feature f2 d-flex align-items-center justify-content-center flex-column"
      >
        <h4 class="fea-topic d-flex justify-content-center">{{ $t("message.feature.item2.title") }}</h4>
        <p class="fea-paragraph">{{ $t("message.feature.item2.description") }}</p>
        <router-link to="/research">
          <button class="d-flex align-items-center light-btn fea-btn" style="padding: 0px 20px;">
            {{ $t("message.feature.item2.btn") }}
            <mdb-icon style="margin-left: 20px;" icon="arrow-right" />
          </button>
        </router-link>
      </div>
      <div
        class="col-lg-4 col-sm-4 col-xs-12 feature f3 d-flex align-items-center justify-content-center flex-column"
      >
        <h4 class="fea-topic d-flex justify-content-center">{{ $t("message.feature.item3.title") }}</h4>
        <p class="fea-paragraph">{{ $t("message.feature.item3.description") }}</p>
        <router-link to="/team">
          <button class="d-flex align-items-center light-btn fea-btn" style="padding: 0px 20px;">
            {{ $t("message.feature.item3.btn") }}
            <mdb-icon style="margin-left: 20px;" icon="arrow-right" />
          </button>
        </router-link>
      </div>
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
.container {
  padding: 0;
}
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
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/static/img/home/ql/contact.jpg");
  background-size: cover;
  background-position: center;
  transition: all 0.3s;
}
.f2 {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/static/img/home/ql/research.jpg");
  background-size: cover;
  background-position: center;
  transition: all 0.3s;
}
.f3 {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/static/img/home/ql/staff.jpg");
  background-size: cover;
  background-position: center;
  transition: all 0.3s;
}
.f1:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url("/static/img/home/ql/contact.jpg");
  background-size: cover;
  background-position: center;
}
.f2:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url("/static/img/home/ql/research.jpg");
  background-size: cover;
  background-position: center;
}
.f3:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url("/static/img/home/ql/staff.jpg");
  background-size: cover;
  background-position: center;
}

.feature {
  color: white;
  background-color: transparent;
  padding: 40px;
  height: 300px;
}

@media screen and (max-width: 425px) {
  .feature {
    height: fit-content;
  }
}
.fea-topic {
  color: #e5b865;
  font-weight: bold;
}
.fea-paragraph {
  color: white;
  overflow: hidden;
}
</style>
