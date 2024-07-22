<script>
	import HeaderSection from './components/HeaderSection.svelte';
	import TabSection from './components/TabSection.svelte';
	import WindowBar from './components/WindowBar.svelte';
</script>

<div class="rounded-xl shadow-lg">
	<WindowBar />
	<div class="flex min-w-[280px] max-w-[424px] flex-1 flex-col">
		<HeaderSection />
		<div class="flex min-h-[364px] flex-col p-4">
			<TabSection />
		</div>
	</div>
</div>
