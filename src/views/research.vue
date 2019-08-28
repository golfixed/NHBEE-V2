<template>
  <div class="home-display" style="padding-top:80px;background-color: rgb(51, 51, 51);">
    <div class="header-bg-research d-flex align-items-center">
      <div class="container" style="margin-top: -65px;">
        <div class="d-flex flex-column">
          <span class="page-title">{{ $t("message.pageheader.research.title") }}</span>
          <span class="page-subtitle">{{ $t("message.pageheader.research.subtitle") }}</span>
        </div>
      </div>
    </div>
    <div class="container page-start">
      <div class="page-body" style="overflow: hidden;">
        <h3 class="section-text">{{ $t("message.research.section.search") }}</h3>
        <div class="research-searchbar">
          <input class="search-input" v-model="seachkey" :placeholder="searchPlace" />
          <i class="fas fa-search search-icon"></i>
        </div>
        <h3
          class="section-text"
          style="margin-top: 20px;"
        >{{ $t("message.research.section.latest") }}</h3>
        <div class="research-display">
          <a href class="research-item">
            <h4 class="research-item-title">นี่คือหัวข้อวิจัยแบบจำลองเด้อจ้า</h4>
            <span class="research-item-open-btn">
              <i class="fas fa-external-link-alt"></i>
            </span>
          </a>
          <a href class="research-item">
            <h4 class="research-item-title">นี่คือหัวข้อวิจัยแบบจำลองเด้อจ้า</h4>
            <span class="research-item-open-btn">
              <i class="fas fa-external-link-alt"></i>
            </span>
          </a>
          <a href class="research-item">
            <h4 class="research-item-title">นี่คือหัวข้อวิจัยแบบจำลองเด้อจ้า</h4>
            <span class="research-item-open-btn">
              <i class="fas fa-external-link-alt"></i>
            </span>
          </a>
          <a href class="research-item">
            <h4 class="research-item-title">นี่คือหัวข้อวิจัยแบบจำลองเด้อจ้า</h4>
            <span class="research-item-open-btn">
              <i class="fas fa-external-link-alt"></i>
            </span>
          </a>
          <a href class="research-item">
            <h4 class="research-item-title">นี่คือหัวข้อวิจัยแบบจำลองเด้อจ้า</h4>
            <span class="research-item-open-btn">
              <i class="fas fa-external-link-alt"></i>
            </span>
          </a>
          <a href class="research-item">
            <h4 class="research-item-title">นี่คือหัวข้อวิจัยแบบจำลองเด้อจ้า</h4>
            <span class="research-item-open-btn">
              <i class="fas fa-external-link-alt"></i>
            </span>
          </a>
          <a href class="research-item">
            <h4 class="research-item-title">นี่คือหัวข้อวิจัยแบบจำลองเด้อจ้า</h4>
            <span class="research-item-open-btn">
              <i class="fas fa-external-link-alt"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
import teamcard from "@/components/team/teamcard.vue";
import layout_default from "@/layouts/main.vue";
export default {
  name: "aboutuspage",
  created() {
    this.$emit(`update:layout`, layout_default);
  },
  components: {
    teamcard,
    mdbIcon
  },
  data() {
    return {
      searchKey: ""
    };
  },
  computed: {
    searchPlace: function() {
      return this.$t("message.research.placeholder");
    }
  }
};
</script>

<style scoped>
.research-searchbar {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  right: 0;
  color: #a2a2a2;
  margin-right: 20px;
}
.search-input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid gainsboro;
  margin: 10px 0;
  height: 40px;
  padding-left: 20px;
}
.research-item {
  position: relative;
  display: flex;
  transition: all 0.1s;
  padding: 20px 10px;
  border: 1px solid #e4e4e4;
  border-width: 0 0 1px 0;
}
.research-item:first-child {
  border-width: 1px 0 1px 0;
}
.research-item:hover {
  background-color: rgb(241, 241, 241);
  transition: all 0.1s;
}
.section-text {
  font-size: 1.25rem;
  text-transform: uppercase;
  color: grey;
}
.research-item-open-btn {
  position: absolute;
  right: 0;
  color: rgb(142, 142, 142);
  margin-right: 10px;
}
.research-item-title {
  font-size: 1em;
  color: #262626;
  margin: 0;
}
.header-bg-research {
  height: 280px;
  background-image: url("/static/img/research/bg.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
.col-style {
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
}
.page-body {
  height: fit-content;
  border-radius: 5px;
  padding: 30px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.19);
}
.research-display {
  display: block;
  margin-top: 20px;
}
.top-fix {
  margin-top: -310px;
}

/* TABLET */
@media screen and (max-width: 1024px) {
  .page-body {
    border-radius: 0;
    padding: 20px;
  }
}
/* MOBILE */
@media screen and (max-width: 425px) {
  .page-body {
    border-radius: 0;
    padding: 20px;
  }
}
</style>
