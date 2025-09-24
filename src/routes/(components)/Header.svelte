<script lang="ts">
	import Logomark from '$lib/assets/Logomark.svg';
	import { Button } from '$lib/components/ui/button';
	import { Chrome, HandCoins } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import content from '$lib/content.json';

	let scrolled = writable(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled.set(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="fixed left-0 top-0 z-10 w-full">
	<nav
		class="flex items-center justify-between bg-background p-4 transition-all"
		class:scrolled={$scrolled}
	>
		<div class="logo py-0 transition-all duration-300" class:fixed-top-right={!$scrolled}>
			<img src={Logomark} alt="Greencheck logo" />
		</div>
		{#if $scrolled}
			<div class="flex flex-col gap-3 sm:flex-row">
				<Button href={content.donationLink} target="_blank" variant="secondary"
					><HandCoins class="mr-2 h-4 w-4" />Support</Button
				>
				<Button href={content.chromeStoreLink} target="_blank">
					<Chrome class="mr-2 h-4 w-4" />Get extension
				</Button>
			</div>
		{/if}
	</nav>
</div>

<style>
	nav.scrolled {
		padding: 1rem 2rem;
		--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}

	.logo.fixed-top-right {
		padding-top: 48px;
		padding-left: 48px;
	}
</style>
