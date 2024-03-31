<script lang="ts">
	import HouseZapImg from '$lib/assets/img/housezap.png?enhanced';
	import Title from './Title.svelte';
	import Text from './Text.svelte';
	import Image from './Image.svelte';

	const title: string = 'Locki telefon';
	const paragraphs: string[] = [
		'Korisnik dobija telefon bez Google sistema i aplikacija koje se mogu vratiti na telefon u stabilnoj sandbox verziji ili zameniti alternativnim rešenjima poput FDroid i Aurora store.',
		'Pored osnovnih nivoa dozvola Locki telefon pruža korisniku priliku da odabere tačan fajl / sliku / video kojem aplikacija može da pristupi. Ukoliko aplikacija odbija da radi bez pristupa određenim periferijama ili memoriji sistem kreira lažnu dozvolu aplikaciji tako da ona radi neometano bez stvarnog pristupa.',
		'Fotografija slikana Locki telefonom u svojim podacima ima samo sopstvenu rezoluciju. Ukoliko korisnik želi da fotografija čuva sve invazivne podatke može uvek uključiti čuvanje istih u opcijama kamere.',
		'Locki telefon dobija podršku od minimum 5 godina od proizvodnje telefona, ili 7 godina u slučaju Pixel 8 i novijih modela. Poslednje 2 godine sadrže održavanje sigurnosnog sistema gde se unapređenja dodaju svakih mesec dana, što znači da je sistem uvek korak ispred mogućih napadača.'
	];
</script>

<div class="my-4 pt-4 sm:pt-6 md:pt-12 lg:pt-20">
	<div
		class="hidden lg:grid lg:mx-auto lg:max-w-7xl lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-8"
	>
		<Text {title} {paragraphs} />
		<Image src={HouseZapImg} alt="House zap" loading="lazy" />
	</div>
	<div class="lg:hidden">
		<Title {title} />
		<Image src={HouseZapImg} alt="House zap" loading="lazy" />
		<Text {paragraphs} />
	</div>
</div>
