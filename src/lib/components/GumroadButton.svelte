<script lang="ts">
	import { onMount } from 'svelte';
	import { neon } from '@neondatabase/serverless';
	import { Button } from './ui/button';
	import content from '$lib/content.json';
	import { ShoppingCart } from 'lucide-svelte';

	const sql = neon(
		'postgresql://prod_owner:nYf1qk9egsmp@ep-withered-resonance-a2ys0kyg.eu-central-1.aws.neon.tech/prod?sslmode=require'
	);

	let gumroadClicks = [];

	const sendGumroadLog = async () => {
		try {
			gumroadClicks = await sql('SELECT * FROM gumroad_clicks');
			console.log(gumroadClicks);
		} catch (error) {
			console.error('Error fetching gumroad log:', error);
		}
	};

	onMount(() => {
		sendGumroadLog();
	});
</script>

<Button href={content.gumroadLink} target="_blank">
	<ShoppingCart class="mr-2 h-4 w-4" />Get Plus for £30
</Button>
