<script lang="ts">
  export let items: any[];

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()}`;
  }
</script>

{#each items as item}
  <div data-card>
    <div data-card-header>
      {#if item.folder}
        <img
          data-image-cover
          loading="lazy"
          src={item.cover}
          alt={item.title}
          on:error={() => (item.cover = "../../public/assets/og_home.png")}
        />
      {:else if item.url}
        <a href={item.url} target="_blank" rel="noopener noreferrer"
          >{item.title}</a
        >
      {:else}
        <span>{item.title}</span>
      {/if}
    </div>
    <div data-card-content>
      {#if item.folder}
        {#if item.url}
          <a href={item.url} target="_blank" rel="noopener noreferrer"
            >{item.title}</a
          >
        {:else}
          <span>{item.title}</span>
        {/if}
      {/if}
      {#if item.description}
        <p>{item.description}</p>
      {/if}
    </div>
    <div data-card-footer>
      {#if item.created}
        <small>
            Created on:
            <time datetime={item.created}>{formatDate(item.created)}</time>
        </small>
      {/if}
    </div>
  </div>
{/each}
