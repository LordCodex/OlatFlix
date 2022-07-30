<template>
  <div>
    <div class="category-section">
      <div class="category-text">Category</div>
      <div class="categories">
        <div
          class="category-box"
          style="
            background: url('https://bestmoviecast.com/wp-content/uploads/2019/11/Tune-in-for-Love.jpg');
          "
        >
          <div class="category-btn">
            <a
              class="post-category"
              :style="{ backgroundColor: yellow }"
              href="catagory.html"
              >hey</a
            >
          </div>
        </div>

        <div
          class="category-box"
          style="
            background: url('https://bestmoviecast.com/wp-content/uploads/2019/11/Tune-in-for-Love.jpg');
          "
        >
          <div class="category-btn">
            <a
              class="post-category"
              :style="{ backgroundColor: yellow }"
              href="catagory.html"
              >hey</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// Import Swiper Vue.js components

// import { Swiper, SwiperSlide } from "swiper/vue";
// import SwiperCore, { Autoplay } from "swiper/core";
// SwiperCore.use([Autoplay]);
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/bundle";
export default {
  name: "CategoryMenu",
  components: {
    // Swiper,
    // SwiperSlide,
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
.category-section {
  margin-top: 1em;
  padding: 1em;
  background: url("https://media.istockphoto.com/photos/water-drops-pattern-on-black-background-picture-id1218081339?k=20&m=1218081339&s=612x612&w=0&h=oMNcvpntEeNrFA8UvpD5dybXpyBOsedx2_9L-RtElfY=");
  display: flex;
  align-items: center;
}
.category-btn {
  padding: 2em 0;
}
.category-text {
  color: white;
  font-weight: 700;
  transform: rotate(-90deg);

  /* Legacy vendor prefixes that you probably don't need... */

  /* Safari */
  -webkit-transform: rotate(-90deg);

  /* Firefox */
  -moz-transform: rotate(-90deg);

  /* IE */
  -ms-transform: rotate(-90deg);

  /* Opera */
  -o-transform: rotate(-90deg);

  /* Internet Explorer */
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}
.categories {
  display: flex;
  gap: 1em;
}
.category-box {
  padding: 2.5em;
  border-radius: 15px;
}
</style>
