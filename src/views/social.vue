<template>
  <div class="home-display" style="padding-top:80px;background-color: rgb(51, 51, 51);">
    <div class="header-bg-contact d-flex align-items-center">
      <div class="container" style="margin-top: -65px;">
        <div class="d-flex flex-column">
          <span class="page-title">{{ $t("message.pageheader.social.title") }}</span>
          <span class="page-subtitle">{{ $t("message.pageheader.social.subtitle") }}</span>
        </div>
      </div>
    </div>
    <div class="container page-start">
      <div class="page-body" style="overflow: hidden;">
        <div style="display: flex;flex-direction: column;justify-content: center;">
          <div class="social-div" style="margin-bottom: 30px;">
            <div class="social-div-pic">
              <img class="social-pic-fb" src="/static/img/social/fb.png" />
            </div>
            <div class="social-div-text">
              <h3 class="social-title-fb">{{ $t("message.socialmedia.facebook.title") }}</h3>
              <p class="social-paragraph">{{ $t("message.socialmedia.facebook.description") }}</p>
              <a href="https://www.facebook.com/nhbeekmutt/" class="link-btn">
                <button class="fb-btn">
                  {{ $t("message.socialmedia.facebook.btn") }}
                  <i
                    class="fas fa-arrow-right"
                    style="margin-left: 5px;"
                  ></i>
                </button>
              </a>
            </div>
          </div>
          <div class="social-div">
            <div class="social-div-pic line-pic-bg line-img-mb">
              <img class="social-pic-line" src="/static/img/social/line.png" />
            </div>
            <div class="social-div-text" style="padding-right: 30px;">
              <h3 class="social-title-line">{{ $t("message.socialmedia.line.title") }}</h3>
              <p class="social-paragraph">{{ $t("message.socialmedia.line.description") }}</p>
              <a href="https://line.me/R/ti/p/%40759tqrim" class="link-btn">
                <button class="line-btn">
                  {{ $t("message.socialmedia.line.btn") }}
                  <i
                    class="fas fa-plus"
                    style="margin-left: 5px;"
                  ></i>
                </button>
              </a>
            </div>
            <div class="social-div-pic line-pic-bg line-img-dsk">
              <div class="line-qr-block">
                <img
                  class="social-pic-line"
                  src="/static/img/social/line_qr.png"
                  style="    border-radius: 5px;"
                />
                <label class="qr-block-label">@759tqrim</label>
              </div>
              <img class="social-pic-line" src="/static/img/social/line.png" />
            </div>
          </div>
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
  }
};
</script>

<style scoped>
.qr-block-label {
  margin-top: 10px;
  font-weight: 600;
  color: #848484;
}
.line-qr-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.link-btn {
  width: fit-content;
}
.fb-btn,
.line-btn {
  margin-top: 20px;
  border-radius: 0;
}
.fb-btn {
  background-color: #4166b2;
  border: 0;
  color: #fff;
  padding: 7px 15px;
  cursor: pointer;
  transition: all 0.2s;
}
.line-btn {
  background-color: #1eb74c;
  border: 0;
  color: #fff;
  padding: 7px 15px;
  cursor: pointer;
  transition: all 0.2s;
  width: fit-content;
}
.line-btn:hover {
  background-color: #1a9f42;
  transition: all 0.2s;
}
.fb-btn:hover {
  background-color: #36579a;
  transition: all 0.2s;
}
.line-pic-bg {
  background-color: #6b6b6b36;
  border-radius: 5px;
  padding-top: 30px;
}
.social-pic-line,
.social-pic-fb {
  max-height: 300px;
}
.social-title-fb {
  color: #4166b2;
  font-weight: 600;
}
.social-title-line {
  color: #1eb74c;
  font-weight: 600;
}
.social-paragraph {
  color: #6b6b6b;
}
.social-div {
  display: flex;
}

.social-div-pic {
  display: flex;
  justify-content: center;
}
.social-div-pic,
.social-div-text {
  width: 50%;
}
.social-div-text {
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.line-img-mb {
  display: none;
}
.line-img-dsk {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .social-div {
    display: block;
    margin-bottom: 30px;
  }
  .social-div-pic,
  .social-div-text {
    width: 100%;
    padding: 15px 0;
  }
  .line-img-mb {
    display: block;
    max-height: 230px;
    overflow: hidden;
    text-align: center;
  }
  .line-img-dsk {
    display: none;
  }
  .link-btn {
    width: fit-content;
    margin: 0 auto;
  }
}
@media screen and (max-width: 425px) {
  .social-pic-fb {
    width: 100%;
  }
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
  background-image: url("/static/img/social/bg.png");
  background-position: left top;
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
@media screen and (max-width: 425px) {
  .page-body {
    width: 100vw;
  }
}
.contact-display {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  .staff-display {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
  }
  .page-body {
    border-radius: 0;
    padding: 20px;
  }
}
/* MOBILE */
@media screen and (max-width: 425px) {
  .staff-display {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
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
