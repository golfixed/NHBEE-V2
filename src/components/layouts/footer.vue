<template>
  <div class="container-fluid footer-bg">
    <div class="container">
      <!-- ADDRESS AND LINKS -->
      <div class="address-link-display">
        <div class="left-side">
          <div class="logo-col">
            <img class="footer-logo" src="/static/img/logo.png" />
            <img class="footer-logo" src="/static/img/logo-kmutt.png" />
          </div>
          <div style="cursor: default;">
            <h5 style="color:#fff;font-weight: bold;">NHBEE KMUTT</h5>
            <h6 style="color:#fff;font-weight: bold;">Native Honeybee Research Laboratory</h6>
            <h6 class="addressfont">{{ $t("message.footer.address.name") }}</h6>
            <h6 class="addressfont">{{ $t("message.footer.address.add") }}</h6>
          </div>
        </div>
        <div class="right-side">
          <h6 class="sitemap-link">
            <router-link to="/research">{{ $t("message.footer.link.col1.item1") }}</router-link>
          </h6>
          <h6 class="sitemap-link">
            <router-link to="/news">{{ $t("message.footer.link.col1.item2") }}</router-link>
          </h6>
          <h6 class="sitemap-link">
            <router-link to="/team">{{ $t("message.footer.link.col1.item4") }}</router-link>
          </h6>
          <h6 class="sitemap-link">
            <router-link to="/about">{{ $t("message.footer.link.col2.item1") }}</router-link>
          </h6>
          <h6 class="sitemap-link">
            <router-link to="/contact">{{ $t("message.footer.link.col2.item2") }}</router-link>
          </h6>
          <h6 class="sitemap-link">
            <a
              href="http://www2.kmutt.ac.th/"
              target="_blank"
            >{{ $t("message.footer.link.col2.item3") }}</a>
          </h6>
          <h6 class="sitemap-link">
            <router-link to="/social">{{ $t("message.footer.link.col2.item4") }}</router-link>
          </h6>
        </div>
      </div>

      <!-- CONTACT AREA -->
      <div class="row top-hr" style="padding: 20px 0px 20px 0px;cursor: default;">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <mdb-icon
            icon="envelope-open"
            style="margin-right: 10px; color: rgb(165, 165, 165) !important; font-size: 14px !important;"
          />
          <h6
            style=" text-align: center; color: rgb(165, 165, 165) !important; font-size: 14px !important; padding: 10px 0px 10px 10px !important; margin: 0px 0px 0px 0px !important;"
          >{{ $t("message.footer.contact.email") }}</h6>
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <mdb-icon
            icon="phone"
            style="margin-right: 10px; color: rgb(165, 165, 165) !important; font-size: 14px !important;"
          />
          <h6
            style="text-align: center; color: rgb(165, 165, 165) !important; font-size: 14px !important; padding: 10px 0px 10px 10px !important; margin: 0px 0px 0px 0px !important;"
          >{{ $t("message.footer.contact.phone") }}</h6>
        </div>
      </div>
    </div>

    <!-- COPY RIGHT BAR -->
    <div class="right-bg" style="background-color: #1d1d1d;">
      <div class="container copyrightbar">
        <div>
          <p>Copyright © Native Honeybee Laboratory at KMUTT. &nbsp;</p>
          <p>All rights reserved.</p>
        </div>
        <div>
          <p>NHBEE KMUTT 2019</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
export default {
  name: "nhbeefooter",
  components: {
    mdbIcon
  },
  computed: {
    emailsubph: function() {
      return this.$t("message.connect.email_ph");
    }
  }
};
</script>

