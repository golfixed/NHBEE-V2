<template>
  <div class="container slide-mb">
    <mdb-carousel :interval="8000" showControls showIndicators>
      <mdb-carousel-item
        img
        src="/static/img/homeslide/02.jpg"
        mask="black-slight"
        alt="First slide"
      >
        <!-- <button @click="test();">Click test</button> -->
      </mdb-carousel-item>
      <mdb-carousel-item
        img
        src="/static/img/homeslide/03.jpg"
        mask="black-slight"
        alt="Third slide"
      ></mdb-carousel-item>
      <mdb-carousel-item
        img
        src="/static/img/homeslide/04.jpg"
        mask="black-slight"
        alt="forth slide"
      ></mdb-carousel-item>
    </mdb-carousel>
    <!-- <carousel :data="slide" :controls="true" :autoplay="false"></carousel> -->
  </div>
</template>

<script>
import {
  mdbCarousel,
  mdbCarouselItem,
  mdbCarouselCaption,
  mdbBtn
} from "mdbvue";
export default {
  name: "HomeSlide",
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbBtn
  },
  data() {
    return {
      slide: [
        '<div class="example-slide"><a href="/contact"><img style="width:100%;" src="/static/img/homeslide/03.jpg" /><a/></div>',
        '<div class="example-slide"><a href="/contact"><img style="width:100%;" src="/static/img/homeslide/01.jpg" /><a/></div>',
        '<div class="example-slide"><a href="/contact"><img style="width:100%;" src="/static/img/homeslide/02.jpg" /><a/></div>'
      ]
    };
  },
  methods: {
    test: function() {
      console.log("TEST");
    }
  }
};
</script>

<style scoped>
.slide-mb {
  padding: 0;
  -webkit-border-radius: 5px 5px 0 0;
  -khtml-border-radius: 5px 5px 0 0;
  -moz-border-radius: 5px 5px 0 0;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
}
@media screen and (max-width: 425px) {
  .container {
    padding: 0;
    border-radius: 0;
    overflow: hidden;
  }
  .slide-mb {
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>
