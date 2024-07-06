<script lang="ts">
	import Logomark from '$lib/assets/Logomark.svg';
	import { Button } from '$lib/components/ui/button';
	import { Globe, ShoppingCart } from 'lucide-svelte';
	import HeaderMobile from '../../routes/(components)/HeaderMobile.svelte';
</script>

<div>
	<nav class="hidden items-center justify-between p-4 transition-all sm:flex">
		<div class="logo py-0 transition-all duration-300">
			<a href="/"><img src={Logomark} alt="Greencheck logo" /></a>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row">
			<Button variant="secondary"><Globe class="mr-2 h-4 w-4" />Get Basic for free</Button>
			<Button><ShoppingCart class="mr-2 h-4 w-4" />Get Plus for £30</Button>
		</div>
	</nav>
	<HeaderMobile />
</div>
