<template>
  <div v-if="movies">
    <h1>hey {{ this.id }}</h1>
    <div v-for="move of movies" :key="move.id">
      <h1>{{ move.title }}</h1>
      <p>Synopsis: {{ move.synopsis }}</p>
      <!-- <div class="video_container">
        <video v-bind:src="move.videolink" id="video"></video>
      </div> -->
    </div>
  </div>
  <div v-else>Loading ....</div>
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
