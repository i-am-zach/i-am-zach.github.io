<template>
  <div>
    <Navbar />
    <div class="home">
      <img
        class="hero-img"
        src="@/assets/yearbook_square.png"
        alt="My Picture"
      />
      <div class="divider" />
      <h1>Hello! I am Zach.</h1>
      <h3>
        I’m a high school student who creates websites and is learning how to
        hack.
      </h3>
      <div class="button">
        <button class="btn-top">See my resume</button>
        <div class="btn-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.home {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hero-img {
    width: 194px;
    border-radius: 25px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-bottom: 36px;
  }

  .divider {
    background: $dark-2;
    height: 5px;
    width: 182px;
  }

  h1, h3 {
    text-align: center;
    max-width: $max-width;
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 2rem;
    font-weight: 400;
  }

  .button {
    width: 338px;
    height: 55px;
    position: relative;

    .btn-top {
      position: relative;
      z-index: 20;
      cursor: pointer;
      width: 100%;
      height: 100%;
      background: $purple;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $light-1;
      font-size: 26px;
      border: none;
      transition: all 200ms ease;

      &:hover {
        background: $light-purple;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
    }

    .btn-bottom {
      position: absolute;
      z-index: 10;
      height: 100%;
      width: 100%;
      top: 0.8rem;
      left: 0.8rem;
      background: transparent;
      border: 2px solid $dark-2;
    }
  }
}
</style>
