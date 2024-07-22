<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import content from '$lib/content.json';

	const featureList = [
		{
			title: 'See green-hosted websites at a glance',
			premium: false,
			gifLink:
				'https://vhzqiumeoyudnxmuhyvz.supabase.co/storage/v1/object/public/marketing/green-search.gif?t=2024-07-22T16%3A04%3A57.578Z',
			description:
				'Google Search results will show an 🌱 icon next to websites hosted with green energy and provide supporting documentation from The Green Web Foundation.'
		},
		{
			title: 'Check to see if a website is hosted sustainably',
			premium: false,
			gifLink:
				'https://vhzqiumeoyudnxmuhyvz.supabase.co/storage/v1/object/public/marketing/green-energy-check.gif?t=2024-07-22T16%3A05%3A35.639Z',
			description:
				"To check if a website runs on green energy, open the extension from your browser's navigation bar, and it will inform you."
		},
		{
			title: 'Carbon Analysis',
			premium: true,
			gifLink:
				'https://vhzqiumeoyudnxmuhyvz.supabase.co/storage/v1/object/public/marketing/carbon-analysis.gif?t=2024-07-22T15%3A34%3A39.677Z',
			description:
				"With a valid license key, scan the website you're on for realtime information on the CO2 output each time the page is loaded, the calculated energy used to load the page, a ranking given to the webpage compared to all web pages globally."
		},
		{
			title: 'Carbon Footer',
			premium: true,
			gifLink:
				'https://vhzqiumeoyudnxmuhyvz.supabase.co/storage/v1/object/public/marketing/carbon-footer.gif?t=2024-07-22T16%3A27%3A07.486Z',
			description:
				'To each web-pages footer, a widget will be added telling you at a glance the carbon output of the page.'
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
						class={`${currentTab == feature ? 'border-primary' : 'border-secondary'} outline-brand flex flex-col gap-2 border-l-4 px-6 py-4 transition-colors duration-300`}
					>
						<div class="flex items-center gap-4">
							<h3 class="text-lg font-semibold md:text-xl">
								{feature.title}
							</h3>
							{#if feature.premium}
								<Badge href={content.gumroadLink} target="_blank">GreenCheck Plus</Badge>
							{/if}
						</div>
						<p class="text-left text-muted-foreground">{feature.description}</p>
					</button>
				</li>
			{/each}
		</ul>
		<div class="min-w-[300px] max-w-xl flex-1 flex items-center justify-end">
			<img src={currentTab.gifLink} alt={`Animated GIF for ${currentTab.title}`} />
		</div>
	</div>
</section>
