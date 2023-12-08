<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const links = [
		{
			title: 'Mogućnosti',
			href: '/features'
		}
	];
</script>

<div class="contents">
	<Header {links} />
	<slot />
	<Footer />
</div>
