<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import content from '$lib/content.json';

	const featureList = [
		{
			title: 'See green-hosted websites at a glance',
			premium: false,
			gifLink: '/media/search-results.gif',
			description:
				'Google Search results will show an 🌱 icon next to websites hosted with green energy and provide supporting documentation from The Green Web Foundation.'
		},
		{
			title: 'Check to see if a website is hosted sustainably',
			premium: false,
			gifLink: '/media/green-energy-check.gif',
			description:
				"To check if a website runs on green energy, open the extension from your browser's navigation bar to check the website's green hosting status."
		},
		{
			title: 'Run a Carbon Analysis scan',
			premium: false,
			gifLink: '/media/carbon-analysis.gif',
			description:
				"With a valid license key, scan the website you're on for realtime information on the CO2 output each time the page is loaded, the calculated energy used to load the page, a ranking given to the webpage compared to all web pages globally."
		},
		{
			title: 'See at a glance from the extension icon',
			premium: false,
			gifLink: '/media/carbon-icon.gif',
			description:
				'As you browse websites, you can see at a glance if the website runs on green energy or not, directly from the icon in your browsers extension bar.'
		}
	];

	let currentTab = featureList[0];
</script>

<section class="space-y-16 py-24">
	<h2 class="text-3xl font-semibold md:text-4xl">Key Features</h2>
	<div class="flex flex-wrap justify-center gap-16">
		<ul class="max-w-xl">
			{#each featureList as feature}
				<li>
					<button
						on:click={() => (currentTab = feature)}
						class={`${currentTab == feature ? 'border-primary' : 'border-secondary'} outline-brand flex flex-col gap-2 border-l-4 px-6 py-4 text-left transition-colors duration-300`}
					>
						<div class="flex items-center gap-4">
							<h3 class="text-lg font-semibold md:text-xl">
								{feature.title}
							</h3>
							{#if feature.premium}
								<Badge href={content.chromeStoreLink} target="_blank" class="text-center"
									>GreenCheck Plus</Badge
								>
							{/if}
						</div>
						<p class="text-left text-muted-foreground">{feature.description}</p>
					</button>
				</li>
			{/each}
		</ul>
		<div class="flex min-w-[300px] max-w-xl flex-1 items-center justify-end bg-gray-100 p-12">
			<img
				src={currentTab.gifLink}
				class="rounded-md shadow-lg"
				alt={`Animated GIF for ${currentTab.title}`}
			/>
		</div>
	</div>
</section>
