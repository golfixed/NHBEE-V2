<template>
  <div
    id="navbarbox"
    class="container-fluid navbarbox"
    style="position: fixed; z-index: 4;padding:0px;"
  >
    <div class="header-top-line"></div>
    <div
      class="container d-flex align-items-center justify-content-center"
      style="height: 100%;padding:0px;"
    >
      <div
        class="row d-flex justify-content-between align-items-center"
        style="color: white; width: 100%;"
      >
        <!--LOGO AREA -->
        <router-link to="/">
          <div class="d-flex align-items-center group-left">
            <div
              class="d-flex flex-row align-items-center align-items-center"
              @click="menubarClose()"
            >
              <img id="logo" class="logo" src="/static/img/logo.png" />
              <div class="webname" style="user-select: none;  ">
                <h1 id="webname" class="webname-txt">NHBEE KMUTT</h1>
                <h1 id="webname" class="webname-txt-mb">NHBEE</h1>
              </div>
            </div>
          </div>
        </router-link>
        <div class="d-flex align-items-center group-right">
          <div style="height:30px;">
            <button
              class="lanbtn"
              @click="switchLocal()"
              style=" padding-bottom: 0px; padding-top: 0px; align-items:center;user-select: none;"
            >
              <img src="/static/img/langs/us.svg" v-if="this.$i18n.locale == 'th'" />
              <img src="/static/img/langs/th.svg" v-if="this.$i18n.locale == 'en'" />
              {{displayLocal}}
            </button>
          </div>
          <!-- <div class="d-flex align-items-center justify-content-start nav-searchbar2">
            <div v-on:click="searchPageToggle(true);">
              <i class="fas fa-search"></i>
            </div>
          </div>-->
          <div
            @click="menubarToggle();"
            class="d-flex flew-row"
            style="color: white; padding: 0px 0px 0px 15px; align-items:center;"
          >
            <i class="fas fa-bars"></i>
            <p
              class="menu-btn-text"
              style="padding: 0px 0px 0px 15px;margin:0px;cursor:pointer;user-select: none;"
            >{{ $t("message.navbar.menubtn") }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="menubar-box" :class="{show:$store.state.menubarShow}">
      <menubar />
    </div>
    <div class="searchpage-container" v-if="searchbarShow == true">
      <div class="page-close-box" v-on:click="searchPageToggle(false);">
        <label>
          <i class="fas fa-times"></i>
        </label>
      </div>
      <div class="inner-container">
        <div class="searchbar-top">
          <label>{{ $t('message.searchbar')}}</label>
          <div class="set">
            <input :placeholder="this.inputPlaceholder" />
            <label>
              <i class="fas fa-search"></i>
            </label>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import menubar from "@/components/layouts/menubar.vue";
export default {
  name: "navbar",
  components: {
    menubar
  },
  data() {
    return {
      hamburger: false,
      menubarShow: false,
      searchbarShow: false
    };
  },
  methods: {
    toggle() {
      this.hamburger = !this.hamburger;
    },
    switchLocal() {
      if (this.$i18n.locale === "th") this.$i18n.locale = "en";
      else this.$i18n.locale = "th";
    },
    menubarToggle() {
      this.$store.commit("MENU_TOGGLE");
    },
    menubarClose() {
      this.$store.commit("MENU_CLOSE");
    },
    searchPageToggle: function(param) {
      this.searchbarShow = param;
    }
  },
  computed: {
    displayLocal() {
      if (this.$i18n.locale === "th") return "EN";
      else return "ไทย";
    },
    searchbar: function() {
      return this.$t("message.searchbar");
    },
    inputPlaceholder: function() {
      return this.$t("message.searchpage.placeholder");
    }
  },
  mounted() {
    this.$nextTick(function() {
      if (this.$store.state.menubarShow == true) {
        console.log("not shrink");
      } else {
        window.addEventListener("scroll", function() {
          var navbar = document.getElementById("navbarbox");
          var nav_classes = navbar.classList;
          if (document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("shrink") === false) {
              nav_classes.toggle("shrink");
            }
          } else {
            if (nav_classes.contains("shrink") === true) {
              nav_classes.toggle("shrink");
            }
          }
        });
      }
    });
    this.$root.$on(""),
      () => {
        this.methods();
      };
  }
};
</script>

