<template>
  <div>
    <swiper
      :slides-per-view="1"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div
          class="swipe-container"
          style="
            background-image: url('https://www.movieguide.org/wp-content/uploads/2012/08/10336.jpg');
          "
        >
          <div class="swipe-icons">
            <div class="play">
              <i
                class="fas fa-play-circle"
                style="color: red; font-size: 25px"
              ></i>
            </div>
            <div class="bookmark">
              <i
                class="far fa-bookmark"
                style="color: white; font-size: 25px"
              ></i>
            </div>
          </div>
          <div class="category-btn">
            <a
              class="post-category"
              style="background-color: #e42f08"
              href="catagory.html"
              >American</a
            >
          </div>
          <div class="post-title">
            <h2>Mission impossible</h2>
          </div>
          <div class="post-author-section">
            <div class="play">
              <i class="fas fa-video" style="color: white"></i> Sci-fi
            </div>
            <div class="bookmark">
              <i class="fas fa-clock" style="color: white"></i> 2 hours 30 mins
            </div>
            <div class="play">
              <i class="fas far fa-calendar-alt" style="color: white"></i> 2020
            </div>
          </div>
          <div class="color-overlay"></div></div
      ></swiper-slide>
      <swiper-slide>
        <div
          class="swipe-container"
          style="
            background-image: url('https://6.viki.io/image/1cafa0afb4ae4c97984fb9a2c4ea8541/dummy.jpeg?s=900x600&e=t');
          "
        >
          <div class="swipe-icons">
            <div class="play">
              <i
                class="fas fa-play-circle"
                style="color: red; font-size: 25px"
              ></i>
            </div>
            <div class="bookmark">
              <i
                class="far fa-bookmark"
                style="color: white; font-size: 25px"
              ></i>
            </div>
          </div>
          <div class="category-btn">
            <a
              class="post-category"
              style="background-color: green"
              href="catagory.html"
              >Korean</a
            >
          </div>
          <div class="post-title">
            <h2>Alchemy Of Souls</h2>
          </div>
          <div class="post-author-section">
            <div class="play">
              <i class="fas fa-video" style="color: white"></i> Sci-fi
            </div>
            <div class="bookmark">
              <i class="fas fa-clock" style="color: white"></i> 2 hours 30 mins
            </div>
            <div class="play">
              <i class="fas far fa-calendar-alt" style="color: white"></i> 2020
            </div>
          </div>
          <div class="color-overlay"></div></div
      ></swiper-slide>
      <swiper-slide>
        <div
          class="swipe-container"
          style="
            background-image: url('https://static.next-episode.net/tv-shows-images/huge/the-flash.jpg');
          "
        >
          <div class="swipe-icons">
            <div class="play">
              <i
                class="fas fa-play-circle"
                style="color: red; font-size: 25px"
              ></i>
            </div>
            <div class="bookmark">
              <i
                class="far fa-bookmark"
                style="color: white; font-size: 25px"
              ></i>
            </div>
          </div>
          <div class="category-btn">
            <a
              class="post-category"
              style="background-color: red"
              href="catagory.html"
              >American</a
            >
          </div>
          <div class="post-title">
            <h2>The Flash</h2>
          </div>
          <div class="post-author-section">
            <div class="play">
              <i class="fas fa-video" style="color: white"></i> Sci-fi
            </div>
            <div class="bookmark">
              <i class="fas fa-clock" style="color: white"></i> 2 hours 30 mins
            </div>
            <div class="play">
              <i class="fas far fa-calendar-alt" style="color: white"></i> 2020
            </div>
          </div>
          <div class="color-overlay"></div></div
      ></swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper/core";
SwiperCore.use([Autoplay]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
export default {
  name: "SliderMenu",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style-type: none;
  font-family: Roboto, sans-serif;
}
.swipe-container {
  padding: 0.5em 1.2em;
  background-repeat: no-repeat;
  border-radius: 30px;
  position: relative;
  width: 100%;
  background-size: cover;
}
.swipe-icons {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0;
}
.swipe-icons .play {
  /* background-color: white; */
  animation: olatme 2s ease 0s infinite normal both;
}
.category-btn {
  padding: 2em 0;
}
.post-category {
  padding: 0.25rem 0.75rem;
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-weight: 500;
  border-radius: 30px;
}

.post-title {
  color: #ffffff;
  line-height: 1.3;
}

.post-author-section {
  display: flex;
  align-items: center;
  gap: 1em;
  color: #ffffff;
  padding: 1em 0;
  z-index: 1;
}
.swipe-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  border-radius: 30px;
}

.swipe-container::after {
  z-index: 1;
}
.swipe-container > * {
  z-index: 100;
  position: relative;
}
@keyframes olatme {
  0% {
    opacity: 0.8;
    transform: scale(0.2);
  }

  80% {
    opacity: 0;
    transform: scale(1.2);
  }

  100% {
    opacity: 0;
    transform: scale(2.2);
  }
}
</style>
