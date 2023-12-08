<script lang="ts">
	import housethief from '$lib/assets/img/housethief.png?as=run';
	import Title from './Title.svelte';
	import Text from './Text.svelte';
	import Image from './Image.svelte';

	const title = 'Prosečan telefon';
	const paragraphs = [
		'Iako Google mnogima olakšava svakodnevni život, njihov način poslovanja jeste da se usluge plaćaju korisničkim podacima.',
		'Dozvoljeni pristup slikama na običnom telefonu uključuje i pristup svakom fajlu na telefonu. Većina aplikacija odbija da radi ukoliko korisnik svojeručno ne dozvoli aplikaciji pristup određenim periferijama (kamera, mikrofon, lokacija).',
		'Svaka fotografija slikana običnim telefonom u podacima slike (picture metadata) sadrži sačuvanu rezoluciju, model telefona, tip kamere kao i tačne koorditane mesta na kom je fotografija nastala.',
		'Prosečan telefon dobija softversku podršku od proizvođača u periodu od 1 do 3 godine, što znači da je telefon nakon tog vremena potpuno nezaštićen od neželjenih napada.'
	];
</script>

<div class="my-4 pt-4 sm:pt-6 md:pt-12 lg:pt-20">
	<div
		class="hidden lg:grid lg:mx-auto lg:max-w-7xl lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-8"
	>
		<Image src={housethief} alt="House thief" />
		<Text {title} {paragraphs} />
	</div>
	<div class="lg:hidden">
		<Title {title} />
		<Image src={housethief} alt="House thief" />
		<Text {paragraphs} />
	</div>
</div>
