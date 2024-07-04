<script lang="ts">
	import { onMount } from 'svelte';

	export let lottieFile;

	let animationContainer: HTMLElement;

	onMount(async () => {
		const { default: lottie } = await import('lottie-web/build/player/lottie_light');
		lottie.loadAnimation({
			container: animationContainer,
			animationData: lottieFile
		});
	});
</script>

<div bind:this={animationContainer} />
