<template>
  <div class="container maindiv">
    <div class="row">
      <div class="col-lg-4 col-sm-4 col-xs-12">
        <megamenu :category="category1" :label1="group1_1" link1="/about" :label2="group1_2" link2="/"/>
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-12">
        <megamenu
          :category="category2"
          :label1="group2_1"
          link1="/"
          :label2="group2_2"
          link2="/"
          :label3="group2_3"
          link3="/"
        />
      </div>
      <div class="col-lg-4 col-sm-4 col-xs-12">
        <megamenu :category="category3" :label1="group3_1" link1="/" :label2="group3_2" link2="/"/>
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
    }
  }
};
</script>

<style scoped>
.maindiv {
  color: white;
  padding: 20px;
}
.menu-img {
  max-width: 100%;
}
</style>
