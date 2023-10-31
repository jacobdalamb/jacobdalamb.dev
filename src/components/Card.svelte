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
        return "../../assets/default-image-dark.png";
      } else {
        return "../../assets/default-image-light.png";
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
            height="100"
            loading="lazy"
            src={item.cover}
            alt={item.title}
          />
        </div>
      {:else if item.url}
        <p>
          <a href={item.url} target="_blank" rel="noopener noreferrer"
            >{item.title}</a
          >
        </p>
      {:else}
        <p>{item.title}</p>
      {/if}
    </div>
    <div data-card-box>
      <div data-card-content>
        {#if item.folder}
          {#if item.url}
            <p>
              <a href={item.url} target="_blank" rel="noopener noreferrer"
                >{item.title}</a
              >
            </p>
          {:else}
            <span>{item.title}</span>
          {/if}
        {/if}
        {#if item.description}
          <p data-description>{item.description}</p>
        {:else}
          <p data-description>{item.excerpt}</p>
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
  </div>
{/each}
