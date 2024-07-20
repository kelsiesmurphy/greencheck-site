<script lang="ts">
	import Logomark from '$lib/assets/Logomark.svg';
	import { Button } from '$lib/components/ui/button';
	import { Globe, ShoppingCart } from 'lucide-svelte';
	import HeaderMobile from '../../routes/(components)/HeaderMobile.svelte';
	import content from '$lib/content.json';
	import { sendGumroadLog } from '$lib/utils/logs';
</script>

<div>
	<nav class="hidden items-center justify-between p-4 transition-all sm:flex">
		<div class="logo py-0 transition-all duration-300">
			<a href="/" class="outline-brand"><img src={Logomark} alt="Greencheck logo" /></a>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row">
			<Button
				href={content.chromeStoreLink}
				on:click={() => sendGumroadLog('chrome', 'Get Basic for free button in Global Header')}
				target="_blank"
				variant="secondary"><Globe class="mr-2 h-4 w-4" />Get Basic for free</Button
			>
			<Button
				href={content.gumroadLink}
				target="_blank"
				on:click={() => sendGumroadLog('gumroad', 'Gumroad Button in Global Header')}
			>
				<ShoppingCart class="mr-2 h-4 w-4" />Get Plus for £30
			</Button>
		</div>
	</nav>
	<HeaderMobile />
</div>
