<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import LicenseForm from './LicenseForm.svelte';
	import type { PageData } from './$types.js';

	export let data: PageData;
</script>

<svelte:head>
	<title>My License | GreenCheck</title>
</svelte:head>

<main class="flex flex-1 flex-col">
	<Header />
	<section class="flex flex-1 flex-col gap-4 space-y-16 py-16 pt-32 sm:pt-16">
		<div class="flex flex-col items-center justify-center gap-4">
			<h1 class="text-center text-3xl font-semibold sm:text-4xl">Manage your License</h1>
		</div>
		<div class="flex flex-1 justify-center">
			<LicenseForm {data} />
		</div>
	</section>
</main>
