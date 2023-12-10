<script lang="ts">
	export let url = '';
	export let title = '';
	export let description = '';
	export let featuredImage = '';
</script>

<a href={url}>
	<div
		class="h-full flex flex-col overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900"
	>
		{#if featuredImage !== ''}
			<div class="w-full">
				<img
					src={featuredImage}
					class="max-h-60 mx-auto object-fill overflow-hidden rounded-t-lg"
					loading="lazy"
					alt={title}
				/>
			</div>
		{/if}
		<div class="p-6">
			<div class="flex-1">
				<h2
					class="text-center block mt-2 text-2xl font-black text-gray-900 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-500 hover:underline"
				>
					{title}
				</h2>
				<p class="text-center mt-3 text-base text-gray-900 dark:text-gray-300">
					{description}
				</p>
			</div>
		</div>
	</div>
</a>
