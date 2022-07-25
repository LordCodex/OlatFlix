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
      <swiper-slide v-for="movie of movies" :key="movie.id">
        <router-link
          :to="{
            name: 'Play Movie',
            params: { id: movie.id, username: 'eduardo' },
          }"
        >
          <div
            class="swipe-container"
            :style="{ backgroundImage: `url(${movie.img})` }"
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
                :style="{ backgroundColor: movie.color }"
                href="catagory.html"
                >{{ movie.category }}</a
              >
            </div>
            <div class="post-title">
              <h2>{{ movie.title }}</h2>
            </div>
            <div class="post-author-section">
              <div class="play-text">
                <i class="fas fa-video" style="color: white"></i>
                {{ movie.type }}
              </div>
              <div class="bookmark-text">
                <i class="fas fa-clock" style="color: white"></i>
                {{ movie.time }}
              </div>
              <div class="play-text">
                <i class="fas far fa-calendar-alt" style="color: white"></i>
                {{ movie.year }}
              </div>
              <div class="play-text">
                <i class="fas far fa-user" style="color: white"></i>
                {{ movie.age }} <b>+</b>
              </div>
            </div>
            <div class="color-overlay"></div></div></router-link
      ></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import axios from "axios";
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
  data() {
    return {
      movies: [],
      errors: [],
    };
  },

  // Fetches movies when the component is created.
  async created() {
    try {
      const response = await axios.get(
        `https://olatflix.funaabite.xyz/api/v1/featured/yes`
      );
      this.movies = response.data;
    } catch (e) {
      this.errors.push(e);
    }
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
  border-radius: 5px;
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
  gap: 0.7em;
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
  border-radius: 5px;
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
.play-text,
.bookmark-text {
  font-size: 13px;
}
</style>
