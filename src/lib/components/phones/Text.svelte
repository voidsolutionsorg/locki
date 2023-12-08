<script lang="ts">
	import Title from './Title.svelte';

	export let title = '';
	export let paragraphs: string[] = [];
</script>

<div class="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
	{#if title !== ''}
		<Title {title} />
	{/if}
	<div class="lg:mt-6 space-y-6 text-gray-900 dark:text-white">
		{#each paragraphs as paragraph}
			<p class="text-justify text-lg text-gray-900 dark:text-white">
				{paragraph}
			</p>
		{/each}
	</div>
</div>
