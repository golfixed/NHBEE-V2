<template>
  <div class="home-display" style="padding-top:80px;background-color: rgb(51, 51, 51);">
    <div class="header-bg-contact d-flex align-items-center">
      <div class="container" style="margin-top: -65px;">
        <div class="d-flex flex-column">
          <span class="page-title">{{ $t("message.pageheader.contact.title") }}</span>
          <span class="page-subtitle">{{ $t("message.pageheader.contact.subtitle") }}</span>
        </div>
      </div>
    </div>
    <div class="container page-start">
      <div class="page-body contact-display" style="overflow: hidden;">
        <div style="display: flex;flex-direction: column;justify-content: center;">
          <div>
            <p
              class="topic"
              style=" margin-top: 0px !important;"
            >{{ $t("message.page6_contact.address.title") }}</p>
          </div>
          <div>
            <div class="d-flex flex-row p-2 align-items-center">
              <mdb-icon icon="building" style="margin-right: 10px;" />
              <p
                style="margin-bottom: 0px; font-weight: bold;"
              >{{ $t("message.page6_contact.address.detail.line1") }}</p>
            </div>
            <div class="d-flex flex-row p-2 align-items-center">
              <div>
                <mdb-icon icon="map-marker-alt" style="margin-right: 10px;" />
              </div>
              <div>
                <p
                  style="margin-bottom: 0px;"
                >{{ $t("message.page6_contact.address.detail.line2") }}</p>
                <p
                  style="margin-bottom: 0px;"
                >{{ $t("message.page6_contact.address.detail.line3") }}</p>
              </div>
            </div>
          </div>
          <div>
            <p class="topic">{{ $t("message.page6_contact.contact.title") }}</p>
          </div>
          <div d-flex>
            <div class="d-flex flex-row p-2 align-items-center">
              <mdb-icon icon="phone" style="margin-right: 10px;" />
              <p style="margin-bottom: 0px;">{{ $t("message.page6_contact.contact.detail.line1") }}</p>
            </div>
            <div class="d-flex flex-row p-2 align-items-center">
              <mdb-icon icon="envelope-open" style="margin-right: 10px;" />
              <p style="margin-bottom: 0px;">{{ $t("message.page6_contact.contact.detail.line2") }}</p>
            </div>
          </div>
        </div>
        <div style="border-radius: 5px;overflow: hidden;background-color: #eff0f2;">
          <div class="mapdiv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1939.0583564645842!2d99.5063870585839!3d13.589680794078491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e3470848eda061%3A0xeb298b44171d0ed3!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LiY4LiZ4Lia4Li44Lij4Li1ICjguKPguLLguIrguJrguLjguKPguLUp!5e0!3m2!1sth!2sth!4v1548934623823"
              width="600"
              height="300"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
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
  background-image: url("/static/img/contact/bg.jpg");
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
