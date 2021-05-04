<script>
  import Icon from 'svelte-awesome';
  export let type = 'primary';
  export let flat = false;
  export let inverse = false;
  export let href = '';
  export let iconData;
</script>

{#if !href}
  <button class={`btn ${type}`} class:flat class:inverse>
    {#if iconData}
      <Icon data={iconData} class="btn-icon" />
    {/if}
    <slot />
  </button>
{:else}
  <a role="button" class={`btn ${type}`} class:flat class:inverse {href}>
    {#if iconData}
      <Icon data={iconData} class="btn-icon" />
    {/if}
    <slot />
  </a>
{/if}

<style>
  .btn,
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }

  a.btn {
    text-decoration: none;
  }

  .primary {
    background: rgb(var(--color-primary));
    color: white;
  }

  .secondary {
    background: purple;
    color: white;
  }

  .flat {
    box-shadow: none;
  }

  .primary.inverse {
    background: transparent;
    border: 1px solid rgb(var(--color-primary));
    color: rgb(var(--color-primary));
  }
</style>
