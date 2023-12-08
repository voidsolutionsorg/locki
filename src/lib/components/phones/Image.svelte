<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	export let src = '';
	export let alt = '';
</script>

<div class="relative sm:py-8 lg:py-0">
	<div class="relative w-full h-auto px-4 py-6 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:py-20">
		<div class="overflow-hidden shadow-xl rounded-2xl">
			<Img class="w-full max-w-xl my-auto rounded-lg" {src} {alt} loading="lazy" />
		</div>
	</div>
</div>
