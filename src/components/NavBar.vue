<template>
  <div>
    <div class="header-section">
      <header>
        <div class="header-container">
          <div class="search">
            <i class="fas fa-search"></i>
          </div>
          <div class="logo"><h2>OLAT-FLIX</h2></div>
          <div class="toggle_button" @click="ToggleHandler">
            <div v-if="(isClicked = isClicked)">
              <i class="fas fa-th-large"></i>
            </div>
            <div v-else><i class="fas fa-times-circle"></i></div>
          </div>
        </div>
        <div class="nav_links">
          <ul :class="{ active: isClicked }">
            <li>Service</li>
            <li>Payment</li>
            <li><router-link to="/">Company</router-link></li>
            <li>News</li>
          </ul>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isClicked: true,
    };
  },
  methods: {
    ToggleHandler() {
      this.isClicked = !this.isClicked;
      console.log(this.isClicked);
    },
  },
};
</script>

<style scoped>
/* @import "../assets/css/header.css"; */
.toggle_button {
  display: inline;
}
header {
  background-color: black;
  z-index: 3;
}
h2 {
  color: white;
}
.fa-th-large,
.fa-search,
.fa-times-circle {
  color: white;
  font-size: 23px;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 0.8em 0.5em;
}
ul {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100vh;
  background-color: black;
  padding: 3em 0;
  color: white;
  animation: myAnim 1s ease 0s 1 normal forwards;
  z-index: 2;
}
ul a {
  color: white;
}
.active {
  display: none;
}
li {
  margin: 1em;
  text-align: center;
}
.navbut {
  display: none;
}

@keyframes myAnim {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
/* .nav_links {
  display: none;
} */
</style>
