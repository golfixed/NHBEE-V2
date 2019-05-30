<template>
  <mdb-carousel style="background-color:white;" :interval="8000" showControls showIndicators>
    <mdb-carousel-item img src="/static/img/homeslide/01.jpg" mask="black-slight" alt="First slide">
      <!-- <mdb-carousel-caption title="Super light mask" text="First text"></mdb-carousel-caption> -->
    </mdb-carousel-item>
    <mdb-carousel-item
      img
      src="/static/img/homeslide/02.jpg"
      mask="black-slight"
      alt="Second slide"
    >
      <!-- <mdb-carousel-caption title="Super light mask" text="Second text"></mdb-carousel-caption> -->
    </mdb-carousel-item>
    <mdb-carousel-item img src="/static/img/homeslide/03.jpg" mask="black-slight" alt="Third slide">
      <!-- <mdb-carousel-caption title="Super light mask" text="Third text"></mdb-carousel-caption> -->
    </mdb-carousel-item>
    <mdb-carousel-item img src="/static/img/homeslide/04.jpg" mask="black-slight" alt="Third slide">
      <!-- <mdb-carousel-caption title="Super light mask" text="Third text"></mdb-carousel-caption> -->
    </mdb-carousel-item>
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
  }
};
</script>

<style>
</style>
