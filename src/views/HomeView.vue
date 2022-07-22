<template>
  <div class="home"></div>
  <NavBar />
  <div class="body-wi">
    <div class="date__section">
      <h3>Latest Movie</h3>
      <p>{{ currentDate() }}</p>
    </div>
    <SliderMenu />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SliderMenu from "../components/SliderMenu.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
    SliderMenu,
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}-${
        current.getMonth() + 1
      }-${current.getFullYear()}`;
      return date;
    },
  },
};
</script>
<style scoped>
.body-wi {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}
.date__section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.date__section p {
  color: #797494;
  font-size: 14px;
}
</style>
