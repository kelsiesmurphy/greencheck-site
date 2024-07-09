<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import type { PageData } from './$types';
	import { toast } from 'svelte-sonner';
	import { formSchema } from './schema';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: PageData;

	let loading = false;
	let apiResponse: unknown = null;

	const getLicenseInfo = async (licenseKey: string) => {
		const product_id = '1lMFu-kYVe1oKzAajE6uvg==';
		try {
			loading = true;
			const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
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
	<form method="POST" use:enhance class="max-w-sm flex-1">
		<Form.Field {form} name="license_key">
			<Form.Control let:attrs>
				<Form.Label>License Key</Form.Label>
				<Input {...attrs} bind:value={$formData.license_key} />
			</Form.Control>
			<Form.Description>This is your public display name.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button>Submit</Form.Button>

		<div class="api-response">
			<h2>API Response:</h2>
			<pre>{JSON.stringify(apiResponse, null, 2)}</pre>
		</div>
	</form>
</div>
