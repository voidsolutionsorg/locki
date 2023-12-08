<script lang="ts">
	import Features from '$lib/components/cards/Features.svelte';

	type Post = {
		url: string;
		title: string;
		description: string;
		featuredImage: string;
	};
	function convertToPost(p: [string, any]) {
		const post: Post = {
			url: '/features' + p[0].slice(1, p[0].length - 9),
			title: p[1]['title'],
			description: p[1]['description'],
			featuredImage: p[1]['featuredImage']
		};
		return post;
	}

	const modules: Record<string, any> = import.meta.glob('./**/*.{svelte.md,md,svx}', {
		import: 'metadata',
		eager: true
	});
	const posts = Object.entries(modules).map((p) => convertToPost(p));
</script>

<svelte:head>
	<title>Features | Locki</title>
</svelte:head>

<div class="mx-auto text-gray-900 max-w-7xl dark:text-gray-50">
	<div class="px-4 not-prose">
		<div class="grid gap-4 mx-auto mt-12 mb-4 lg:max-w-none md:grid-cols-3">
			{#each posts as post}
				<Features
					url={post.url}
					title={post.title}
					description={post.description}
					featuredImage={post.featuredImage}
				/>
			{/each}
		</div>
	</div>
</div>
