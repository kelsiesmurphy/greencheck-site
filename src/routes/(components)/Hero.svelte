<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Chrome, HandCoins } from 'lucide-svelte';
	import Extension from '$lib/components/extension/extension.svelte';
	import content from '$lib/content.json';
</script>

<section class="flex flex-wrap items-center justify-around gap-16 py-16 pt-40">
	<div class="space-y-12">
		<div class="max-w-xl space-y-6">
			<h1 class="text-4xl font-semibold text-emerald-950 md:text-5xl">
				Empowering Greener Browsing, One Click at a Time
			</h1>
			<p class="text-muted-foreground">
				GreenCheck is a browser extension that identifies websites powered by green energy, and
				offers detailed analysis on the site’s carbon emissions.
			</p>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row">
			<Button href={content.donationLink} target="_blank" variant="secondary"
				><HandCoins class="mr-2 h-4 w-4" />Support</Button
			>
			<Button href={content.chromeStoreLink} target="_blank">
				<Chrome class="mr-2 h-4 w-4" />Get extension
			</Button>
		</div>
	</div>
	<Extension />
</section>
