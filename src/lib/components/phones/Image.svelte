<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	export let src = '';
	export let alt = '';
</script>

<div class="py-6 sm:py-8 lg:py-0 w-full h-auto px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
	<Img class="shadow-xl w-full max-w-xl mx-auto rounded-2xl" {src} {alt} loading="lazy" />
</div>
