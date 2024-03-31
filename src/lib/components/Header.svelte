<script lang="ts">
	import { onMount } from 'svelte';
	import LogoImg from '$lib/assets/img/logo.svg';
	import type { LinkType } from '$lib/types/link';

	export let links: LinkType[];

	let darkMode: boolean;

	onMount(() => {
		const theme: string | null = localStorage.getItem('theme');

		if (theme === 'dark') {
			darkMode = true;
		} else if (theme === 'light') {
			darkMode = false;
		} else {
			darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<div
	class="top-0 z-50 w-full text-gray-200 bg-gray-900 border-2 border-gray-900 md:sticky border-b-stone-200/10"
>
	<div class="flex max-w-full px-4 mx-auto items-center justify-between flex-row md:px-6 lg:px-8">
		<div class="flex flex-row items-center justify-between p-4">
			<a href="/" class="flex text-gray-100 transition duration-1000 ease-in-out group">
				<img
					src={LogoImg}
					class="transition-opacity h-9 w-9 group-hover:opacity-50 group-focus:opacity-70"
					alt="Locki Logo"
					loading="eager"
				/>
				<div
					class="mt-1 ml-3 text-xl font-black tracking-tight text-gray-100 uppercase transition-colors group-hover:text-gray-400/60"
				>
					Locki
				</div>
			</a>
		</div>
		<nav class="flex-grow flex justify-end flex-row">
			{#each links as link}
				<a
					class="px-4 py-2 text-sm font-semibold rounded-lg ml-4 hover:text-white focus:text-white hover:bg-primary-600 focus:bg-primary-700 focus:outline-none focus:shadow-outline"
					href={link.href}
					title="Locki"
				>
					{link.title}
				</a>
			{/each}
			<button
				id="theme-toggle"
				type="button"
				class="ml-4 hover:text-white hover:bg-primary-600"
				on:click={toggleDarkMode}
			>
				<svg
					id="theme-toggle-dark-icon"
					class="dark:hidden w-8 h-8"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"> </path>
				</svg>
				<svg
					id="theme-toggle-light-icon"
					class="hidden dark:block w-8 h-8"
					fill="currentColor"
					viewBox="0 0 20 20"
					aria-label="Dark or Light Mode"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
						fill-rule="evenodd"
						clip-rule="evenodd"
					></path>
				</svg>
			</button>
		</nav>
	</div>
</div>
