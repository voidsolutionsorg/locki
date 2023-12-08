<script lang="ts">
	export let imageSrc = '';
</script>

<div class="relative sm:py-8 lg:py-0">
	<!-- <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
		{#if orientation === 'left'}
			<div
				class="absolute inset-y-0 w-full bg-gray-50 dark:bg-gray-900/10 right-1/2 rounded-r-3xl lg:right-72"
			></div>
			<svg
				class="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
				width="404"
				height="392"
				fill="none"
				viewBox="0 0 404 392"
			>
				<defs>
					<pattern
						id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							class="text-gray-200 dark:text-gray-900/60"
							fill="currentcolor"
						></rect>
					</pattern>
				</defs>
				<rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"></rect>
			</svg>
		{:else}
			<div
				class="absolute inset-y-0 w-screen left-1/2 rounded-l-3xl bg-gray-50 dark:bg-gray-900/10 lg:left-80 lg:right-0 lg:w-full"
			></div>
			<svg
				class="absolute -mr-3 top-8 right-1/2 lg:left-0 lg:m-0"
				width="404"
				height="392"
				fill="none"
				viewBox="0 0 404 392"
			>
				<defs>
					<pattern
						id="837c3e70-6c3a-44e6-8854-cc48c737b659"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							class="text-gray-200 dark:text-gray-900/60"
							fill="currentcolor"
						></rect>
					</pattern>
				</defs>
				<rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
			</svg>
		{/if}
	</div> -->
	<div class="relative w-full h-auto px-4 py-6 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:py-20">
		<div class="overflow-hidden shadow-xl rounded-2xl">
			<img src={imageSrc} alt="Basic - House thief" class="w-full h-auto" loading="lazy" />
		</div>
	</div>
</div>
