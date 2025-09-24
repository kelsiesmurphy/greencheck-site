<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import Checkmark from '$lib/assets/checkmark.svg';
	import content from '$lib/content.json';
	import { FileBarChart2, Sprout, TextSearch } from 'lucide-svelte';

	const featureList = [
		{
			title: 'Carbon Analysis',
			description:
				"Get predicted carbon emissions data on the website you're visiting, using the size of the website and an estimate of the carbon emissions produced to move that data over the internet.",
			icon: FileBarChart2
		},
		{
			title: 'Point 2',
			description: 'Lorum Ipsum',
			icon: Sprout
		}
	];

	const pricingCardList = [
		'Access to basic features',
		'Access to basic features',
		'Access to basic features',
		'Access to basic features'
	];
</script>

<section class="space-y-16 py-24">
	<h2 class="text-3xl font-semibold md:text-4xl">Greencheck Plus</h2>
	<div class="flex flex-wrap justify-center gap-16">
		<ul class="max-w-xl space-y-12 md:pt-6">
			{#each featureList as feature}
				<li class="flex gap-4">
					<div class="flex aspect-square h-12 rounded-md border border-secondary p-3">
						{#if feature.icon === FileBarChart2}
							<FileBarChart2 class="h-6 w-6" />
						{:else if feature.icon === Sprout}
							<Sprout class="h-6 w-6" />
						{/if}
					</div>
					<div class="space-y-2">
						<h3 class="text-lg font-semibold md:text-xl">{feature.title}</h3>
						<p class="text-left text-muted-foreground">{feature.description}</p>
					</div>
				</li>
			{/each}
		</ul>
		<Card.Root class="min-w-[280px] max-w-xl flex-1 shadow-lg">
			<Card.Header class="flex-row justify-between">
				<div>
					<Card.Title class="text-2xl">Plus</Card.Title>
					<Card.Description class="text-base">One payment, lifetime access.</Card.Description>
				</div>
				<div class="flex gap-[2px] font-semibold">
					<p class="pt-1 text-4xl">£</p>
					<p class="text-5xl md:text-6xl">30</p>
				</div>
			</Card.Header>
			<hr />
			<Card.Content class="space-y-6 py-8">
				<div class="space-y-1">
					<h4 class="font-semibold">Features</h4>
					<p class="text-muted-foreground">Everything in <b>basic</b>, plus...</p>
				</div>
				<ul class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
					{#each pricingCardList as text}
						<li class="flex gap-4">
							<img src={Checkmark} class="h-6 w-6" alt="Checkmark" />
							<p class="text-muted-foreground">{text}</p>
						</li>
					{/each}
				</ul>
			</Card.Content>
			<hr />
			<Card.Footer class="py-8">
				<Button href={content.chromeStoreLink} target="_blank" class="w-full">Get plus</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</section>
