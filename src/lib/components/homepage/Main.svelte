<script lang="ts">
	import logo from '$lib/assets/img/logo.svg';
	const title = 'Locki';
	const moto = 'Zaključaj svoj digitalni život';
	const description =
		'Manjak privatnosti znači manjak slobode. Ne dozvoli drugima da kontrolišu ono što je tvoje.';
</script>

<div class="bg-gray-200 dark:bg-gray-900 h-screen">
	<div class="max-w-screen-xl px-4 py-8 mx-auto">
		<div class="grid items-center gap-8 mb-8 sm:mb-0 lg:gap-12 lg:grid-cols-12">
			<div class="lg:hidden col-span-6">
				<img
					src={logo}
					alt="Locki logo small"
					class="w-full max-w-xl mx-auto rounded-lg max-h-60"
					loading="lazy"
				/>
			</div>
			<div class="col-span-6 px-4 text-center sm:mb-6 lg:text-left lg:mb-0">
				<h1
					class="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white"
				>
					{title}
				</h1>
				<h2 class="pb-2 text-3xl font-light text-gray-800 dark:text-gray-300 md:text-4xl">
					{moto}
				</h2>
				<p
					class="max-w-xl mx-auto mb-6 font-normal text-gray-900 lg:mx-0 xl:mb-2 md:text-lg xl:text-xl dark:text-gray-50"
				>
					{description}
				</p>
			</div>
			<div class="hidden lg:block col-span-6">
				<img
					src={logo}
					alt="Locki logo large"
					class="w-full max-w-xl mx-auto rounded-lg"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</div>
