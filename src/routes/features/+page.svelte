<script lang="ts">
	import Features from '$lib/components/cards/Features.svelte';

	type Post = {
		url: string;
		title: string;
		description: string;
		featuredImage: string;
	};
	async function convertToPost(p: [string, () => Promise<any>]) {
		const url = p[0];
		const obj = await p[1]();
		const post: Post = {
			url: '/features' + url.slice(1, url.length - 9),
			title: obj['title'],
			description: obj['description'],
			featuredImage: obj['featuredImage']
		};
		return post;
	}

	const modules: Record<string, () => Promise<any>> = import.meta.glob(
		'./**/*.{svelte.md,md,svx}',
		{
			import: 'metadata',
			eager: false
		}
	);
	const posts = Object.entries(modules).map((p) => convertToPost(p));
</script>

<svelte:head>
	<title>Features | Locki</title>
</svelte:head>

<div class="mx-auto text-gray-900 max-w-7xl dark:text-gray-50">
	<div class="px-4 not-prose">
		<div class="grid gap-4 mx-auto mt-12 mb-4 lg:max-w-none md:grid-cols-3">
			{#each posts as post}
				{#await post}
					<Features />
				{:then post}
					<Features
						url={post.url}
						title={post.title}
						description={post.description}
						featuredImage={post.featuredImage}
					/>
				{/await}
			{/each}
		</div>
	</div>
</div>
