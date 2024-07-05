<script lang="ts">
	import { LottieSvelte } from 'lottie-player-svelte';

	import SearchResultsLottie from '$lib/assets/SearchResultsLottie.json';
	import ExtensionLottie from '$lib/assets/ExtensionLottie.json';

	const featureList = [
		{
			title: 'See green-hosted websites at a glance',
			description:
				'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
		},
		{
			title: 'Check to see if a website is hosted sustainably',
			description:
				'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
		}
	];

	let currentTab = featureList[0];
</script>

<section class="space-y-16 py-24">
	<h2 class="text-3xl font-semibold md:text-4xl">Free Features</h2>
	<div class="flex flex-wrap justify-center gap-16">
		<ul class="max-w-xl">
			{#each featureList as feature}
				<li>
					<button
						on:click={() => (currentTab = feature)}
						class={`${currentTab == feature ? 'border-primary' : 'border-secondary'} outline-brand flex flex-col gap-2 border-l-4 px-6 py-8 transition-colors duration-300`}
					>
						<h3 class="text-lg font-semibold md:text-xl">{feature.title}</h3>
						<p class="text-left text-muted-foreground">{feature.description}</p>
					</button>
				</li>
			{/each}
		</ul>
		<div
			class="flex aspect-[592/528] min-w-[300px] max-w-xl flex-1 items-center justify-end bg-gray-100 p-12"
		>
			{#if currentTab == featureList[0]}
				<div class="overflow-hidden rounded-l-lg opacity-100 shadow-lg">
					<LottieSvelte src={SearchResultsLottie} />
				</div>
			{:else if currentTab == featureList[1]}
				<div class="overflow-hidden rounded-l-lg opacity-100 shadow-lg">
					<LottieSvelte src={ExtensionLottie} />
				</div>
			{/if}
		</div>
	</div>
</section>
