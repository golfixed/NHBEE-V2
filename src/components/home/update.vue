<template>
  <div class="container bg">
    <!-- <div class="section-topic" v-if="news_tmp.length > 0"> -->
    <div class="section-topic">
      <span class="section-text">{{ $t("message.section.news")}}</span>
    </div>

    <!-- Desktop View -->
    <div class="update-display display-desktop" v-if="news_tmp.length > 0">
      <div class="navigate-icon" @click="prevPage()">
        <i class="fas fa-chevron-left arrow-color" v-if="onPage > 1"></i>
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
        <i class="fas fa-chevron-right arrow-color" v-if="onPage <= 1 && news_data6.length > 0"></i>
      </div>
    </div>

    <!-- Mobile View -->
    <div class="update-display display-mobile" v-if="news_tmp.length > 0">
      <div class="mobile-bar">
        <div class="ud-box-mb" v-for="(item, i) in news_tmp" :key="i" :value="i">
          <div class="ud-box-card">
            <h5 class="ud-date" v-if=" changeLang === 'en' ">{{item.en.date}}</h5>
            <h5 class="ud-date" v-if=" changeLang === 'th' ">{{item.th.date}}</h5>
            <p class="ud-title" v-if=" changeLang === 'th' ">" {{item.th.title}} "</p>
            <p class="ud-title" v-if=" changeLang === 'en' ">" {{item.en.title}} "</p>
          </div>
        </div>
      </div>
    </div>

    <!-- IN CASE OF NO UPDATES -->
    <div class="update-display-none" v-if="news_tmp.length == 0">
      <!-- <div class="update-display" v-if="news_tmp.length > 0"> -->
      <div>
        <label>{{ $t("message.system.noNewsHome")}}</label>
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
      axios.get("http://nhbee.kmutt.ac.th/api/news/home?limit=6").then(res => {
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
.display-mb {
  display: block;
}
.update-display-none {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.update-display-none > div > label {
  color: rgb(194, 194, 194);
  font-size: 16px;
  text-align: center;
}
.section-topic {
  width: 100%;
  padding: 20px;
}
.update-display {
  display: grid;
  grid-template-columns: 7% 86% 7%;
  padding-bottom: 20px;
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
  padding: 20px;
}
.ud-box {
  color: #ffffff;
  padding: 10px 30px;
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
  padding: 0;
}
.ud-date {
  color: rgb(150, 150, 150);
  margin-bottom: 20px;
  cursor: default;
  font-size: 16px;
}
.ud-title {
  color: rgb(220, 220, 220);
  font-weight: bold;
  cursor: default;
  font-size: 20px;
  margin-bottom: 0;
}
.display-mobile {
  display: none;
}

@media screen and (max-width: 425px) {
  .section-topic {
    font-size: 1.5rem;
    padding: 20px 20px 0 20px;
    text-align: center;
  }
  .display-desktop {
    display: none;
  }
  .display-mobile {
    display: block;
    padding-bottom: 0;
  }
  .section-text {
    font-size: 1.5rem;
    padding: 30px 10px;
    text-align: center;
  }
  .ud-box-card {
    color: #ffffff;
    width: 100%;
    height: 180px;
    background-color: #333;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.43);
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.43);
    margin: 0 15px 0 0;
    padding: 20px;
  }
  .ud-box-mb {
    flex: 0 0 auto;
    padding: 20px 0px 40px 30px;
    width: 80%;
  }
  .ud-box-mb:last-child {
    padding-right: 30px;
  }
  .ud-bar {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 15px 15px 15px;
  }
  .mobile-bar {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
}
</style>
