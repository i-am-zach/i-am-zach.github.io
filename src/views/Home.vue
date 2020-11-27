<template>
  <div class="home">
    <Navbar />
    <div class="container hero">
      <div class="flex flex-col items-center text-center mt-20 md:mt-36">
        <img
          src="@/assets/profile_square.png"
          class="rounded-3xl h-56 shadow-xl"
        />
        <div class="divider bg-gray-400 mt-8 mb-6" />
        <h1 class="text-4xl md:text-8xl font-bold">Hello! I am Zach.</h1>
        <h3 class="text-2xl md:text-4xl text-gray-500 max-w-screen-lg mt-2">
          I’m a high school student who creates websites and is learning how to
          hack.
        </h3>
        <div class="wire-button mt-8 w-80 h-12 sm:w-96">
          <a href="#about-me"><button class="bg-blue-600 text-gray-100 hover:bg-blue-500">See my resume</button></a>
          <div class="wire"></div>
        </div>
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

<style scoped>
.divider {
  height: 5px;
  width: 180px;
}

.wire-button {
  position: relative;
}

.wire-button button {
  @apply w-full h-full text-xl relative z-20 hover:shadow-lg;
}

.wire-button .wire {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 1px solid grey;
  z-index: 10;
}
</style>