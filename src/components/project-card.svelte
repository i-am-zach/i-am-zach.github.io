<script>
    export let project;
</script>

<div class="card">
    <img class="img" src={project.imageUrl } alt={project.title }>
    <div class="title">{ project.title }</div>
    <div class="description">{ project.description }</div>
</div>

<style lang="scss">
    @import "../scss/variables.scss";

    .card  {
        background: $background-primary;
        border: 2px solid white;
        border-radius: 0.5rem;
        padding: 1rem;
        text-align: center;

        .img {
            width: 100%;
            height: auto;
            border-radius: 0.5rem;
        }

        .title {
            padding-top: 0.5rem;
            font-weight: bold;
            font-size: 1.75rem;
        }

        .description {
            padding-top: 0.5rem;
        }
    }
</style>