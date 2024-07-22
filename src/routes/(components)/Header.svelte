<script lang="ts">
	import Logomark from '$lib/assets/logomark.svg';
	import { Button } from '$lib/components/ui/button';
	import { Globe, ShoppingCart } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import content from '$lib/content.json';
	import { sendGumroadLog } from '$lib/utils/logs';

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
				<Button
					href={content.chromeStoreLink}
					on:click={() =>
						sendGumroadLog('chrome', 'Get Basic for free in scrolled header on landing page')}
					target="_blank"
					variant="secondary"><Globe class="mr-2 h-4 w-4" />Get Basic for free</Button
				>
				<Button
					href={content.gumroadLink}
					target="_blank"
					on:click={() =>
						sendGumroadLog('gumroad', 'Gumroad Button in scrolled header on landing page')}
				>
					<ShoppingCart class="mr-2 h-4 w-4" />Get Plus for £{content.price}
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
