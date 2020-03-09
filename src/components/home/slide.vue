<template>
  <div class="container slide-mb">
    <div class="img-container">
      <img class="img-item" :src="imageList[currentImg - 1]" />
      <div class="img-pagination">
        <button class="left-btn" v-on:click="prevImg();">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="right-btn" v-on:click="nextImg();">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeSlide",
  created() {
    this.getImageSlide();
  },
  data() {
    return {
      imageList: [],
      currentImg: 1
    };
  },
  methods: {
    getImageSlide: function() {
      axios.get("http://nhbee.kmutt.ac.th/api/carousel").then(res => {
        if (res.status != 404 || res.status != 500) {
          this.imageList = res.data;
        } else {
          this.imageList = this.imageList;
        }
      });
    },
    nextImg() {
      var all = this.imageList.length;
      if (this.currentImg < all) {
        this.currentImg = this.currentImg + 1;
      } else if (this.currentImg >= all) {
        this.currentImg = 1;
      }
    },
    prevImg() {
      var all = this.imageList.length;
      if (this.currentImg > 1) {
        this.currentImg = this.currentImg - 1;
      } else if (this.currentImg <= all) {
        this.currentImg = all;
      }
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
  position: relative;
}

.img-container {
  width: 100%;
  position: relative;
  transition: all 0.3s;
}
.img-container:hover > .img-pagination > button.right-btn,
.img-container:hover > .img-pagination > button.left-btn {
  opacity: 0.5;
  transition: all 0.3s;
}
.img-container:hover > .img-pagination > button.right-btn > i,
.img-container:hover > .img-pagination > button.left-btn > i {
  color: #fff;
}

.img-item {
  width: 100%;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
}
.left-btn,
.right-btn {
  font-size: 20px;
  background: black;
  border: 0;
  opacity: 0;
  height: 300px;
  width: 50px;
  transition: all 0.3s;
  position: absolute;
  transform: translate(0, -50%);
  user-select: none;
  outline: none;
}
.img-pagination > .left-btn {
  top: 50%;
  left: 0px;
}
.img-pagination > .right-btn {
  top: 50%;
  right: 0px;
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
  .img-item {
    height: 150px;
  }
}
</style>
