<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';

	export let tabs;
</script>

<Tabs.Root value={tabs[0].name} class="">
	<Tabs.List class="m-auto grid max-w-[400px] grid-cols-3">
		{#each tabs as tab}
			<Tabs.Trigger value={tab.name}>{tab.name}</Tabs.Trigger>
		{/each}
	</Tabs.List>
	{#each tabs as tab}
		<Tabs.Content value={tab.name}>
			<div class="flex flex-1 flex-wrap items-center justify-center gap-16 py-12">
				<ul class="max-w-xl flex-1 space-y-12 md:pt-6">
					<li class="flex gap-4">
						<div class="flex aspect-square h-12 rounded-md border border-secondary p-3">
							<img src={tab.logo} alt={`Logo for the ${tab.name} browser.`} class="h-6 w-6" />
						</div>
						<div class="space-y-2">
							<h3 class="text-lg font-semibold md:text-xl">{tab.name}</h3>
							<ul class="text-left text-muted-foreground list-decimal list-inside space-y-2">
								{#each tab.instructions_list as instruction}
									<li>{@html instruction}</li>
								{/each}
							</ul>
						</div>
					</li>
				</ul>
				<div class="max-w-lg flex-1">
					<img
						src={tab.image}
						alt={`Animated GIF from of adding extension for the ${tab.name} browser.`}
					/>
				</div>
			</div>
		</Tabs.Content>
	{/each}
</Tabs.Root>
