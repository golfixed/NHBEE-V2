<template>
  <div class="container-fluid bg">
    <div class="row" style="width:100%;margin:0;padding:0;">
      <div
        class="col-lg-6 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center"
        style="padding: 30px;"
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
        <form class="form2-display">
          <div class="form-item">
            <span class="form-item-label">{{ $t("message.survey2.label.name")}}</span>
            <input class="survey2-input-box" type="text" name="name" placeholder="กมลวรรณ งานดี" />
          </div>
          <div class="form-item">
            <span class="form-item-label">{{ $t("message.survey2.label.country")}}</span>
            <input class="survey2-input-box" type="text" name="country" placeholder="ไทย" />
          </div>
          <div class="form-item">
            <span class="form-item-label">{{ $t("message.survey2.label.province")}}</span>
            <input
              class="survey2-input-box"
              type="text"
              name="province"
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
                <input type="checkbox" name="reason" value="research" />
                {{ $t("message.survey2.reason.research")}}
              </div>
              <div>
                <input type="checkbox" name="reason" value="training" />
                {{ $t("message.survey2.reason.beekeep")}}
              </div>
              <div>
                <input type="checkbox" name="reason" value="pollination" />
                {{ $t("message.survey2.reason.pollservice")}}
              </div>
              <div>
                <input type="checkbox" name="reason" value="others" />
                {{ $t("message.survey2.reason.other")}}
              </div>
            </div>
          </div>
          <div style="display:flex;justify-content: flex-end;">
            <button class="survey2-btn" type="submit">{{ $t("message.survey2.btn")}}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
export default {
  name: "survey",
  components: {
    mdbIcon
  }
};
</script>

<style scoped>
.survey2-input-box {
  color: #ffffff;
  background-color: #282828;
  border: 5px solid #282828;
  border-radius: 5px;
}
.survey2-select-box {
  border-radius: 0;
  cursor: pointer;
}
.survey2-btn {
  padding: 0 20px;
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
}
</style>
