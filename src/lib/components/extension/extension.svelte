<script>
	import HeaderSection from './components/HeaderSection.svelte';
	import TabSection from './components/TabSection.svelte';
	import WindowBar from './components/WindowBar.svelte';

</script>

<div class="rounded-xl shadow-lg">
	<WindowBar />
	<div class="flex flex-1 flex-col max-w-[424px] min-w-[280px]">
		<HeaderSection />
		<div class="flex flex-col p-4 min-h-[364px]">
			<TabSection />
		</div>
	</div>
</div>
