<script>
	let current = 'active';
</script>

<nav class="flex flex-auto fixed w-full justify-between max-w-md mt-2 items-baseline">
	<!-- <a href="/" on:click={() => (current = 'active')}> Jacob Lamb </a> -->
	<a
		href="/projects"
		class:selected={current === 'projects'}
		on:click={() => (current = 'projects')}
	>
		Projects
	</a>
	<a href="/about" class:selected={current === 'about'} on:click={() => (current = 'about')}>
		About
	</a>
	<!-- <a href="uses" class:selected={current === 'uses'} on:click={() => (current = 'uses')}> Uses </a> -->
</nav>

<style>
	nav {
		@apply hidden;
	}
	a:first-of-type {
		@apply text-lg;
	}
	.selected {
		@apply underline decoration-double decoration-2;
	}
	a {
		@apply dark:text-blue-50;
	}
</style>
