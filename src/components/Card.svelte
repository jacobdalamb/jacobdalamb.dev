<script lang="ts">
  export let items: any[];
  import { dataCard, dataCardContent } from "../styles/data.css";
</script>

{#each items as item}
  <div class={dataCard}>
    <div>
      <p>
        <a
          href={item.url || item.site}
          target="_blank"
          rel="noopener noreferrer">{item.title}</a
        >
      </p>
    </div>

    {#if item.description}
      <div class={dataCardContent}>
        <p>{item.description}</p>
      </div>
    {/if}
  </div>
{/each}
