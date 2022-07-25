<template>
  <Artplayer @get-instance="getInstance" :option="option" :style="style" />
  <div v-if="movies">
    <h1>hey {{ this.id }}</h1>
    <div v-for="move of movies" :key="move.id">
      <h1>{{ move.title }}</h1>
    </div>
  </div>
  <div v-else>Loading ...</div>
</template>

<script>
// import Artplayer from "artplayer/examples/vue/Artplayer";
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,

      movies: null,
      errors: [],

      option: {
        container: ".artplayer-app",
        url: "https://dl3.3rver.org/hex1/Series/The.Flash/S01/The.Flash.S01.E01.720p.HexDL.com.mkv",
        autoplay: true,
        muted: true,
        volume: 0.5,
        theme: "red",
        title: "The Flash",
        screenshot: true,
        autoSize: true,
        autoMini: true,
        loop: true,
        aspectRatio: true,
        setting: true,
        hotkey: true,
        miniProgressBar: true,
        moreVideoAttr: {
          "webkit-playsinline": true,
          playsInline: true,
        },
        lock: true,
        fastForward: true,
        autoOrientation: true,
      },
      style: {
        width: "600px",
        height: "400px",
        margin: "60px auto 0",
      },
    };
  },
  components: {
    // Artplayer,
  },
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
