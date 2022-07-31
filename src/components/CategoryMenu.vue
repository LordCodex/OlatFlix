<template>
  <div>
    <div class="category-section">
      <div class="category-text">Category</div>
      <div class="categories">
        <div
          class="category-box"
          v-for="category of categories"
          :key="category.id"
          :style="{ backgroundImage: `url(${category.img})` }"
        >
          <div class="category-btn">
            <a
              class="post-category"
              style="color: white"
              href="catagory.html"
              >{{ category.title }}</a
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
      categories: [],
      errors: [],
    };
  },

  // Fetches category when the component is created.
  async created() {
    try {
      const response = await axios.get(
        `https://olatflix.funaabite.xyz/api/v1/category`
      );
      this.categories = response.data;
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
  padding: 1em 0;
  background: green;
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
  overflow-x: auto;
}
.categories::-webkit-scrollbar {
  width: 0;
}
.category-box {
  padding: 2.5em;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
