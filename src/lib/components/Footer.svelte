<script lang="ts">
	import Logomark from '$lib/assets/Logomark.svg';
	import { Button } from '$lib/components/ui/button';

	const footerItems = [
		{
			title: 'Home',
			link: '/'
		},
		{
			title: 'Instructions',
			link: '/instructions'
		},
		{
			title: 'Manage Licenses',
			link: '/my-license'
		},
		{
			title: 'Privacy',
			link: '/privacy'
		}
	];
</script>

<footer class="py-16">
	<div class="flex flex-col items-center gap-6 text-zinc-600">
		<Button variant="link" href="/"><img src={Logomark} alt="Greencheck logo" /></Button>
		<ul class="grid grid-cols-2 justify-center sm:flex sm:flex-wrap">
			{#each [...footerItems.values()] as value}
				<li>
					<Button href={value.link} variant="ghost">{value.title}</Button>
				</li>
			{/each}
		</ul>
		<div class="w-full space-y-8 pt-6">
			<hr />
			<div class="text-muted-foreground flex items-center flex-wrap-reverse justify-between gap-6 text-xs outline-brand">
				<p>© 2024 GreenCheck. All rights reserved.</p>
				<div class="flex gap-1">
					<Button variant="link" size="sm" href="/privacy" class="hover:underline text-muted-foreground text-xs">Privacy</Button>
				</div>
			</div>
		</div>
	</div>
</footer>
