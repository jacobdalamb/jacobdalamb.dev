<script>
  export let title = ''
  let isHovered = false
  let x
  let y
  // 765px

  function mouseOver(event) {
    isHovered = true
    x = event.pageX - 50
    y = event.pageY - 80
  }
  function mouseLeave() {
    isHovered = false
  }
</script>

<div class="button" on:mouseover={mouseOver} on:focus={mouseOver} on:mouseleave={mouseLeave}>
  <slot />
</div>

{#if isHovered}
  <div style="top: {y}px; left: {x}px;" class="tooltip">{title}</div>
{/if}

<style>
  .tooltip {
    border: 2px solid theme(colors.slate.800);
    background-color: theme(colors.slate.50);
    border-radius: 4px;
    padding: 8px 16px;
    position: absolute;
  }
  @media (prefers-color-scheme: dark) {
    .tooltip {
      background-color: theme(colors.slate.800);
      color: theme(colors.slate.50);
      border: 2px solid theme(colors.slate.50);
    }
  }
</style>
