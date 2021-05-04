<script lang="ts">
	import Icon from "svelte-awesome";
	import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
	import { } from "@fortawesome/free-regular-svg-icons"
	import Button from "./shared/Button.svelte";
</script>

<main>
  <section class="heading">
    <div class="profile-picture">
      <img src="img/profile.png" alt="Profile" />
    </div>
    <h1 class="name">Zach Lefkovitz</h1>
	<Button inverse href="https://github.com">Email</Button>
	<Button inverse iconData={faLinkedin}>LinkedIn</Button>
	<Button inverse iconData={faGithub}>GitHub</Button>
  </section>
</main>

<style>
  main {
    padding: 1em;
    position: relative;
    z-index: 1;
  }

  .heading {
	  text-align: center;
	  color: white;
  }

  .profile-picture {
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    height: 175px;
    width: 175px;
  }

  .profile-picture img {
    width: 100%;
    height: 100%;
    background-size: contain;
  }

  .name {
    margin-top: 1rem;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
  }

  .description {
	  font-weight: 400;
	  font-size: 1.75rem;
  }
</style>
