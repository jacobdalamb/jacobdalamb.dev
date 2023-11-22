<script lang="ts">
  export let items: any[];
  import { dataCard, dataCardContent } from "../styles/data.css";
</script>

{#each items as item}
  <div class={dataCard}>
    <div>
      <p>
        {#if item.url === ""}
          {item.title}
        {:else}
          <a
            href={item.url || item.site}
            target="_blank"
            rel="noopener noreferrer">{item.title}</a
          >
        {/if}
      </p>
    </div>

    {#if item.description}
      <div class={dataCardContent}>
        <p>{item.description}</p>
      </div>
    {/if}
  </div>
{/each}
