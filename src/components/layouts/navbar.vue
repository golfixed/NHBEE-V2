<template>
  <div class="container-fluid navbarbox" style="position: fixed; z-index: 999;padding: 0px;">
    <div class="header-top-line"></div>
    <div class="container d-flex align-items-center justify-content-center" style="height: 100%;padding:0px;">
      <div class="row d-flex align-items-center" style="color: white; width: 100%;">
        <!--LOGO AREA -->
        <div class="col-2 d-flex justify-content-start logo-col" style="padding: 0px;">
          <div class="d-flex flex-row align-items-center align-items-center">
            <img class="logo" src="/static/img/logo.png">
            <div class="webname">
              <h1 class="webname-txt">NHBEE KMUTT</h1>
            </div>
          </div>
        </div>
        <!-- MENU ITEMS AREA -->
        <div class="col-8 d-flex justify-content-center align-items-center" style="padding:0px;">
          <div class="row navbar-div d-flex justify-content-center">
            <div class="container d-flex align-items-center justify-content-center">
              <nav :class="[{'show': hamburger}, 'nav-display ham-page'] ">
                <ul id="navbar-nav">
                  <li>
                    <router-link to="/about">{{ $t("message.navbar.col2") }}</router-link>
                  </li>
                  <li>
                    <router-link to="/news">{{ $t("message.navbar.col3") }}</router-link>
                  </li>
                  <li>
                    <router-link to="/research">{{ $t("message.navbar.col5") }}</router-link>
                  </li>
                  <li>
                    <router-link to="/survey">{{ $t("message.navbar.col4") }}</router-link>
                  </li>
                  <li>
                    <router-link to="/contact">{{ $t("message.navbar.col6") }}</router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <!-- LNG BTN + SEACH ICON -->
        <div class="col-2 d-flex justify-content-end align-items-center"  style="padding:0px;">
          <div style=" border-right: 1px solid rgba(255, 255, 255, 0.253);">
            <button
              class="lanbtn d-flex align-items-center"
              @click="switchLocal()"
              style="margin-right: 8px; padding-bottom: 0px; padding-top: 0px;"
            >
              <mdb-icon icon="globe" style=" font-size: 20px;margin-right: 5px;"/>
              {{ displayLocal }}
            </button>
          </div>
          <div style="color:#707070; margin: 0px 11px;">
            <mdb-icon icon="search"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
export default {
  name: "navbar",
  components: {
    mdbIcon
  },
  data() {
    return {
      hamburger: false,
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    toggle() {
      this.hamburger = !this.hamburger;
    },
    switchLocal() {
      if (this.$i18n.locale === "th") this.$i18n.locale = "en";
      else this.$i18n.locale = "th";
    }
  },
  computed: {
    displayLocal() {
      if (this.$i18n.locale === "th") return "EN";
      else return "TH";
    },
    searchbar: function() {
      return this.$t("message.searchbar");
    }
  }
};
</script>

<style scoped>
.navbarbox {
  height: 50px;
  background-color: rgba(0, 0, 0);
}
.header-top-line {
  background-color: #e3b800;
  width: 100%;
  height: 2px;
}
.logo {
  height: 30px;
}
.logo-col {
  border-right: 1px solid rgba(255, 255, 255, 0.253);
}
.webname-txt {
  font-family: "Kanit", sans-serif;
  font-size: 1.15rem;
  color: #e5b865;
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
  font-weight: bold;
  margin-left: 20px;
}

@media (min-width: 769px) {
  .lanbtn {
    display: inherit !important;
  }
}
@media (max-width: 425px) {
  .lanbtn {
    display: none !important;
  }
  #navbar-nav li {
    height: 50px !important;
  }
  #navbar-nav a {
    font-size: 20px !important;
    height: 38px !important;
  }
}
.lanbtn {
  border: solid;
  color: #707070;
  border-width: 1px;
  border-color: transparent;
  border-radius: 4px;
  background-color: transparent;
  width: auto;
  padding-left: 11px;
  padding-right: 11px;
}
.hamburger {
  border: solid;
  color: #707070;
  border-width: 1px;
  border-color: #707070;
  border-radius: 4px;
  background-color: white;
  height: 38px;
  width: 42px;
  -webkit-box-shadow: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
  display: none !important;
}
@media screen and (max-width: 768px) {
  .nav-display.show {
    display: block;
  }

  #navbar-nav li {
    display: block;
    width: 100%;
    border-width: 0px 0px 1px 0px !important;
    border: solid;
    border-color: rgb(228, 228, 228);
    margin-top: 15px;
    margin-left: 0px !important ;
  }
  .ham-page {
    height: 100vh !important;
  }
  .hamburger {
    display: inherit !important;
  }
}
.navbar-div {
  background-color: transparent;
  width: 100% !important;
  margin: 0px 0px 0px 0px !important;
  padding: 0px 0px 0px 0px !important;
}
#navbar-nav {
  margin-bottom: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
}

#navbar-nav li {
  display: block;
  width: 120px;
  float: left;
  margin-left: 2px;
  height: 38px;
}

#navbar-nav a {
  font-size: 15px;
  text-align: center;
  display: block;
  padding: 3px;
  text-decoration: none;
  color: #ffffff;
  /* height: 38px; */
  line-height: 31px;
}

#navbar-nav a:hover {
  font-weight: bold;
  background-color: #e5b864;
  color: #212529;
  /* height: 38px; */
  border-radius: 3px;
}
</style>
