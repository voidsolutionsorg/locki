<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const links = [
		{
			title: 'Mogućnosti',
			href: '/features'
		},
		{
			title: 'Blog',
			href: '/blog'
		}
	];
</script>

<Header {links} />
<slot />
<Footer />
