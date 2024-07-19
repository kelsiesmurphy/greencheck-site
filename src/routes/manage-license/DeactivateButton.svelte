<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { PUBLIC_GUMROAD_ACCESS_TOKEN } from '$env/static/public';

	export let apiResponse;

	let email: string = '';
	let errorMessage: string = '';

	const handleDeactivate = async () => {
		if (email !== apiResponse.purchase.email) {
			errorMessage = 'The email entered does not match our records.';
			return;
		}

		const response = await fetch('https://api.gumroad.com/v2/licenses/disable', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				access_token: PUBLIC_GUMROAD_ACCESS_TOKEN, // Replace with your actual access token
				product_id: apiResponse.purchase.product_id,
				license_key: apiResponse.purchase.license_key
			})
		});

		const result: any = await response.json();
		console.log(result);
		if (response.ok) {
			alert('License key deactivated successfully.');
		} else {
			errorMessage = result.message || 'Failed to deactivate the license key.';
		}
	};
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'destructive' })}>Deactivate</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Deactivate License Key</Dialog.Title>
			<Dialog.Description>
				For security reasons, please enter the email associated with this license key.
			</Dialog.Description>
		</Dialog.Header>
		<div class="flex items-center gap-3">
			<Label for="email" class="text-right">Email</Label>
			<Input id="email" bind:value={email} class="flex-1" />
		</div>
		{#if errorMessage}
			<p class="text-red-500">{errorMessage}</p>
		{/if}
		<Dialog.Footer>
			<Button type="button" variant="destructive" on:click={handleDeactivate}>Confirm</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
