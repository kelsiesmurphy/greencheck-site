<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Chrome, Coffee, Menu } from 'lucide-svelte';
	import content from '$lib/content.json';

	import Logomark from '$lib/assets/Logomark.svg';
	import { Button, buttonVariants } from '$lib/components/ui/button';

	const listItems = [
		{
			title: 'Instructions',
			link: '/instructions'
		},
		{
			title: 'Privacy Policy',
			link: '/privacy'
		}
	];
</script>

<Sheet.Root>
	<Sheet.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
		<Menu class="h-6 w-6" />
	</Sheet.Trigger>
	<Sheet.Content side="right" class="">
		<Sheet.Header class="pb-12">
			<Sheet.Title>
				<a href="/"><img src={Logomark} alt="Greencheck logo" /></a>
			</Sheet.Title>
		</Sheet.Header>
		<ul class="space-y-4">
			{#each listItems as value}
				<li>
					<Button class="w-full" href={value.link} variant="ghost">{value.title}</Button>
				</li>
			{/each}
			<li>
				<Button class="w-full" href={content.donationLink} target="_blank" variant="secondary"
					><Coffee class="mr-2 h-4 w-4" />Buy me a coffee</Button
				>
			</li>
			<li>
				<Button class="w-full" href={content.chromeStoreLink} target="_blank">
					<Chrome class="mr-2 h-4 w-4" />Get extension
				</Button>
			</li>
		</ul>
	</Sheet.Content>
</Sheet.Root>
