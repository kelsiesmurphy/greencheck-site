<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Globe, ShoppingCart } from 'lucide-svelte';
	import Extension from '$lib/components/extension/extension.svelte';
	import content from '$lib/content.json';
</script>

<section class="flex flex-wrap items-center justify-around gap-16 py-16 pt-40">
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
			<Button href={content.chromeStoreLink} target="_blank" variant="secondary"
				><Globe class="mr-2 h-4 w-4" />Get Basic for free</Button
			>
			<Button href={content.gumroadLink} target="_blank"
				><ShoppingCart class="mr-2 h-4 w-4" />Get Plus for £{content.price}</Button
			>
		</div>
	</div>
	<Extension />
</section>
