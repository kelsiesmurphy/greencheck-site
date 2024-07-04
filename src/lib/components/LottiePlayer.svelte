<script lang="ts">
	import lottie from 'lottie-web';
	import { onMount } from 'svelte';

	export let lottieFile

	let animationContainer: HTMLElement;
	onMount(() => {
		lottie.loadAnimation({
			container: animationContainer,
			animationData: lottieFile
		});
	});
</script>

<div bind:this={animationContainer} />
