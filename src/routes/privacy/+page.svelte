<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';
	let privacyContent = '';

	onMount(async () => {
		const response = await fetch('/privacy.html');
		privacyContent = await response.text();
	});

	let privacyContainer: HTMLDivElement;

	$: if (privacyContent && privacyContainer) {
		privacyContainer.innerHTML = privacyContent;
	}
</script>

<svelte:head>
	<title>Privacy Policy | GreenCheck</title>
</svelte:head>

<div>
	<Header />
	<div class="privacy-policy" bind:this={privacyContainer}></div>
</div>