<style scoped>
.page-close-box {
  position: absolute;
  top: 20px;
  right: 20px;
}
.page-close-box > label {
  font-size: 20px;
  user-select: none;
}
.inner-container {
  width: 100%;
  height: fit-content;
  padding: 50px 20% 0 20%;
}
.inner-container > div.searchbar-top > label {
  font-size: 30px;
  margin-bottom: 20px;
  user-select: none;
}
.inner-container > div.searchbar-top > div.set {
  position: relative;
}
.inner-container > div.searchbar-top > div.set > input {
  font-size: 24px;
  width: 100%;
  outline: none;
  border: solid #d2d2d2;
  border-width: 0 0 1px 0;
}
.inner-container > div.searchbar-top > div.set > label {
  font-size: 20px;
  outline: none;
  position: absolute;
  top: 50%;
  right: 0;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: grey;
}
.inner-container > div.searchbar-top {
  display: flex;
  flex-direction: column;
}
.searchpage-container {
  z-index: 100;
  background-color: #fff;
  position: absolute;
  overflow: scroll;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
.show {
  max-height: 300px !important;
  transition: all 0.3s;
  border: solid #e3b800;
  border-width: 0 0 2px 0;
}
.menubar-box {
  max-height: 0;
  width: 100%;
  overflow: hidden;
  background-color: #27231c;
  margin-top: -5px;
  transition: all 0.3s;
}
.navbarbox {
  height: 80px;
  background-color: rgba(0, 0, 0);
  transition: all 0.3s;
}
.navbarbox.shrink {
  height: 50px;
  background-color: rgba(0, 0, 0);
  transition: all 0.3s;
}
.header-top-line {
  background-color: #e3b800;
  width: 100%;
  height: 2px;
}
.logo {
  height: 50px;
  transition: all 0.3s;
}
.shrink .logo {
  height: 30px;
  transition: all 0.3s;
}
.logo-col {
  border-right: 1px solid rgba(255, 255, 255, 0.253);
  border-left: 1px solid rgba(255, 255, 255, 0.253);
}
.webname-txt-mb {
  display: none;
}
.webname-txt,
.webname-txt-mb {
  font-family: "Kanit", sans-serif;
  font-size: 1.5rem;
  color: #e5b865;
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
  font-weight: bold;
  margin-left: 10px;
  transition: all 0.3s;
  width: 100%;
}
.shrink .webname-txt {
  font-size: 1.15rem;
  transition: all 0.3s;
}
.group-right {
  padding-right: 0px;
}
.group-left {
  padding-left: 0px;
}
.nav-searchbar2 {
  color: #707070;
  height: 30px;
  padding: 0px 15px;
  border-right: 1px solid rgba(255, 255, 255, 0.253);
  border-left: 1px solid rgba(255, 255, 255, 0.253);
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
  height: 30px;
  outline: none;
  display: flex;
  justify-content: center;
}
.lanbtn > img {
  height: 25px;
  margin: 0 15px;
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
  width: 100px;
  float: left;
  margin-left: 2px;
  height: 38px;
}

#navbar-nav a {
  font-size: 15px;
  text-align: center;
  display: block;
  padding: 0px 5px;
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

/* TABLET */
@media screen and (max-width: 768px) {
  .lanbtn {
    display: none;
  }
  .webname-txt-mb {
    display: none;
  }
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

/* MOBILE */
@media (max-width: 425px) {
  .inner-container {
    width: 100%;
    height: fit-content;
    padding: 50px 20px 0 20px;
  }
  .nav-searchbar2 {
    color: #707070;
    height: 30px;
    padding: 0px 15px;
    border-left: 0;
    border-right: 1px solid rgba(255, 255, 255, 0.253);
  }
  .menu-btn-text {
    display: none;
  }
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
  .group-right {
    padding-right: 20px;
  }
  .group-left {
    padding-left: 20px;
  }
  .webname-txt {
    display: none;
  }
  .webname-txt-mb {
    display: inherit;
  }
  .show {
    max-height: 100vh !important;
    transition: all 0.3s;
    border: solid #e3b800;
    border-width: 0 0 2px 0;
  }
}
</style>
