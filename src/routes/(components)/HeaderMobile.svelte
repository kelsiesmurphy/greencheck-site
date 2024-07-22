<script lang="ts">
	import Logomark from '$lib/assets/logomark.svg';
	import MobileSheet from './MobileSheet.svelte';
</script>

<div
	class="fixed left-0 top-0 flex w-full items-center justify-between bg-background p-6 shadow-sm sm:hidden"
>
	<img src={Logomark} alt="Greencheck logo" />
	<MobileSheet />
</div>
