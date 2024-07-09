<script lang="ts">
	import Header from './(components)/Header.svelte';
	import Hero from './(components)/Hero.svelte';
	import Browsers from './(components)/Browsers.svelte';
	import Features from './(components)/Features.svelte';
	import Pricing from './(components)/Pricing.svelte';
	import FAQs from './(components)/FAQs.svelte';
	import HeaderMobile from './(components)/HeaderMobile.svelte';
</script>

<main>
	<div class="hidden sm:flex">
		<Header />
	</div>
	<div>
		<HeaderMobile />
	</div>
	<Hero />
	<Browsers />
	<Features />
	<Pricing />
	<FAQs />
</main>
