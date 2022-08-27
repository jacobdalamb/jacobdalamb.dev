<script>
  import clockStore from './clock'

  // create the clock store, and tell it to refresh every 300ms
  const clock = clockStore({ interval: 300 })
</script>

<!-- Expression will update every 300ms -->
<p class="time">
  It's currently <time datetime={$clock}>{$clock}</time> PDT for me.
</p>

<style>
  .time {
    font-variant-numeric: tabular-nums;
    margin: 0px;
  }
</style>
