<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view />
</template>

<style>
@font-face {
  font-family: "Nexabold";
  src: local("Nexabold"),
    url(./assets/fonts/nexa/NexaBold.otf) format("truetype");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  font-family: Nexabold;
}
</style>
