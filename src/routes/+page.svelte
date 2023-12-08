<script lang="ts">
	import Main from '$lib/components/homepage/Main.svelte';
	import BasicPhone from '$lib/components/phones/Basic.svelte';
	import AdvancedPhone from '$lib/components/phones/Advanced.svelte';
	import Sponsors from '$lib/components/homepage/Sponsors.svelte';
	import CTA from '$lib/components/homepage/CTA.svelte';
	import Blog from '$lib/components/homepage/Blog.svelte';
</script>

<svelte:head>
	<title>Home | Locki</title>
</svelte:head>

<Main />
<BasicPhone />
<AdvancedPhone />
<Sponsors />
<CTA />
<Blog />
