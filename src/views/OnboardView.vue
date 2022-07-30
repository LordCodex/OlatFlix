<template>
  <div class="login_container">
    <div class="login_box">
      <div class="logo">
        <img src="~@/assets/img/logoround.png" alt="" />
      </div>
      <div class="login_text">
        <p>
          Watch your favourite movie or series on only one platform. You can
          watch it anywhere and anytime.
        </p>
      </div>
      <div class="login_buttons">
        <router-link to="/login"
          ><button class="signin">Log in</button></router-link
        >
        <button class="continue">
          <i class="fab fa-google"></i> &nbsp;&nbsp;Continue With Google
        </button>
      </div>
      <div class="footmenu login_text">
        <p>By Signing Up You Agree to Our ToS and Privacy Policy!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnboardView",
};
</script>

<style scoped>
.login_container {
  background-image: url("~@/assets/img/black_panther.jpg");
  background-color: #5e8e8e;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  backface-visibility: hidden;
  animation: slideBg 20s linear infinite 2s;
  animation-timing-function: ease-in-out;
  padding: 1em;
}
@keyframes slideBg {
  0% {
    background-image: url("~@/assets/img/black_panther.jpg");
  }
  25% {
    background-image: url("~@/assets/img/dune.jfif");
  }
  50% {
    background-image: url("~@/assets/img/kungfu.jpg");
  }
  75% {
    background-image: url("~@/assets/img/grayman.jfif");
  }
  100% {
    background-image: url("~@/assets/img/soul.jpg");
  }
}
.login_container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  opacity: 0.9;
  border-radius: 5px;
  z-index: 1;
}
.login_container > * {
  z-index: 100;
  position: relative;
}
.login_text {
  color: white;
  margin-top: 6em;
}
.login_buttons {
  display: flex;
  flex-direction: column;
  /* gap: 0.1em; */
  align-items: center;
}
button {
  width: 100%;
  padding: 1em;
  border-radius: 4px;
  border: 1px solid green;
  background-color: green;
  color: #fff;
  font-weight: 700;
  margin: 1em 0;
  cursor: pointer;
}
a {
  width: 100%;
}
.continue {
  background: none;
  border: 1px solid white;
  text-align: center;
  align-items: center;
}
.login_box {
  margin-top: 10vh;
  text-align: center;
}
.logo img {
  width: 30%;
  margin: 3em 0;
}
@media (min-width: 768px) {
  .login_box {
    padding: 3em;
    max-width: 40%;
    margin: 0 auto;
    margin-top: 2em;
    background-color: rgba(0, 0, 0, 0.849);
  }
  .login_text {
    color: white;
    margin-top: 2em;
  }
  .logo img {
    width: 20%;
    margin: 3em 0;
  }
}
.footmenu {
  margin-top: 0.5em;
  font-size: 11px;
}
.fa-google {
  color: white;
}
</style>
