<script lang="ts">
  import {
    dataImageCover,
    dataBadge,
    dataBadgeLink,
    dataImageLink,
  } from "../styles/data.css";
  export let items: any[];

  const brokenImage = "../../assets/broken-image.jpeg";

  function handleError(event: any) {
    event.target.src = brokenImage;
  }
</script>

{#each items as item}
  <div>
    <a href={item.url} class={dataImageLink}>
      <img
        class={dataImageCover}
        loading="lazy"
        on:error={handleError}
        src={item.cover || brokenImage}
        alt={item.title}
      />
      <div class={`${dataBadge} ${dataBadgeLink}`}>
        <span
          >{item.url
            .replace("https://", "")
            .replace("www.", "")
            .replace(/\/$/, "")}</span
        >
      </div>
    </a>
  </div>
{/each}
