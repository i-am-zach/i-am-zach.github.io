<template>
  <nav id="nav" class="sized flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between pt-3">
    <div class="relative w-screen flex justify-center sm:w-max sm:block">
      <img src="@/assets/Logo.svg" />
      <div v-if="$mq === 'sm'" class="hamburger" role="button" @click="showMobile = !showMobile">
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
    <div v-if="$mq !== 'sm' || showMobile" class="nav-menu flex flex-col gap-2 mt-3 sm:block sm:gap-0 sm:mt-0">
      <a class="nav-link" href="/#about-me">About Me</a>
      <a class="nav-link" href="https://www.linkedin.com/in/zach-lefkovitz-714a0418b/" target="_blank">LinkedIn</a>
      <a class="nav-link" href="https://dev.to/iamzach" target="_blank">DevTo</a>
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