<template>
  <nav id="nav" class="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between container pt-3">
    <div class="relative w-screen flex justify-center sm:w-max sm:block">
      <router-link to="/"><img src="@/assets/Logo.svg" /></router-link>
      <div v-if="$mq === 'sm'" class="hamburger" role="button" @click="showMobile = !showMobile">
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
    <div v-if="$mq !== 'sm' || showMobile" class="nav-menu flex flex-col gap-2 mt-3 sm:block sm:gap-0 sm:mt-0">
      <router-link class="nav-link" to="/">Home</router-link>
      <a class="nav-link" href="/#about-me">About Me</a>
      <router-link class="nav-link" to="/projects">Projects</router-link>
    </div>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            showMobile: false,
        }
    }
};
</script>


<style scoped>
.hamburger {
    position: absolute;
    top: 0;
    right: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hamburger div {
    width: 2rem;
    height: 4px;
    background: black;
    margin-bottom: 4px;
    border-radius: 4px;
}

.nav-link {
  @apply text-gray-900 sm:ml-8 text-xl font-normal;
}

.nav-link:first-child {
    @apply ml-0;
}
</style>