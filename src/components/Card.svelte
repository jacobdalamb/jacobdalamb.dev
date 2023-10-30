<script lang="ts">
  import { onMount } from "svelte";
  export let items: any[];
  import { formatDate } from "../utils/date";

  let defaultImage = "../../assets/default-image-dark.svg"; // Initial value

  onMount(() => {
    const getDefaultImage = (): string => {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "../../assets/default-image-dark.svg";
      } else {
        return "../../assets/default-image-light.svg";
      }
    };

    defaultImage = getDefaultImage();

    // Optionally, update the default image if the user changes their preferred color scheme
    if (window.matchMedia) {
      const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQueryList.addEventListener("change", () => {
        defaultImage = getDefaultImage();
      });
    }
  });
</script>

{#each items as item}
  <div data-card>
    <div data-card-header>
      {#if item.folder}
        <div data-full-bleed>
          <img
            data-image-cover
            width="254"
            height="254"
            loading="lazy"
            src={item.cover || defaultImage}
            alt={item.title}
          />
        </div>
      {:else if item.url}
        <h3>
          <a href={item.url} target="_blank" rel="noopener noreferrer"
            >{item.title}</a
          >
        </h3>
      {:else}
        <h3>{item.title}</h3>
      {/if}
    </div>
    <div data-card-content>
      {#if item.folder}
        {#if item.url}
          <h3>
            <a href={item.url} target="_blank" rel="noopener noreferrer"
              >{item.title}</a
            >
          </h3>
        {:else}
          <span>{item.title}</span>
        {/if}
      {/if}
      {#if item.description}
        <p>{item.description}</p>
      {:else}
        <p>{item.excerpt}</p>
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
