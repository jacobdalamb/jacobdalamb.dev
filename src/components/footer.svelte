<script>
	let currentDateTime = new Date().getFullYear();
</script>

<footer class="fixed inset-x-0 bottom-0 mx-6 flex flex-wrap gap-x-24">
	<div class="mb-2 mr-auto flex max-w-[10rem] flex-[1_1_150px] justify-between">
		<a
			data-cube-solidity-tooltip="email me"
			href="mailto:jacobtlamb@hey.com"
			aria-label="email-link"
			rel="noreferrer"
			class="icon group"
			><i
				role="button"
				aria-label="email-icon"
				class="fa-solid fa-envelope-square fa-2x i-link"
			/></a
		>
		<a
			data-cube-solidity-tooltip="check my twitter"
			href="https://twitter.com/jacob_thesheep"
			aria-label="twitter-link"
			rel="noreferrer"
			class="icon group"
			><i
				role="button"
				aria-label="twitter-icon"
				class="fa-brands fa-twitter-square fa-2x i-link"
			/></a
		>
		<a
			data-cube-solidity-tooltip="check my GitHub"
			href="https://github.com/jacobthesheep"
			aria-label="github-link"
			rel="noreferrer"
			class="icon group"
			><i
				role="button"
				aria-label="github-icon"
				class="fa-brands fa-github-square fa-2x i-link"
			/></a
		>
	</div>
	<p class="mt-1 text-base dark:text-white">
		Jacob Lamb | 2020 - {currentDateTime}
	</p>
</footer>

<style>
	.bubble::after {
		@apply content-[""] rounded-full h-1 z-[1] absolute block bottom-0 bg-white transition left-0 right-0;
	}
	.bubble:hover::after {
		@apply opacity-0;
	}
	.i-link {
		@apply group-hover:text-white dark:group-hover:text-yellow-200 dark:text-gray-900;
	}
	.icon {
		@apply rounded text-center h-8 w-8 bg-white dark:bg-gray-300 hover:bg-gray-900;
	}
</style>
