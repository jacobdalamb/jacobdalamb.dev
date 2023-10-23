<script lang="ts">
  const projects = [
    {
      title: "jtlamb-dev.vercel.app",
      description: "Personal website built with Astro",
      image: "",
      link: "https://jtlamb-dev.vercel.app/",
    },
    {
      title: "1BibleStudy (in progress)",
      description: "All-in-one Bible study tool",
      image: "",
      link: "https://torahcycle-info.vercel.app/",
    },
    {
      title: "1Bookmark (upcoming)",
      description: "",
      image: "",
      link: "",
    },
  ];
</script>

{#each projects as project}
  <div data-card>
    <div data-card-header>
      <span data-badge />
    </div>
    <!-- <div data-card-image>
      <img src={project.image} alt={project.title} />
    </div> -->
    <div data-card-content>
      {#if project.link}
        <a href={project.link} target="_blank" rel="noopener noreferrer"
          >{project.title}</a
        >
      {:else}
        <span>{project.title}</span>
      {/if}
      <p>{project.description}</p>
    </div>
  </div>
{/each}
