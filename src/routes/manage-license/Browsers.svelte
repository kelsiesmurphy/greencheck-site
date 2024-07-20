<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { ArrowRight } from 'lucide-svelte';
	import ChromeLogo from '$lib/assets/chrome.svg';
	import FirefoxLogo from '$lib/assets/firefox.svg';
	import EdgeLogo from '$lib/assets/edge.svg';
	import { Button } from '$lib/components/ui/button';
	import content from '$lib/content.json';
	import { sendGumroadLog } from '$lib/utils/logs';

	const browserList = [
		{ name: 'Chrome', image: ChromeLogo, link: content.chromeStoreLink },
		{ name: 'Firefox', image: FirefoxLogo, link: content.firefoxStoreLink },
		{ name: 'Edge', image: EdgeLogo, link: content.edgeStoreLink }
	];
</script>

<section class="space-y-16 py-24">
	<div class="flex flex-col items-center justify-center gap-4">
		<h2 class="text-center text-2xl font-semibold md:text-3xl">Download the extensions</h2>
	</div>
	<ul class="flex flex-col items-center justify-center gap-6 md:flex-row">
		{#each browserList as browser}
			<li class="flex max-w-sm flex-1 flex-col items-center justify-center gap-4">
				<img src={browser.image} alt={`Logo for the ${browser.name} browser.`} class="h-16 w-16" />
				<h3 class="text-center text-lg font-semibold md:text-xl">{browser.name}</h3>
				<Button href={browser.link} on:click={() => sendGumroadLog(browser.name.toLowerCase(), `Link for ${browser.name} in Browser section`)} variant="link" target="_blank">
					Go to extension
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</li>
		{/each}
	</ul>
</section>
