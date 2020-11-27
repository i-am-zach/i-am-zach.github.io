<template>
  <div id="app" class="px-2">
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
/* SF Pro Display font */
@font-face {
    font-family: "SF Pro Display";
    src: url("./assets/fonts/FontsFree-Net-SFProDisplay-Bold.ttf") format("truetype");
    font-weight: 700;
}
@font-face {
    font-family: "SF Pro Display";
    src: url("./assets/fonts/FontsFree-Net-SFProDisplay-Semibold.ttf") format("truetype");
    font-weight: 600;
}
@font-face {
    font-family: "SF Pro Display";
    src: url("./assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf") format("truetype");
    font-weight: 400;
}
@font-face {
    font-family: "SF Pro Display";
    src: url("./assets/fonts/FontsFree-Net-SFProDisplay-Thin.ttf") format("truetype");
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

.container {
  @apply max-w-screen-xl mx-auto;
}
</style>
