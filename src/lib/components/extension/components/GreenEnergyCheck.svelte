<script>
	import * as Card from '$lib/components/ui/card';
  import copyText from '../copy.json';


	import { Loader2Icon, Sprout } from 'lucide-svelte';

	const loading = false;
	const greenHost = {
		green: true,
		hosted_by: 'Placeholder',
		hosted_by_website: 'Placeholder'
	};
</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="text-lg">
			{copyText.popup.tabOne.buttonText}
		</Card.Title>
		<Card.Description>{copyText.popup.tabOne.description}</Card.Description>
	</Card.Header>
	<Card.Content>
		{#if loading}
			<div class="flex justify-center items-center min-h-[100px]">
				<Loader2Icon class="animate-spin" />
			</div>
		{:else}
			<div>
				<div
					class={`rounded-lg p-4 flex gap-2 border bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-700 dark:border-emerald-600 dark:text-emerald-200 dark:bg-opacity-50`}
				>
					<div class="pt-[2px]">
						<Sprout size={20} />
					</div>
					<div class="max-w-64">
						<h4 class="text-base font-medium">Good news!</h4>
						<div class="text-sm">
							This website is hosted by{' '}
							<a href={greenHost.hosted_by_website} class="hover:underline">
								{greenHost.hosted_by}
							</a>
							, a provider committed to reducing its environmental impact.
						</div>
					</div>
				</div>

				<!-- <GreenCheckDropDown result={greenHost} text={'Supporting documentation'} /> -->
			</div>
		{/if}
	</Card.Content>
</Card.Root>
