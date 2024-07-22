<script>
	// import { Button } from '$lib/components/ui/button';
	// import * as Tooltip from '$lib/components/ui/tooltip';
	import { Sun } from 'lucide-svelte';

	import Logomark from '$lib/assets/logomark_white.svg';
</script>

<div
	class="flex items-center justify-between bg-emerald-800 px-6 py-4 text-xl font-medium text-white"
>
	<img src={Logomark} class="aspect-[224.87 / 48] h-9" alt="" />
	<div class="flex gap-1">
		<!-- <Tooltip.Root>
			<Tooltip.Trigger>
				<Button disabled variant="ghost" size="icon" class="hover:bg-emerald-900 hover:text-white">
					<div>
						<Settings2 class="h-4 w-4" />
					</div>
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Options</p>
			</Tooltip.Content>
		</Tooltip.Root> -->
		<Sun size={20}/>
		<!-- <ModeToggle /> -->
	</div>
</div>
