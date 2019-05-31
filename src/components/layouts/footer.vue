<template>
  <div class="container-fluid bg" style="padding-top: 70px;">
    <div class="container">
      <div class="row" style="padding: 20px 0px 60px 0px;">
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
      <div class="row" style="padding: 20px 0px; color: white; border-top: 1px solid #e5b864;">
        <div
          class="col-lg-6 col-sm-6 col-xs-12"
          style="padding: 0px; color:#CBCBCB;"
        >Copyright © Native Honeybee Laboratory 2019</div>
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
</style>
