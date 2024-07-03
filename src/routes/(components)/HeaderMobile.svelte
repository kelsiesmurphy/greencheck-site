<script lang="ts">
	import Logomark from '$lib/assets/Logomark.svg';
	import MobileSheet from './MobileSheet.svelte';

</script>

<div class="fixed left-0 top-0 w-full shadow-sm p-6 bg-background flex justify-between items-center">
	<img src={Logomark} alt="Greencheck logo" />
	<MobileSheet />
</div>
