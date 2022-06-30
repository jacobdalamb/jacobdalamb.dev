<script>
	let current = 'active';
</script>

<nav class="flex flex-auto fixed w-full justify-between max-w-md mx-6 mt-2">
	<a href="/" on:click={() => (current = 'active')}> Jacob Lamb </a>
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
	a {
		@apply py-1 flex text-black hover:underline hover:decoration-2;
	}
	a:first-of-type {
		@apply text-lg;
	}
	.selected {
		@apply underline decoration-double decoration-2;
	}
	@media (prefers-color-scheme: dark) {
		a {
			@apply text-blue-50;
		}
	}
</style>
