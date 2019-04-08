<template>
      <mdb-carousel :interval="8000" showControls showIndicators>
    <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" mask="black-light" alt="First slide">
      <mdb-carousel-caption title="Light mask" text="First text"></mdb-carousel-caption>
    </mdb-carousel-item>
    <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" mask="black-strong" alt="Second slide">
      <mdb-carousel-caption title="Strong mask" text="Second text"></mdb-carousel-caption>
    </mdb-carousel-item>
    <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" mask="black-slight" alt="Third slide">
      <mdb-carousel-caption title="Super light mask" text="Third text"></mdb-carousel-caption>
    </mdb-carousel-item>
  </mdb-carousel>
</template>

<script>
import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue';
  export default {
    name: 'HomeSlide',
    components: {
      mdbCarousel,
      mdbCarouselItem,
      mdbCarouselCaption
    }
  }
</script>

<style>

</style>
