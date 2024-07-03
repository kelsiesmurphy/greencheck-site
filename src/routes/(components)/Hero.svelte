<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Globe, ShoppingCart } from 'lucide-svelte';
	import ExtensionImg from '$lib/assets/example.png';
</script>

<section class="flex flex-wrap items-center justify-center gap-16 py-24">
	<div class="space-y-12">
		<div class="max-w-xl space-y-6">
			<h1 class="text-4xl font-semibold md:text-5xl">
				Empowering Greener Browsing, One Click at a Time
			</h1>
			<p class="text-muted-foreground">
				GreenCheck is a browser extension that identifies websites powered by green energy, and
				offers detailed analysis on the site’s carbon emissions.
			</p>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row">
			<Button variant="secondary"><Globe class="mr-2 h-4 w-4" />Get Basic for free</Button>

			<Button><ShoppingCart class="mr-2 h-4 w-4" />Get Plus for £30</Button>
		</div>
	</div>
	<img src={ExtensionImg} alt="Example of the browser extension" />
</section>
