<template>
  <div class="side-item">
    <h5 class="item-category">{{category}}</h5>
    <mitem :label="label1" :link="link1"/>
    <mitem :label="label2" :link="link2"/>
    <mitem :label="label3" :link="link3"/>
  </div>
</template>

<script>
import mitem from "@/components/layouts/menubaritem.vue";
export default {
  name: "megamenuitem",
  props: ["category", "label1", "link1", "label2", "link2", "label3", "link3"],
  components: {
    mitem
  }
};
</script>

<style scoped>
.item-category {
  border: solid #e5b7654a;
  border-width: 0 0 2px 0;
  margin: 0;
  padding: 5px 0;
  color: #e5b765;
}
</style>
