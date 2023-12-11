<script lang="ts">
	import Blog from '$lib/components/cards/Blog.svelte';

	type BlogPost = {
		url: string;
		date: Date;
		title: string;
		description: string;
		featuredImage: string;
	};
	async function convertToPost(p: [string, () => Promise<any>]) {
		const url = p[0];
		const obj = await p[1]();
		const post: BlogPost = {
			url: '/blog' + url.slice(1, url.length - 9),
			date: obj['date'],
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
	<title>Blog | Locki</title>
</svelte:head>

<div class="mx-auto text-gray-900 max-w-7xl dark:text-gray-50">
	<div class="px-4 not-prose">
		<div class="grid gap-4 mx-auto mt-12 mb-4 lg:max-w-none md:grid-cols-3">
			{#each posts as post}
				{#await post}
					<Blog />
				{:then post}
					<Blog
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
