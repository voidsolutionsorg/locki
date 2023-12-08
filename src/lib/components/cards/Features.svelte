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
		<div class="w-full">
			<img
				src={featuredImage}
				class="mx-auto object-fill overflow-hidden rounded-t-lg"
				loading="lazy"
				alt={title}
			/>
		</div>
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
			<!-- <div class="flex pt-6 font-medium text-primary-600 dark:text-primary-100 text-md">
			<span class="pr-2 font-black">Tags:</span>
			<span>
				<a
					href={url}
					class="inline-flex items-center rounded-md bg-gray-300 hover:bg-primary-200 hover:text-black px-2.5 py-0.5 text-sm font-medium text-gray-900 capitalize"
					>{title}</a
				>
			</span>
		</div> -->
			<!-- <div class="flex items-center mt-6">
                        <div class="flex-shrink-0">
                            <span class="sr-only">{{ .Params.author }}</span>
                            <img class="w-10 h-10 rounded-full" src="{{ $authorimage }}" alt="">
                        </div>
                        <div class="pt-1 ml-3">
                            <p class="text-sm font-medium text-gray-900 dark:text-white">
                                {{ .Params.author }}
                            </p>
                            <div class="flex space-x-1 text-sm text-gray-500 dark:text-white">
                                <time datetime="2020-02-12">{{.Date.Format "2006-01-02"}}</time>
                                <span aria-hidden="true">&middot;</span>
                                <span>{{ math.Round (div (countwords .Content) 220.0) }}
                                    min read</span>
                            </div>
                        </div>
                    </div> -->
		</div>
	</div>
</a>
