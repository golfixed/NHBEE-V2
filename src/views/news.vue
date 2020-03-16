<template>
  <div class="home-display" style="padding-top:80px;background-color: rgb(51, 51, 51);">
    <div class="header-bg-contact page-header d-flex align-items-center">
      <div class="container page-header-title" style="margin-top: -65px;">
        <div class="d-flex flex-column">
          <span class="page-title">{{ $t("message.pageheader.news.title") }}</span>
          <span class="page-subtitle">{{ $t("message.pageheader.news.subtitle") }}</span>
        </div>
      </div>
    </div>
    <div class="container page-start">
      <div
        class="page-body"
        style="overflow: hidden;"
        v-if="this.news_list.length > 0 && this.isSelected == false"
      >
        <div class="news-display">
          <div
            href
            class="news-item"
            v-for="news in news_list"
            :key="'news_' + news.id"
            v-on:click="getNews(news.id);"
          >
            <img class="news-img" :src="news.pictureURL" />
            <div class="news-detail">
              <h4 class="all-news-title" v-if="currentLang === 'th'">{{ news.th.title }}</h4>
              <h4 class="all-news-title" v-if="currentLang === 'en'">{{ news.en.title }}</h4>
              <h5 class="all-news-desc" v-if="currentLang === 'th'">{{ news.th.description }}</h5>
              <h5 class="all-news-desc" v-if="currentLang === 'en'">{{ news.en.description }}</h5>
            </div>
          </div>
        </div>
        <div class="news-home-pagination" style="margin-top: 20px;">
          <button
            class="pagination-btn prev-btn"
            v-if="this.page.now != 1"
            @click="changePage('previous');"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <div
            v-if="currentLang == 'th'"
            class="pagination-current"
          >{{page.now}} จาก {{page.all}} หน้า</div>
          <div
            v-if="currentLang == 'en'"
            class="pagination-current"
          >{{page.now}} From {{page.all}} Page(s)</div>
          <button
            class="pagination-btn next-btn"
            v-if="this.page.now != this.page.all"
            @click="changePage('next');"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div
        class="page-body"
        style="overflow: hidden;"
        v-if="this.news_list.length <= 0 && this.$store.state.selectedNews == ''"
      >
        <label class="no-news-text">
          <i class="fas fa-meh-blank"></i>
          {{ $t("message.system.noNews") }}
        </label>
        <div class="btn-container">
          <router-link to="/">
            <button class="back-home-btn" v-on:click="backHome();">
              <i class="fas fa-arrow-left" style="margin-right: 5px;"></i>
              {{ $t("message.system.back") }}
            </button>
          </router-link>
        </div>
      </div>

      <div
        class="page-body selected-news-display"
        style="overflow: hidden;"
        v-if="this.isSelected == true"
      >
        <div class="selected-article-display">
          <div class="cover-block-img">
            <img :src="this.selectedNews.pictureURL" />
          </div>
          <h3 class="select-news-title" v-if="currentLang == 'en'">{{this.selectedNews.en.title}}</h3>
          <h3 class="select-news-title" v-if="currentLang == 'th'">{{this.selectedNews.th.title}}</h3>
          <div class="published-date">
            <p
              style="margin-bottom:0;"
              v-if="currentLang == 'en'"
            >Posted on {{this.selectedNews.publishDate}}</p>
            <p
              style="margin-bottom:0;"
              v-if="currentLang == 'th'"
            >เผยแพร่วันที่ {{this.selectedNews.publishDate}}</p>
          </div>
          <hr />
          <div v-if="currentLang == 'th'">
            <div v-for="(itemth, index) in selectedNews_article_th" :key="index">
              <div class="article-block">
                <div class="article-img-div">
                  <img
                    class="article-block-img"
                    v-on:click="previewImg(itemth.picture);"
                    :src="itemth.picture"
                    v-if="itemth.picture"
                  />
                </div>
                <p class="article-block-text" v-if="itemth.text">{{ itemth.text }}</p>
              </div>

              <div class="popup-mask" v-on:click="imgPreview = ''" v-if="imgPreview">
                <button class="popup-button" v-on:click="imgPreview = ''">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="popup-container" v-if="imgPreview">
                <div class="popup-img-container">
                  <img :src="imgPreview" />
                </div>
              </div>
            </div>
          </div>

          <div v-if="currentLang == 'en'">
            <div v-for="(itemen, index) in selectedNews_article_en" :key="index">
              <div class="article-block">
                <div class="article-img-div">
                  <img
                    class="article-block-img"
                    v-on:click="previewImg(itemen.picture);"
                    :src="itemen.picture"
                    v-if="itemen.picture"
                  />
                </div>
                <p class="article-block-text" v-if="itemen.text">{{ itemen.text }}</p>
              </div>
              <div class="popup-mask" v-on:click="imgPreview = ''" v-if="imgPreview">
                <button class="popup-button" v-on:click="imgPreview = ''">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="popup-container" v-if="imgPreview">
                <div class="popup-img-container">
                  <img :src="imgPreview" />
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div class="author-name">
            <p
              style="margin-bottom:10px;"
              v-if="currentLang == 'en'"
            >Author: {{this.selectedNews.author}}</p>
            <p
              style="margin-bottom:10px;"
              v-if="currentLang == 'th'"
            >เขียนโดย {{this.selectedNews.author}}</p>
          </div>
        </div>

        <!-- <div class="other-news-list">

          //////NEXT UPDDATE//////
          <h4>ข่าวอื่น ๆ</h4>
          <div class="other-news-display">
            <div
              href
              class="news-item other-news-item"
              v-for="news in otherNews"
              :key="'news_' + news.id"
              v-on:click="getNews(news.id);"
            >
              <img class="news-img" :src="news.pictureURL" />
              <div class="news-detail">
                <h4 class="all-news-title" v-if="currentLang === 'th'">{{ news.th.title }}</h4>
                <h4 class="all-news-title" v-if="currentLang === 'en'">{{ news.en.title }}</h4>
                <h5 class="all-news-desc" v-if="currentLang === 'th'">{{ news.th.description }}</h5>
                <h5 class="all-news-desc" v-if="currentLang === 'en'">{{ news.en.description }}</h5>
              </div>
            </div>
          </div>
        </div>-->
        <div class="back-news-div">
          <button class="back-home-btn" v-on:click="backToNewsHome();" v-if="currentLang == 'th'">
            <i class="fas fa-arrow-left" style="margin-right: 5px;"></i>ย้อนกลับ
          </button>
          <button class="back-home-btn" v-on:click="backToNewsHome();" v-if="currentLang == 'en'">
            <i class="fas fa-arrow-left" style="margin-right: 5px;"></i>Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
