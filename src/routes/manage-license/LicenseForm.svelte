<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import type { PageData } from './$types';
	import { toast } from 'svelte-sonner';
	import { formSchema } from './schema';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import LicenseScreen from './LicenseScreen.svelte';

	export let data: PageData;

	let loading = false;
	let apiResponse: any = null;

	const getLicenseInfo = async (licenseKey: string) => {
		const product_id = '1lMFu-kYVe1oKzAajE6uvg==';
		try {
			loading = true;
			const response: any = await fetch('https://api.gumroad.com/v2/licenses/verify', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: new URLSearchParams({
					product_id: product_id.toString(),
					license_key: licenseKey
				})
			});

			apiResponse = await response.json();

			if (!response.success) throw response.message;
		} catch (error) {
			if (error instanceof Error) {
				toast.error('Error:' + error);
			}
		} finally {
			loading = false;
		}
	};

	const form = superForm(data.form, {
		validators: zodClient(formSchema),
		onUpdated: ({ form }) => {
			if (form.valid) {
				getLicenseInfo(form.data.license_key);
			} else {
				toast.error('Error retrieving license information.');
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="flex flex-1 justify-center gap-12">
	{#if apiResponse && apiResponse.success == true}
		<LicenseScreen {apiResponse} />
	{:else if apiResponse && apiResponse.success == false}
		<p>{apiResponse.message}</p>
	{:else}
		<form method="POST" use:enhance class="max-w-sm flex-1">
			<Form.Field {form} name="license_key">
				<Form.Control let:attrs>
					<Form.Label>License Key</Form.Label>
					<Input
						{...attrs}
						placeholder="XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX"
						bind:value={$formData.license_key}
					/>
				</Form.Control>
				<Form.Description>This is the license key sent to by email.</Form.Description>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button>Submit</Form.Button>
		</form>
	{/if}
</div>
