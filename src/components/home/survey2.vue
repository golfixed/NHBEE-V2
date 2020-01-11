<template>
  <div class="container bg">
    <div class="row survey-section" v-if="isSubmitted == true && thankYou == true">
      <div class="thankyou-msg-div">
        <label class="line2">เราได้รับคำตอบของคุณแล้ว</label>
        <label class="line1">ขอบคุณค่ะ</label>
        <div class="btn-container">
          <router-link to="/">
            <button class="survey2-btn" v-on:click="closeThankYou();" style="margin-top: 20px;">
              <i class="fas fa-times" style="margin-right: 5px;"></i>
              ปิด
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="row survey-section" v-if="isSubmitted == false">
      <div
        class="col-lg-6 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center"
        style="padding-top: 30px;"
      >
        <div class="d-flex flex-column text-box" style="cursor: default;">
          <span class="line2">{{ $t("message.survey2.line1")}}</span>
          <span class="line1">{{ $t("message.survey2.line2")}}</span>
        </div>
      </div>
      <div
        class="col-lg-6 col-sm-6 col-xs-12"
        style="padding: 30px;border: 1px solid #6b5842;border-width: 0 0 0 1px;"
      >
        <div class="form2-display">
          <div class="form-item">
            <span class="form-item-label">{{ $t("message.survey2.label.name")}}</span>
            <input
              class="survey2-input-box"
              type="text"
              name="name"
              v-model="form_name"
              required
              placeholder="กมลวรรณ งานดี"
            />
          </div>
          <div class="form-item">
            <span class="form-item-label">{{ $t("message.survey2.label.country")}}</span>
            <input
              class="survey2-input-box"
              type="text"
              name="country"
              v-model="form_country"
              required
              placeholder="ไทย"
            />
          </div>
          <div class="form-item">
            <span class="form-item-label">{{ $t("message.survey2.label.province")}}</span>
            <input
              class="survey2-input-box"
              type="text"
              name="province"
              v-model="form_city"
              required
              placeholder="กรุงเทพมหานครฯ"
            />
          </div>
          <div class="form-item">
            <div>
              <span
                class="form-item-label"
                style="grid-column: span 2;"
              >{{ $t("message.survey2.label.reason")}}</span>
            </div>
            <div style="display:block;cursor: default;">
              <div>
                <input
                  id="reason0"
                  type="checkbox"
                  name="reason"
                  value="research"
                  v-model="form_reason[0]"
                />
                <label style="margin:0;" for="reason0">{{ $t("message.survey2.reason.research")}}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason1"
                  name="reason"
                  value="training"
                  v-model="form_reason[1]"
                />
                <label style="margin:0;" for="reason1">{{ $t("message.survey2.reason.beekeep")}}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason2"
                  name="reason"
                  value="pollination"
                  v-model="form_reason[2]"
                />
                <label style="margin:0;" for="reason2">{{ $t("message.survey2.reason.pollservice")}}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reason3"
                  name="reason"
                  value="others"
                  v-model="form_reason[3]"
                />
                <label style="margin:0;" for="reason3">{{ $t("message.survey2.reason.other")}}</label>
              </div>
            </div>
          </div>
          <div class="button-layout">
            <button @click="submitForm();" class="survey2-btn" style="outline: none;">
              <i class="fas fa-paper-plane" style="margin-right: 10px;"></i>
              {{ $t("message.survey2.btn")}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
import axios from "axios";
export default {
  name: "survey",
  components: {
    mdbIcon
  },
  data() {
    return {
      form_name: "",
      form_country: "",
      form_city: "",
      form_reason: [false, false, false, false],
      isSubmitted: false,
      thankYou: false
    };
  },
  methods: {
    closeThankYou: function() {
      this.thankYou = false;
    },
    submitForm: function() {
      axios
        .post("/api/survey/mini", {
          name: this.form_name,
          country: this.form_country,
          city: this.form_city,
          reason: this.form_reason.map(val => (val ? "1" : "0")).join("|")
        })
        .then(res => {
          if (res.Status === 200) {
            this.isSubmitted = true;
            this.thankYou = true;
          } else this.isSubmitted = this.isSubmitted;
        });
    }
  }
};
</script>

<style scoped>
.thankyou-msg-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
}

#reason0,
#reason1,
#reason2,
#reason3 {
  margin-right: 5px;
}
.survey-section {
  width: 100%;
  margin: 0;
  padding: 0;
  /* border: 1px solid #e5b865;
  border-width: 1px 0 0 0; */
}
.container {
  border-radius: 0 0 5px 5px;
  overflow: hidden;
}
.button-layout {
  display: flex;
  justify-content: flex-end;
}
.survey2-input-box {
  color: #ffffff;
  background-color: #282828;
  border: 5px solid #282828;
  border-radius: 5px;
  padding-left: 5px;
}
.survey2-select-box {
  border-radius: 0;
  cursor: pointer;
}
.survey2-btn {
  padding: 0 10px;
  color: #ffffff;
  background-color: #282828;
  border: 5px solid #282828;
  border-radius: 5px;
  transition: all 0.2s;
}
.survey2-btn:hover {
  background-color: #333333;
  border: 5px solid #333333;
  transition: all 0.2s;
}
.form-item {
  margin: 10px 0;
  display: grid;
  grid-template-columns: 30% 70%;
}
.form-item-label {
  width: 100px;
  font-weight: bold;
}
.bg {
  padding: 0px;
  background: rgba(92, 79, 56, 1);
  background: -moz-linear-gradient(
    45deg,
    rgba(92, 79, 56, 1) 0%,
    rgba(169, 139, 106, 1) 100%
  );
  background: -webkit-gradient(
    left bottom,
    right top,
    color-stop(0%, rgba(92, 79, 56, 1)),
    color-stop(100%, rgba(169, 139, 106, 1))
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(92, 79, 56, 1) 0%,
    rgba(169, 139, 106, 1) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgba(92, 79, 56, 1) 0%,
    rgba(169, 139, 106, 1) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgba(92, 79, 56, 1) 0%,
    rgba(169, 139, 106, 1) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(92, 79, 56, 1) 0%,
    rgba(169, 139, 106, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5c4f38', endColorstr='#a98b6a', GradientType=1 );
}
.light-btn {
  border: 1px solid black;
  color: white;
  background-color: black;
  height: 45px;
  font-size: 22px;
  margin: 20px 0px;
}
.line1 {
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
}
.line2 {
  color: #e5b865;
  font-size: 2.5rem;
  font-weight: bold;
}
.text-box {
  padding-bottom: 20px;
  text-align: center;
}
@media screen and (max-width: 425px) {
  .line1 {
    font-size: 1.5rem;
  }
  .line2 {
    font-size: 2rem;
  }
  .text-box {
    padding-bottom: 0px;
  }
  .button-layout {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  .container {
    border-radius: 0;
  }
}
</style>
