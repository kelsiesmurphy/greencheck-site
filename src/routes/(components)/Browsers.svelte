<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { ArrowRight } from 'lucide-svelte';
	import ChromeLogo from '$lib/assets/chrome.svg';
	import FirefoxLogo from '$lib/assets/firefox.svg';
	import EdgeLogo from '$lib/assets/edge.svg';
	import { Button } from '$lib/components/ui/button';

	const browserList = [
		{ name: 'Chrome', image: ChromeLogo, link: '' },
		{ name: 'Firefox', image: FirefoxLogo, link: '' },
		{ name: 'Edge', image: EdgeLogo, link: '' }
	];
</script>

<section class="space-y-16 py-24">
	<div class="flex flex-col items-center justify-center gap-4">
		<div class="bg-secondary flex items-center gap-3 rounded-full p-1 pr-2.5">
			<Badge>What's new?</Badge>
			<div class="flex items-center gap-1 text-sm font-medium">
				We’re in Beta!<ArrowRight class="ml-2 h-4 w-4" />
			</div>
		</div>
		<h2 class="text-center text-3xl font-semibold md:text-4xl">Works across multiple browsers</h2>
	</div>
	<ul class="flex flex-col items-center justify-center gap-6 md:flex-row">
		{#each browserList as browser}
			<li class="flex max-w-sm flex-1 flex-col items-center justify-center gap-4">
				<img src={browser.image} alt={`Logo for the ${browser.name} browser.`} class="h-16 w-16" />
				<h3 class="text-center text-lg font-semibold md:text-xl">{browser.name}</h3>
				<Button variant="link">
					View details
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</li>
		{/each}
	</ul>
</section>
