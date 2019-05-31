<template>
  <mdb-carousel style="background-color:white;" :interval="8000" showControls showIndicators>
    <mdb-carousel-item img src="/static/img/homeslide/02.jpg" mask="black-slight" alt="First slide">
    <!-- <button @click="test();">Click test</button> -->
    </mdb-carousel-item>
    <mdb-carousel-item img src="/static/img/homeslide/03.jpg" mask="black-slight" alt="Third slide"></mdb-carousel-item>
    <mdb-carousel-item img src="/static/img/homeslide/04.jpg" mask="black-slight" alt="forth slide"></mdb-carousel-item>
  </mdb-carousel>
</template>

<script>
import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from "mdbvue";
export default {
  name: "HomeSlide",
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption
  },
  methods:{
    test: function() {
      console.log('TEST');
    }
  }
};
</script>

<style>
</style>
