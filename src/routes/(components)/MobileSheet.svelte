<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Globe, Menu, ShoppingCart } from 'lucide-svelte';

	import Logomark from '$lib/assets/Logomark.svg';
	import { Button, buttonVariants } from '$lib/components/ui/button';
</script>

<Sheet.Root>
	<Sheet.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
		<Menu class="h-6 w-6" />
	</Sheet.Trigger>
	<Sheet.Content side="right" class="">
		<Sheet.Header class="pb-12">
			<Sheet.Title>
				<a href="/"><img src={Logomark} alt="Greencheck logo" /></a>
			</Sheet.Title>
		</Sheet.Header>
		<div class="flex flex-col gap-3">
			<Button variant="secondary"><Globe class="mr-2 h-4 w-4" />Get Basic for free</Button>
			<Button><ShoppingCart class="mr-2 h-4 w-4" />Get Plus for £30</Button>
		</div>
	</Sheet.Content>
</Sheet.Root>
