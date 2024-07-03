<script>
	import Logomark from '$lib/assets/Logomark.svg';
	import { Button } from '$lib/components/ui/button';

	const footerItems = [
		{
			title: 'Home',
			link: '/'
		},
		{
			title: 'About Us',
			link: '/about'
		},
		{
			title: 'Pricing',
			link: '/pricing'
		},
		{
			title: 'Sustainability',
			link: '/sustainability'
		},
		{
			title: 'Terms',
			link: '/terms'
		},
		{
			title: 'Privacy',
			link: '/privacy'
		},
		{
			title: 'Cookies',
			link: '/cookies'
		}
	];
</script>

<footer class="py-16">
	<div class="flex flex-col items-center gap-6 text-zinc-600">
		<Button variant="link" href="/"><img src={Logomark} alt="Greencheck logo" /></Button>
		<ul class="grid grid-cols-2 sm:flex sm:flex-wrap justify-center">
			{#each [...footerItems.values()] as value}
				<li>
					<Button href={value.link} variant="ghost">{value.title}</Button>
				</li>
			{/each}
		</ul>
		<div class="w-full space-y-8 pt-6">
            <hr/>
            <div class="text-muted-foreground flex flex-wrap-reverse gap-6 justify-between text-xs">
                <p>© 2024 GreenCheck. All rights reserved.</p>
                <div class="flex gap-4">
                    <a href="/terms" class="hover:underline">Terms</a>
                    <a href="/privacy" class="hover:underline">Privacy</a>
                    <a href="/cookies" class="hover:underline">Cookies</a>
                </div>
            </div>
        </div>
	</div>
</footer>
