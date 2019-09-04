<template>
  <div class="container bg">
    <div class="row" style="margin:0;">
      <span class="section-text">{{ $t("message.section.news")}}</span>
    </div>
    <div class="update-display">
      <div class="navigate-icon" @click="prevPage()">
        <i class="fas fa-chevron-left arrow-color" v-if="onPage != 1"></i>
      </div>
      <div class="row ud-bar">
        <div class="ud-box" v-for="(item, i) in news_data" :key="i" :value="i">
          <h5 class="ud-date" v-if=" changeLang === 'en' ">{{item.en.date}}</h5>
          <h5 class="ud-date" v-if=" changeLang === 'th' ">{{item.th.date}}</h5>
          <p class="ud-title" v-if=" changeLang === 'th' ">" {{item.th.title}} "</p>
          <p class="ud-title" v-if=" changeLang === 'en' ">" {{item.en.title}} "</p>
        </div>
      </div>
      <div class="navigate-icon" @click="nextPage()">
        <i class="fas fa-chevron-right arrow-color" v-if="onPage != 2"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "homeupdate",
  created() {
    this.fetchNewsList();
  },
  data() {
    return {
      currentPage: 1,
      news_tmp: [],
      news_data3: [],
      news_data6: []
    };
  },
  methods: {
    fetchNewsList: function() {
      axios.get("http://10.35.30.140/api/news/home?limit=6").then(res => {
        this.news_tmp = res.data;
        this.news_data3 = this.news_tmp.slice(0, 3);
        this.news_data6 = this.news_tmp.slice(3, 6);
      });
    },
    prevPage: function() {
      if (this.currentPage <= 1) {
        this.currentPage = this.currentPage;
      } else {
        this.currentPage = this.currentPage - 1;
      }
    },
    nextPage: function() {
      if (this.currentPage >= 2) {
        this.currentPage = this.currentPage;
      } else {
        this.currentPage = this.currentPage + 1;
      }
    }
  },
  computed: {
    changeLang: function() {
      return this.$i18n.locale;
    },
    newsShow: function() {
      var tmp;
      tmp = this.events.splice(this.events.indexOf(this.news_data), 2);
      return tmp;
    },
    onPage: function() {
      return this.currentPage;
    },
    news_data: function() {
      if (this.currentPage === 1) return this.news_data3;
      else return this.news_data6;
    }
  }
};
</script>

<style scoped>
.update-display {
  display: grid;
  grid-template-columns: 7% 86% 7%;
}
.navigate-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section-text {
  color: rgb(194, 194, 194);
  margin-bottom: 0px;
  font-weight: bold;
  font-size: 1.8rem;
  padding: 30px;
}
.ud-box {
  color: #ffffff;
  padding: 0px 30px;
  display: block;
  text-align: left;
  width: 33.33%;
  transition: all 0.3s;
  cursor: pointer;
}
.ud-box:hover {
  background-color: #292929;
  transition: all 0.3s;
}
.ud-bar {
  display: flex;
  overflow-y: scroll;
}
.arrow-color {
  color: #e5b865;
  cursor: pointer;
  transition: all 0.2s;
}
.arrow-color:hover {
  transform: scale(1.5);
  transition: all 0.2s;
}
.bg {
  background-color: #1d1d1d;
  width: 100%;
  display: block;
  padding: 0 0 30px 0;
}
.ud-date {
  color: rgb(150, 150, 150);
  margin-bottom: 20px;
  cursor: default;
}
.ud-title {
  color: rgb(220, 220, 220);
  font-weight: bold;
  cursor: default;
}

@media screen and (max-width: 425px) {
  .section-text {
    font-size: 1.5rem;
    padding: 30px 10px;
    text-align: center;
  }
  .ud-box {
    color: #ffffff;
    width: 290px;
    border: 1px solid #e5b865;
    flex: 0 0 auto;
    padding: 20px 20px 5px 20px;
    margin: 0 15px 0 0;
  }
  .ud-bar {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 15px 15px 15px;
  }
}
</style>
