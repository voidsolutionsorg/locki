<script lang="ts">
	export let title = '';
	export let paragraphs: string[] = [];
</script>

<div class="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
	<div class="md:pt-12 sm:pt-6 lg:pt-20">
		{#if title !== ''}
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
				{title}
			</h2>
		{/if}
		<div class="lg:mt-6 text-gray-900 dark:text-white">
			<div class="lg:mt-6 space-y-6 text-gray-900 dark:text-white">
				{#each paragraphs as paragraph}
					<p class="text-justify text-lg text-gray-900 dark:text-white">
						{paragraph}
					</p>
				{/each}
			</div>
		</div>
	</div>
</div>
