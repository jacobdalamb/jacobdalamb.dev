<script lang="ts">
  export let items: any[];
  import { formatDate } from "../utils/date";

  const brokenImage = "../../assets/broken-image.jpeg";

  function handleError(event) {
    event.target.src = brokenImage;
  }
</script>

{#each items as item}
  <div data-card-image>
    <a href={item.url} data-image-link>
      <img
        data-image-cover
        loading="lazy"
        on:error={handleError}
        src={item.cover || brokenImage}
        alt={item.title}
      />
      <div data-badge data-badge-link>
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
