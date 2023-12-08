<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Main from '$lib/components/homepage/Main.svelte';
	import BasicPhone from '$lib/components/phones/Basic.svelte';
	import AdvancedPhone from '$lib/components/phones/Advanced.svelte';
	import Sponsors from '$lib/components/homepage/Sponsors.svelte';
	import CTA from '$lib/components/homepage/CTA.svelte';
	import Blog from '$lib/components/homepage/Blog.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const links = [
		{
			title: 'Mogućnosti',
			href: '/features'
		}
	];
</script>

<div class="contents">
	<Navbar {links} />
	<Main />
	<BasicPhone />
	<AdvancedPhone />
	<Sponsors />
	<CTA />
	<Blog />
</div>
<Footer />
