<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { KeyRound } from 'lucide-svelte';
	import DeactivateButton from './DeactivateButton.svelte';
	export let apiResponse;

	console.log(apiResponse)
</script>

<Card.Root class="max-w-2xl flex-1 rounded-xl">
	<Card.Header class="flex flex-row items-center justify-between px-3 py-[14px]">
		<div class="flex items-center gap-3">
			<div class="rounded-lg border p-2 shadow">
				<KeyRound size={16} />
			</div>
			<Card.Title>{apiResponse.purchase.license_key}</Card.Title>
		</div>
		<DeactivateButton {apiResponse} />
	</Card.Header>
	<hr />
	<Card.Footer class="flex-col items-start gap-2 px-4 py-8 text-muted-foreground">
		<p>Order Number: {apiResponse.purchase.order_number}</p>
		<p>Activated on: {new Date(apiResponse.purchase.sale_timestamp).toLocaleString('en-gb')}</p>
		<p>Remaining uses: <strong>{apiResponse.uses}</strong></p>
	</Card.Footer>
</Card.Root>
