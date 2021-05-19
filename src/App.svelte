<script>
  import ProjectCard from './components/project-card.svelte';

  let projects = [
    {
      title: 'UIUC Grade Statistics',
      description: 'My basic description',
      imageUrl: '/images/zach.png',
    },
    {
      title: 'UIUC Grade Statistics',
      description: 'My basic description',
      imageUrl: '/images/zach.png',
    },
    {
      title: 'UIUC Grade Statistics',
      description: 'My basic description',
      imageUrl: '/images/zach.png',
    },
    {
      title: 'UIUC Grade Statistics',
      description: 'My basic description',
      imageUrl: '/images/zach.png',
    },
  ];

</script>

<main>
  <section class="hero">
    <div class="profile-img">
      <img src="images/zach.png" alt="Zach Lefkovitz" />
    </div>
    <h1>Hey There 👋<br />I'm Zach</h1>
    <div class="buttons">
      <a href="/resume.pdf" target="__blank" class="btn main">View my resume</a>
      <a href="/#projects" class="btn main outline">Check out my projects</a>
    </div>
  </section>

  <section class="projects with-ellipse" id="projects">
    <div class="section-title">Projects</div>
    <div class="project-grid">
      {#each projects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </section>
</main>

<style lang="scss">
  @import './scss/variables.scss';

  .section-title {
    position: relative;
    z-index: 3;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    padding-top: 2rem;
  }

  section.projects {
    background: $background-secondary;
  }

  section.with-ellipse {
    margin-top: 15px;
  }

  section.with-ellipse::before {
    position: absolute;
    content: '';
    top: -15px;
    width: 100%;
    height: 30px;
    background: inherit;
    clip-path: ellipse();
  }

  section.hero {
    padding-top: 1rem;
    padding-bottom: 3rem;
    text-align: center;

    .profile-img {
      margin: 0 auto;
      width: 200px;
      height: 200px;
      overflow: hidden;
      border-radius: 0.7rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    h1 {
      font-size: 60px;
      font-weight: bold;
      padding-top: 1rem;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      padding-top: 2rem;
      max-width: 300px;
      margin: 0 auto;
      gap: 1rem;
    }
  }

  .project-grid {
    padding: 2rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

</style>
