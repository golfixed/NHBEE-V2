<template>
  <div class="container-fluid bg" style>
    <div class="container">
      <div class="row sub-class">
        <div class="col-lg-6 col-sm-6 col-xs-12" style="padding: 0px;">
          <h4 class="topic" style="padding: 10px 0px;">{{ $t("message.connect.connect_text") }}</h4>
          <div class="d-flex flex-row justify-content-start" style="margin-top: 10px;">
            <div class="p-2">
              <a href="https://www.facebook.com/nhbeekmutt" target="_blank">
                <mdb-icon fab icon="facebook-square" class="socialicon fb"/>
              </a>
            </div>
            <div class="p-2">
              <a href="https://www.twitter.com/nhbeekmutt" target="_blank">
                <mdb-icon fab icon="twitter" class="socialicon twitter"/>
              </a>
            </div>
            <div class="p-2">
              <a href="https://www.youtube.com/nhbeekmutt" target="_blank">
                <mdb-icon fab icon="youtube" class="socialicon youtube"/>
              </a>
            </div>
            <div class="p-2">
              <a href="https://www.youtube.com/nhbeekmutt" target="_blank">
                <mdb-icon fab icon="line" class="socialicon line"/>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12" style="padding: 0px;">
          <h4 class="topic" style="padding: 10px 0px;">{{ $t("message.connect.email_text") }}</h4>
          <div class="d-flex flex-row" style="margin-top: 10px;">
            <div class="col" style="padding: 0px 0px 0px 0px;">
              <form class="example" action="/action_page.php">
                <input
                  style="border: 1px solid white;background-color: #212121;padding: 10px;width: 90%;"
                  type="text"
                  :placeholder="emailsubph"
                  name="search"
                >
                <button
                  type="submit"
                  style="padding: 10px;border: 1px solid white;width: 10%; float: right;"
                >
                  <mdb-icon icon="arrow-right"/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row" style="padding: 20px 0px; color: white; border-top: 1px solid #e5b864;">
        <div
          class="col-lg-6 col-sm-6 col-xs-12"
          style="padding: 0px; color:#CBCBCB;"
        >Copyright © Native Honeybee Laboratory 2019</div>
      </div>-->
    </div>
    <div class="container-fluid" style="padding: 30px 0 0 0;">
      <div style="color: white;">
        <div class="container-fluid footer-bg" style="padding:0;">
          <div class="container" style="padding:0;">
            <div class="container">
              <div
                class="row"
                style="display: flex;justify-content: center;    padding-bottom: 20px;"
              >
                <div
                  class="col-md-7 address-fix d-flex align-items-center row"
                  style=" padding-right: 0px; padding-left: 0px;"
                >
                  <div
                    class="col-md-4 d-flex flex-row justify-content-center"
                    style=" padding: 20px 0px 40px 0px;"
                  >
                    <img class="footer-logo" src="/static/img/logo.png">
                    <img class="footer-logo" src="/static/img/logo-kmutt.png">
                  </div>
                  <div class="col-md-8 d-flex flex-column mb-center">
                    <h5 style="font-weight: bold;">NHBEE KMUTT</h5>
                    <h6 style="font-weight: bold;">Native Honeybee Research Laboratory</h6>
                    <h6 class="addressfont">{{ $t("message.footer.address.name") }}</h6>
                    <h6 class="addressfont">{{ $t("message.footer.address.add") }}</h6>
                  </div>
                </div>
                <div class="col-md-5 left-hr quicklink-fix ftlinkmb">
                  <div class="row">
                    <div class="col-4 more-left-space">
                      <h6>{{ $t("message.footer.link.col1.colname") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item1") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item2") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item3") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item4") }}</h6>
                    </div>
                    <div class="col-8" style>
                      <div class="row">
                        <div class="col-6">
                          <h6>{{ $t("message.footer.link.col2.colname") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item1") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item2") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item3") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item4") }}</h6>
                        </div>
                        <div class="col-6">
                          <h6>{{ $t("message.footer.link.col3.colname") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item1") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item2") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item3") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item4") }}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row top-hr" style="padding: 20px 0px 20px 0px;">
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                  <mdb-icon
                    icon="envelope-open"
                    style="margin-right: 10px; color: #5D5D5D !important; font-size: 14px !important;"
                  />
                  <h6
                    style=" text-align: center; color: #5D5D5D !important; font-size: 14px !important; padding: 10px 0px 10px 10px !important; margin: 0px 0px 0px 0px !important;"
                  >{{ $t("message.footer.contact.email") }}</h6>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                  <mdb-icon
                    icon="phone"
                    style="margin-right: 10px; color: #5D5D5D !important; font-size: 14px !important;"
                  />
                  <h6
                    style="text-align: center; color: #5D5D5D !important; font-size: 14px !important; padding: 10px 0px 10px 10px !important; margin: 0px 0px 0px 0px !important;"
                  >{{ $t("message.footer.contact.phone") }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid right-bg" style="background-color: #1d1d1d;">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-6">
                <p
                  style="color: white; font-size: 12px; padding: 10px 0px 10px 0px !important; margin: 0px 0px 0px 0px !important;"
                >Copyright © Native Honeybee Laboratory at KMUTT. All rights reserved.</p>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <p
                  style="color: white !important; font-size: 12px; padding: 10px 0px 10px 10px !important; margin: 0px 0px 0px 0px !important;"
                >
                  <a href class="lng-btn">NHBEE KMUTT 2019</a>
                </p>
              </div>
            </div>
          </div>
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
.sub-class {
  padding: 20px 0 30px 0;
}
.bot-link {
  text-align: end;
  padding: 0px 10px;
  color: #cbcbcb;
}
@media screen and (max-width: 425px) {
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
.bg {
  background-color: #292929;
  margin-top: -70px;
  padding: 70px 0 0 0;
}
.topic {
  color: white;
}
@media screen and (max-width: 425px) {
  .topic {
    text-align: center;
  }
  .p-2 {
    width: 25%;
  }
}
.footer-logo {
  margin: 0px 20px 0px 0px;
  width: 70px;
  height: 70px;
}
@media screen and (max-width: 425px) {
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
}
.addressfont {
  color: rgb(179, 179, 179);
}
.top-hr {
  border: solid;
  border-width: 1px 0px 0px 0px;
  border-color: rgb(80, 80, 80);
}
</style>
