<script>
	import '../app.css';
	import '@fontsource/rubik/variable.css';
	import '@fontsource/rubik/variable-italic.css';
	import Footer from '../components/footer.svelte';
	import Nav from '../components/nav.svelte';
</script>

<Nav />
<slot />
<Footer />
