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
          <input class="search-input" v-model="searchKey" :placeholder="searchPlace" />
          <i class="fas fa-search search-icon"></i>
        </div>
        <h3
          class="section-text"
          style="margin-top: 20px;"
        >{{ $t("message.research.section.latest") }}</h3>
        <div class="research-display">
          <div v-for="data in researchList" :key="'research_' + data.id">
            <a class="research-item" :href="data['pdfURL'] + '.pdf' " target="blank">
              <h4 class="research-item-title" v-if="currentLang === 'th'">{{data.th['title']}}</h4>
              <h4 class="research-item-title" v-if="currentLang === 'en'">{{data.en['title']}}</h4>
              <span class="research-item-open-btn">
                <i class="fas fa-external-link-alt"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="research-home-pagination" style="margin-top: 20px;">
          <button
            class="pagination-btn prev-btn"
            v-if="this.page.now != 1"
            @click="changePage('previous');"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <div class="pagination-current">{{page.now}} จาก {{page.all}} หน้า</div>
          <button
            class="pagination-btn next-btn"
            v-if="this.page.now != this.page.all"
            @click="changePage('next');"
          >
            <i class="fas fa-arrow-right"></i>
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
import axios from "axios";
export default {
  name: "aboutuspage",
  created() {
    this.$emit(`update:layout`, layout_default);
    this.fetchResearchList();
  },
  components: {
    teamcard,
    mdbIcon
  },
  data() {
    return {
      searchKey: "",
      page: {
        now: 1,
        all: 0
      },
      researchData: [],
      researchList: []
    };
  },
  computed: {
    searchPlace: function() {
      return this.$t("message.research.placeholder");
    },
    currentLang: function() {
      return this.$i18n.locale;
    }
  },
  methods: {
    fetchResearchList: function() {
      axios
        .get("http://10.35.30.140/api/research?page=" + this.page.now)
        .then(res => {
          this.researchData = res.data;
          this.researchList = this.researchData.research.data;
          this.page.all = this.researchData.page.all;
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
    }
  }
};
</script>

<style scoped>
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
.research-home-pagination {
  grid-column: span 5;
  grid-row: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
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
  border-width: 0px 0 1px 0;
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
