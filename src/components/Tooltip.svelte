<script>
  export let title = ''
  let isHovered = false
  let x

  function mouseOver(event) {
    isHovered = true
    x = event.pageX - 50
  }
  function mouseLeave() {
    isHovered = false
  }
</script>

<div class="button" on:mouseover={mouseOver} on:focus={mouseOver} on:mouseleave={mouseLeave}>
  <slot />
</div>

{#if isHovered}
  <div style="top: 765px; left: {x}px;" class="tooltip">{title}</div>
{/if}

<style>
  .tooltip {
    border: 1px solid #ddd;
    box-shadow: 1px 1px 1px #ddd;
    background: white;
    border-radius: 4px;
    padding: 8px 16px;
    position: absolute;
  }
  @media (prefers-color-scheme: dark) {
    .tooltip {
      color: black;
    }
  }
</style>
