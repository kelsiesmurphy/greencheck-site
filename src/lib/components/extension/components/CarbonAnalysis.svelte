<script>
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	import copyText from '../copy.json';

	import { LoaderCircle } from 'lucide-svelte';

	const loading = false;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="text-lg">{copyText.popup.tabTwo.buttonText}</Card.Title>
		<Card.Description>
			{copyText.popup.tabTwo.afterLicenseKeyEntry.description}
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<Button class="bg-[#121826] hover:bg-[#121826]/90">
			{#if loading}
				<div>
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />{' '}
					Running...
				</div>
			{:else}
				Test Website
			{/if}
		</Button>
	</Card.Content>
</Card.Root>