<style scoped>
.left-side {
  display: grid;
  grid-template-columns: 230px auto;
}
.right-side {
  padding: 0 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border: solid;
  border-width: 0px 0px 0px 1px;
  border-color: rgb(80, 80, 80);
  padding-left: 40px;
}
.address-link-display {
  display: grid;
  grid-template-columns: 60% 40%;
  margin-bottom: 15px;
}
.address-area {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  margin: 0;
  color: #fff;
}
.copyrightbar {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.copyrightbar > div {
  display: flex;
  align-items: center;
}
.copyrightbar > div > p {
  cursor: default;
  color: white;
  font-size: 12px;
  padding: 10px 0px 10px 0px;
  margin: 0px;
}
.copyrightbar > div:last-child {
  justify-content: flex-end;
}
.sub-class {
  padding: 20px 0 30px 0;
}
.bot-link {
  text-align: end;
  padding: 0px 10px;
  color: #cbcbcb;
}
.logo-col {
  display: flex;
  justify-content: center;
}
.more-left-space {
  padding-left: 30px !important;
}
.left-hr {
  border: solid;
  border-width: 0px 0px 0px 1px;
  border-color: rgb(80, 80, 80);
}
.socialicon {
  font-size: 30px;
}
.fb {
  color: #707070;
  transition-duration: 0.2s;
}
.fb:hover {
  color: #3b5998;
  transition-duration: 0.2s;
  transform: scale(1.1);
}
.twitter {
  color: #707070;
  transition-duration: 0.2s;
}
.twitter:hover {
  color: #1da1f2;
  transition-duration: 0.2s;
  transform: scale(1.1);
}
.youtube {
  color: #707070;
  transition-duration: 0.2s;
}
.youtube:hover {
  color: #ff0000;
  transition-duration: 0.2s;
  transform: scale(1.1);
}
.line {
  color: #707070;
  transition-duration: 0.2s;
}
.line:hover {
  color: #359921;
  transition-duration: 0.2s;
  transform: scale(1.1);
}
.footer-bg {
  background-color: #292929;
  padding: 0;
  max-width: 100vw;
  width: 100vw;
}
.footer-bg > div.container {
  padding: 30px 0 0 0;
}
.topic {
  color: white;
}
.sitemap-link {
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0;
  padding: 0;
}

.footer-logo {
  margin: 10px;
  width: 70px;
  height: 70px;
}
.addressfont {
  color: rgb(179, 179, 179);
}
.top-hr {
  border: solid;
  border-width: 1px 0px 0px 0px;
  border-color: rgb(80, 80, 80);
  margin: 0;
}
@media screen and (max-width: 768px) {
  .right-side {
    grid-template-rows: repeat(5, 1fr);
  }
  .left-side {
    display: block;
  }
  .left-side > div.logo-col {
    justify-content: center;
    padding-bottom: 20px;
  }
  .left-side > div:last-child {
    text-align: center;
  }
  .address-link-display {
    display: grid;
    grid-template-columns: 60% 40%;
  }
  .copyrightbar {
    grid-template-columns: 70% 30%;
  }
}
@media screen and (max-width: 425px) {
  .copyrightbar > div:first-child {
    display: block;
  }
  .copyrightbar > div:first-child > p:last-child {
    padding-top: 0;
  }
  .topic {
    text-align: center;
  }
  .p-2 {
    width: 25%;
  }
  .addressfont {
    font-size: 14px;
    color: rgb(179, 179, 179);
  }
  .footer-logo {
    margin: 0px 20px;
    width: 70px;
    height: 70px;
  }
  .mb-center {
    text-align: center;
  }
  .ftlinkmb {
    display: none;
  }
  .footer-bg > div.container {
    padding: 0;
  }
  .address-link-display {
    display: block;
    margin-bottom: 25px;
  }
  .left-side {
    display: block;
  }
  .left-side > div:last-child {
    padding: 0 15px;
    text-align: center;
  }
  .top-hr {
    margin: 0 25px;
  }
  .right-side {
    display: none;
  }
  .copyrightbar > div:last-child {
    display: none;
  }

  .copyrightbar > div {
    justify-content: center;
    text-align: center;
  }
  .copyrightbar > div:last-child {
    justify-content: center;
  }
  .copyrightbar {
    display: block;
  }
  .logo-col {
    padding: 30px 0;
  }
  .socialicon {
    font-size: 35px !important;
    margin: 0px 20px;
  }
  .sub-class {
    padding: 20px 15px 30px 15px;
  }
  .left-hr {
    border: solid;
    border-width: 1px 0px 0px 0px;
    border-color: rgb(80, 80, 80);
  }
  .more-left-space {
    padding-left: 15px;
  }
  .left-side > div.logo-col {
    justify-content: center;
    padding-bottom: 20px;
  }
}
</style>
