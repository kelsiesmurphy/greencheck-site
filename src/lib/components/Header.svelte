<script lang="ts">
	import Logomark from '$lib/assets/Logomark.svg';
	import { Button } from '$lib/components/ui/button';
	import { Chrome, Coffee } from 'lucide-svelte';
	import HeaderMobile from '../../routes/(components)/HeaderMobile.svelte';
	import content from '$lib/content.json';
</script>

<div>
	<nav class="hidden items-center justify-between p-4 transition-all sm:flex">
		<div class="logo py-0 transition-all duration-300">
			<a href="/" class="outline-brand"><img src={Logomark} alt="Greencheck logo" /></a>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row">
			<Button href={content.donationLink} target="_blank" variant="secondary">
				<Coffee class="mr-2 h-4 w-4" />Buy me a coffee
			</Button>
			<Button href={content.chromeStoreLink} target="_blank">
				<Chrome class="mr-2 h-4 w-4" />Get extension
			</Button>
		</div>
	</nav>
	<HeaderMobile />
</div>
