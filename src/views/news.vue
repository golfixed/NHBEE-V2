<template>
  <div class="home-display" style="padding-top:80px;background-color: rgb(51, 51, 51);">
    <div class="header-bg-contact d-flex align-items-center">
      <div class="container" style="margin-top: -65px;">
        <div class="d-flex flex-column">
          <span class="page-title">{{ $t("message.pageheader.news.title") }}</span>
          <span class="page-subtitle">{{ $t("message.pageheader.news.subtitle") }}</span>
        </div>
      </div>
    </div>
    <div class="container page-start">
      <div class="page-body" style="overflow: hidden;">
        <div class="news-display">
          <a href class="news-item" v-for="news in news_list" :key="'news_' + news.id">
            <img class="news-img" :src="news.pictureURL" />
            <div class="news-detail">
              <h4 class="news-title" v-if="currentLang === 'th'">{{ news.th.title }}</h4>
              <h4 class="news-title" v-if="currentLang === 'en'">{{ news.en.title }}</h4>
              <h5 class="news-desc" v-if="currentLang === 'th'">{{ news.th.description }}</h5>
              <h5 class="news-desc" v-if="currentLang === 'en'">{{ news.en.description }}</h5>
            </div>
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
import axios from "axios";
export default {
  name: "aboutuspage",
  created() {
    this.$emit(`update:layout`, layout_default);
    this.fetchNewsList();
  },
  components: {
    teamcard,
    mdbIcon
  },
  data() {
    return {
      currentPage: 1,
      news_data: [],
      news_list: [],
      count_current: "",
      count_all: "",
      status: 1,
      range: 6
    };
  },
  methods: {
    fetchNewsList: function() {
      axios
        .get(
          "http://10.35.30.140/api/news?page=" +
            this.currentPage +
            "&limit=" +
            this.range
        )
        .then(res => {
          this.news_data = res.data;
          this.news_list = this.news_data.description.data;
          this.count_current = this.news_data.page.now;
          this.count_all = this.news_data.page.all;
        });
    }
  },
  computed: {
    currentLang: function() {
      return this.$i18n.locale;
    }
  }
};
</script>

<style scoped>
.news-item {
  width: 100%;
  height: 240px;
  position: relative;
  transition: all 0.3s;
  border-radius: 5px;
  overflow: hidden;
}
.news-item:hover {
  -webkit-box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.22);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.1s;
}
.news-img {
  width: 100%;
}
.news-detail {
  position: absolute;
  bottom: 0;
  background-color: #fff;
  padding: 10px;
}
.news-title {
  font-size: 1em;
  color: #292929;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 600;
  line-height: 20px;
  max-height: 18px;
}
.news-desc {
  font-size: 1em;
  color: #585858;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  line-height: 20px;
  max-height: 40px;
}
.team-title {
  text-align: left;
  border: solid #ffffff61;
  border-width: 0 0 0 2px;
  /* border-radius: 10px; */
  margin: 30px 0 40px 20px;
  padding-left: 15px;
}
.team-title-text {
  color: #c0c0c0;
}
.team-title-sub {
  color: #ffffff;
  font-weight: bold;
}
.team-title-para {
  color: #c0c0c0;
}
.header-bg-contact {
  height: 280px;
  background-image: url("/static/img/news/bg.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
.about-pic {
  margin: 0px 0px 10px 0px;
  width: 100%;
  border-radius: 5px;
}
.topic {
  margin: 10px 0px 10px 0px;
  padding-left: 10px;
  color: #e3b800;
  font-weight: bold;
  font-size: 20px;
  border-color: #e3b800;
  border: solid;
  border-width: 0px 0px 0px 3px;
}
.about-header-bg {
  height: 280px;
  background-image: url("/static/img/about/bg.jpg");
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
.news-display {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}

.aboutimg-div {
  border-radius: 5px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}
.top-fix {
  margin-top: -310px;
}

/* TABLET */
@media screen and (max-width: 1024px) {
  .news-display {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
  .page-body {
    border-radius: 0;
    padding: 20px;
  }
}
@media screen and (max-width: 768px) {
  .news-display {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
  .page-body {
    border-radius: 0;
    padding: 20px;
  }
}
/* MOBILE */
@media screen and (max-width: 425px) {
  .news-display {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
  .page-body {
    border-radius: 0;
    padding: 20px;
  }
  .team-title {
    margin: 30px 0 40px 0px;
  }
}
</style>