import teamcard from "@/components/team/teamcard.vue";
import layout_default from "@/layouts/main.vue";
import axios from "@/axios.js";
export default {
  name: "newspage",
  created() {
    this.$emit(`update:layout`, layout_default);
    this.fetchNewsList();
    if (this.$store.state.selectedNews >= 0)
      this.getNews(this.$store.state.selectedNews);
  },
  components: {
    teamcard,
    mdbIcon
  },
  data() {
    return {
      page: {
        now: 1,
        all: ""
      },
      news_data: [],
      news_list: [],
      count_current: "",
      count_all: "",
      status: 1,
      range: 6,
      selectedNews: {},
      isSelected: false,
      selectedNews_article_th: [],
      selectedNews_article_en: [],
      imgPreview: "",
      otherNews: [],
      selectedID: ""
    };
  },
  methods: {
    previewImg(url) {
      this.imgPreview = url;
    },
    fetchNewsList: function() {
      axios
        .get("/news?page=" + this.page.now + "&limit=" + this.range)
        .then(res => {
          this.news_data = res.data;
          this.news_list = this.news_data.description.data;
          this.page.all = this.news_data.page.all;
        })
        .catch(error => {
          console.error(error.response);
        });
    },
    changePage: function(direction) {
      if (direction === "previous") {
        if (this.page.now < this.page.all) {
          this.page.now = this.page.now;
        } else {
          this.page.now = this.page.now - 1;
          this.fetchNewsList();
        }
      } else if (direction === "next") {
        if (this.page.now >= this.page.all) {
          this.page.now = this.page.now;
        } else {
          this.page.now = this.page.now + 1;
          this.fetchNewsList();
        }
      } else {
        this.page.now = 1;
      }
    },
    getNews: function(id) {
      axios.get("/news/" + id).then(res => {
        this.selectedNews = res.data;
        this.selectedNews_article_th = this.selectedNews.th.article;
        this.selectedNews_article_en = this.selectedNews.en.article;
        this.isSelected = true;
      });
    },
    backToNewsHome: function() {
      this.$store.commit("SELECT_NEWS", "");
      this.fetchNewsList();
      window.scrollTo(500, 0);
      this.isSelected = false;
      this.selectedNews = [];
    },
    backHome: function() {
      this.$store.commit("SELECT_NEWS", "");
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
.popup-mask {
  position: absolute;
  background-color: black;
  opacity: 0.75;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
}
.popup-container {
  background-color: #fff;
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
}
.popup-img-container {
  max-height: 80vh;
  max-width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-img-container > img {
  height: 80vh;
}
.popup-button {
  position: absolute;
  color: #fff;
  top: 20px;
  right: 20px;
  z-index: 6;
  border: 0;
  background: none;
  user-select: none;
  outline: none;
}
.select-news-title {
  font-size: 35px;
  margin: 20px 0 10px 0;
}
.published-date > p {
  color: grey;
}
.back-news-div {
  display: flex;
  justify-content: center;
  /* grid-column: span 2; */
}
.cover-block-img {
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background-color: #d2d2d2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  overflow: hidden;
}
.cover-block-img > img {
  width: 100%;
}
.article-block {
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.article-block-img {
  border: 5px solid #fff;
  height: 300px;
  margin: 20px 0;
}
.article-block-img:hover {
  border: 5px solid #707070;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
  cursor: pointer;
}
.article-block-text {
  text-indent: 20px;
  margin-top: 1rem;
}
.selected-article-display {
  display: block;
}
button {
  outline: none;
}
.btn-container {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
.back-home-btn {
  background-color: #d2d2d2;
  border-radius: 5px;
  border: 0;
  padding: 5px 15px;
  color: #4e4e4e;
}
.no-news-text {
  font-size: 16px;
  text-align: center;
  width: 100%;
  text-align: center;
  color: grey;
  padding: 100px 10px;
  display: flex;
  flex-direction: column;
}
.no-news-text > i {
  font-size: 60px;
  margin-bottom: 30px;
  color: gainsboro;
}
.prev-btn,
.next-btn {
  border: 0;
  background-color: #e8e8e8;
  border-radius: 0;
  outline: none;
  padding: 9px 15px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.1s;
}

.prev-btn:hover,
.next-btn:hover {
  transform: scale(1.1);
  transition: all 0.1s;
}
.prev-btn:focus,
.next-btn:focus {
  transform: scale(1);
  transition: all 0.1s;
}
.prev-btn {
  position: absolute;
  left: 0;
}
.next-btn {
  position: absolute;
  right: 0;
}
.news-home-pagination {
  grid-column: span 5;
  grid-row: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.news-item {
  width: 100%;
  height: 240px;
  position: relative;
  transition: all 0.3s;
  border-radius: 5px;
  overflow: hidden;
}
.other-news-item {
  width: 100%;
  height: 240px;
  position: relative;
  transition: all 0.3s;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px 0;
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
  width: 100%;
}
.all-news-title {
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
.all-news-desc {
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
.selected-news-display {
  overflow: hidden;
  /* display: grid;
  ///THIS WILL COME WITH SELECTED NEWS///
  grid-template-columns: calc(100% - 300px) 300px; */
}
.news-display {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
.other-news-display {
  display: block;
}
.other-news-display > div.other-news-item:first-child {
  margin-top: 0;
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
.other-news-list {
  padding-left: 30px;
}
.other-news-list > h4 {
  width: 100%;
  font-size: 22px;
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  border-width: 0 0 1px 0;
  padding-bottom: 10px;
}

/* TABLET */
@media screen and (max-width: 1024px) {
  .news-display {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
  .page-body {
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
    padding: 20px;
  }
}
/* MOBILE */
@media screen and (max-width: 425px) {
  .cover-block-img {
    height: 150px;
  }
  .news-display {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
  .page-body {
    border-radius: 0;
    padding: 20px;
    width: 100vw;
  }
  .team-title {
    margin: 30px 0 40px 0px;
  }
  .article-block-img {
    height: 150px;
    max-width: 100vw;
  }
}
</style>
