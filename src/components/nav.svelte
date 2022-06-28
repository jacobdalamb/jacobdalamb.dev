<script>
	let current = 'active';
</script>

<nav class="flex flex-auto fixed w-full justify-between max-w-md mx-6 mt-2">
	<a href="/" class:selected={current === 'active'} on:click={() => (current = 'active')}> Home </a>
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
	nav a {
		@apply py-1 flex text-black text-lg hover:underline hover:decoration-2;
	}
	.selected {
		@apply underline decoration-wavy decoration-1;
	}
</style>
