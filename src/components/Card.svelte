<script lang="ts">
  export let items: any[];
</script>

{#each items as item}
  <div data-card>
    <div data-card-header>
      <p>
        <a href={item.url} target="_blank" rel="noopener noreferrer"
          >{item.title}</a
        >
      </p>
    </div>

    <div data-card-content>
      <p data-description>{item.description}</p>
    </div>
  </div>
{/each}
