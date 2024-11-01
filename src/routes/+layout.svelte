<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { LinkType } from '$lib/types/link';

	const links: LinkType[] = [
		{
			title: 'Mogućnosti',
			href: '/features'
		},
		{
			title: 'Blog',
			href: '/blog'
		},
		{
			title: 'Kontakt',
			href: '/contact'
		}
	];
</script>

<svelte:head>
	<!-- prevent Dark Reader from inverting the page -->
	<meta name="darkreader-lock" />
	<script type="text/javascript">
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<Header {links} />
<slot />
<Footer />
