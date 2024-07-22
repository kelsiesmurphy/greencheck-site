<script lang="ts">
	import copyText from '../copy.json';
	import GreenEnergyCheck from './GreenEnergyCheck.svelte';
	import CarbonAnalysis from './CarbonAnalysis.svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Sprout, FileBarChart2 } from 'lucide-svelte';
</script>

<Tabs.Root value="tab-one">
	<Tabs.List class="flex h-auto w-full flex-wrap">
		<Tabs.Trigger value="tab-one" class="flex-1">
			<Sprout class="mr-2 h-4 w-4" />{' '}
			{copyText.popup.tabOne.buttonText}
		</Tabs.Trigger>
		<Tabs.Trigger value="tab-two" class="flex-1">
			<FileBarChart2 class="mr-2 h-4 w-4" />{' '}
			{copyText.popup.tabTwo.buttonText}
		</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="tab-one" class="py-2">
		<GreenEnergyCheck />
	</Tabs.Content>
	<Tabs.Content value="tab-two" class="py-2">
		<CarbonAnalysis />
	</Tabs.Content>
</Tabs.Root>
