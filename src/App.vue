<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/css/_variables.scss";
@font-face {
  font-family: "SFProDisplay";
  src: url("./fonts/FontsFree-Net-SFProDisplay-Bold.ttf");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "SFProDisplay";
  src: url("./fonts/FontsFree-Net-SFProDisplay-HeavyItalic.ttf");
  font-weight: 700;
  font-style: italic;
}
@font-face {
  font-family: "SFProDisplay";
  src: url("./fonts/FontsFree-Net-SFProDisplay-Semibold.ttf");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "SFProDisplay";
  src: url("./fonts/FontsFree-Net-SFProDisplay-Regular.ttf");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "SFProDisplay";
  src: url("./fonts/FontsFree-Net-SFProDisplay-RegularItalic.ttf");
  font-weight: 500;
  font-style: italic;
}
@font-face {
  font-family: "SFProDisplay";
  src: url("./fonts/FontsFree-Net-SFProDisplay-Thin.ttf");
  font-weight: 300;
  font-style: normal;
}
body {
  background: rgb(242, 242, 242);
  background: radial-gradient(
    circle,
    rgba(242, 242, 242, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(242, 242, 242, 1) 100%
  );
}

#app {
  font-family: "SFProDisplay";

  h1 {
    color: $dark-1;
    font-size: 82px;
    font-weight: 700;
    font-style: normal;
    line-height: 97.29px;
  }

  h2 {
    color: $dark-1;
    font-size: 48px;
    font-weight: 700;
    font-style: normal;
    line-height: 57.28px;
  }

  h3,
  h4 {
    color: $dark-2;
  }

  h3 {
    font-size: 36px;
    line-height: 42.96px;
  }

  h4 {
    font-size: 36px;
    line-height: 43px;
  }
}
</style>
