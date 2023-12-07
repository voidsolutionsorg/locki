<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import MainSection from '$lib/components/MainSection.svelte';
	import BasicPhoneSection from '$lib/components/Phones/Basic.svelte';
	import LockiPhoneSection from '$lib/components/Phones/Locki.svelte';
	import SponsorsSection from '$lib/components/SponsorsSection.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
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
	<MainSection />
	<BasicPhoneSection />
	<LockiPhoneSection />
	<SponsorsSection />
	<CTASection />
	<BlogSection />
</div>
<Footer />
