<template>
  <div id="app" class="px-2">
    <div class="home">
      <Navbar />
      <!-- HERO SECTION -->
      <section class="sized hero">
        <div class="flex flex-col items-center text-center mt-20 md:mt-24">
          <img
            src="@/assets/profile_square.png"
            class="rounded-3xl h-56 shadow-xl"
          />
          <div class="divider bg-gray-400 mt-8 mb-6" />
          <h1 class="text-4xl md:text-8xl font-bold">Hello! I am Zach.</h1>
          <h3 class="text-2xl md:text-4xl text-gray-500 max-w-screen-lg mt-2">
            I’m a high school student who creates websites and is learning how
            to hack.
          </h3>
          <div class="wire-button mt-8 w-80 h-12 sm:w-96">
            <a href="#about-me"
              ><button class="bg-blue-600 text-gray-100 hover:bg-blue-500">
                See my resume
              </button></a
            >
            <div class="wire"></div>
          </div>
        </div>
      </section>
      <!-- About Section -->
      <section class="sized mt-24">
        <div class="text-center pb-6">
          <h6 class="text-gray-500 text-xl">Who am I?</h6>
          <h2 class="text-gray-900 text-5xl font-semibold" id="about-me">
            About Me
          </h2>
          <p class="mt-3 text-gray-500 text-lg leading-8">
            I am currently a senior at
            <span class="text-red-500 emphasis">Deerfield High School</span> in
            Illinios. Some activities I am involved in are
            <span class="text-pink-500 emphasis">Coding for a Cause</span>,
            <span class="text-yellow-500 emphasis">Volleyball</span>,
            <span class="text-blue-400 emphasis">Model UN</span>,
            <span class="text-black emphasis">Newspaper Editor</span>,
            <span class="text-blue-600 emphasis">DECA</span>, and
            <span class="text-green-500 emphasis">Volunteer Work</span>. Outside
            of my AP Computer Science classes, all of my programming knowledge
            is self-taught.
          </p>
        </div>
      </section>
      <!-- Skills Section -->
      <section class="sized mt-12">
        <div class="text-center pb-6">
          <h6 class="text-gray-500 text-xl">What I'm good at</h6>
          <h2 class="text-gray-900 text-5xl font-semibold">
            Skills
          </h2>
        </div>
      </section>
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

<style>
/* SF Pro Display font */
@font-face {
  font-family: "SF Pro Display";
  src: url("./assets/fonts/FontsFree-Net-SFProDisplay-Bold.ttf")
    format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "SF Pro Display";
  src: url("./assets/fonts/FontsFree-Net-SFProDisplay-Semibold.ttf")
    format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "SF Pro Display";
  src: url("./assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf")
    format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "SF Pro Display";
  src: url("./assets/fonts/FontsFree-Net-SFProDisplay-Thin.ttf")
    format("truetype");
  font-weight: 300;
}
@font-face {
  font-family: "SF Pro Display";
  src: url("./assets/fonts/FontsFree-Net-SFProDisplay-HeavyItalic.ttf");
  font-weight: 700;
  font-style: italic;
}
@font-face {
  font-family: "SF Pro Display";
  src: url("./assets/fonts/FontsFree-Net-SFProDisplay-RegularItalic.ttf");
  font-weight: 500;
  font-style: italic;
}

.sized {
  @apply max-w-screen-lg mx-auto;
}

.emphasis {
  @apply font-semibold hover:underline;
}

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
