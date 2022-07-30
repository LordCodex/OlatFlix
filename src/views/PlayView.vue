<template>
  <div v-if="movies">
    <div v-for="move of movies" :key="move.id">
      <h1>Title: {{ move.title }}</h1>
      <p>Synopsis: {{ move.synopsis }}</p>
      <!-- <div class="video_container">
        <video v-bind:src="move.videolink" id="video"></video>
      </div> -->
    </div>
  </div>
  <div
    v-else
    style="
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <img
      src="https://c.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif"
      style="width: 20%"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,

      movies: null,
      errors: [],
    };
  },
  components: {},
  // Fetches movies when the component is created.
  async created() {
    try {
      const response = await axios.get(
        `https://olatflix.funaabite.xyz/api/v1/movie/` + this.id
      );
      this.movies = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>
