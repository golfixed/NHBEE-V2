<template>
  <div class="container maindiv panel-height">
    <div class="row">
      <div class="col-lg-3 col-sm-3 col-xs-12">
        <megamenu
          :category="category1"
          :label1="group1_1"
          link1="/about"
          :label2="group1_2"
          link2="/team"
        />
      </div>
      <div class="col-lg-3 col-sm-3 col-xs-12">
        <megamenu
          :category="category2"
          :label1="group2_1"
          link1="/research"
          :label2="group2_2"
          link2="/news"
          :label3="group2_3"
          link3="/"
        />
      </div>
      <div class="col-lg-3 col-sm-3 col-xs-12">
        <megamenu
          :category="category3"
          :label1="group3_1"
          link1="/contact"
          :label2="group3_2"
          link2="/social"
        />
      </div>
      <div class="col-lg-3 col-sm-3 col-xs-12">
        <megamenu :category="category4" :label1="group4_1" link1="/" />
        <button
          @click="switchLocal();menubarToggle();"
          class="change-language"
        >{{$t("message.navbar.group4.link2")}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import megamenu from "@/components/layouts/megamenuitem.vue";
export default {
  name: "menubar",
  components: {
    megamenu
  },
  methods: {
    switchLocal() {
      if (this.$i18n.locale === "th") this.$i18n.locale = "en";
      else this.$i18n.locale = "th";
    },
    menubarToggle() {
      this.$store.commit("MENU_TOGGLE");
    }
  },
  computed: {
    category1: function() {
      return this.$t("message.navbar.category.aboutus");
    },
    group1_1: function() {
      return this.$t("message.navbar.group1.link1");
    },
    group1_2: function() {
      return this.$t("message.navbar.group1.link2");
    },
    category2: function() {
      return this.$t("message.navbar.category.research");
    },
    group2_1: function() {
      return this.$t("message.navbar.group2.link1");
    },
    group2_2: function() {
      return this.$t("message.navbar.group2.link2");
    },
    group2_3: function() {
      return this.$t("message.navbar.group2.link3");
    },
    category3: function() {
      return this.$t("message.navbar.category.contact");
    },
    group3_1: function() {
      return this.$t("message.navbar.group3.link1");
    },
    group3_2: function() {
      return this.$t("message.navbar.group3.link2");
    },
    category4: function() {
      return this.$t("message.navbar.category.more");
    },
    group4_1: function() {
      return this.$t("message.navbar.group4.link1");
    }
  }
};
</script>

<style scoped>
.change-language {
  padding: 10px;
  background: none;
  color: #fff;
  border: 0;
  width: 100%;
  text-align: left;
  outline: none;
}
.change-language:hover {
  color: #e5b764;
}
.maindiv {
  color: white;
  padding: 20px;
  height: fit-content;
}
.menu-img {
  max-width: 100%;
}
@media screen and (max-width: 425px) {
  .panel-height {
    height: calc(100vh - 80px);
  }
  .panel-height.shrink {
    height: calc(100vh - 50px);
  }
}
</style>
