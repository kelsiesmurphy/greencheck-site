<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.css';
</script>

<svelte:head>
	<title>GreenCheck | Empowering Greener Browsing, One Click at a Time</title>
</svelte:head>

<div class="container flex min-h-screen flex-col">
	<Toaster />
	<slot></slot>
	<Footer />
</div>
