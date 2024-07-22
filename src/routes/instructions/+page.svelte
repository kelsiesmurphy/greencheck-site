<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ChromeLogo from '$lib/assets/chrome.svg';
	import FirefoxLogo from '$lib/assets/firefox.svg';
	import EdgeLogo from '$lib/assets/edge.svg';
	import content from '$lib/content.json';
	import Tabs from './Tabs.svelte';

	const browserList = [
		{
			name: 'Chrome',
			logo: ChromeLogo,
			image: 'https://vhzqiumeoyudnxmuhyvz.supabase.co/storage/v1/object/public/marketing/chrome.gif?t=2024-07-22T15%3A39%3A41.415Z',
			link: content.chromeStoreLink,
			instructions_list: [
				`Go to the <a class="underline" href=${content.chromeStoreLink} target="_blank">GreenCheck Extension page in the Chrome Web Store</a>`,
				"Click the 'Add to Chrome' button",
				"Open the extension popup by clicking the puzzle icon in the Chrome browsers search bar",
				`Access <a class="underline" href=${content.gumroadLink} target="_blank">GreenCheck Plus</a> features in the extension popup by switching to the Carbon Analysis tab, and entering your license key, emailed to you from Gumroad.`
			]
		},
		{
			name: 'Firefox',
			logo: FirefoxLogo,
			image: 'https://vhzqiumeoyudnxmuhyvz.supabase.co/storage/v1/object/public/marketing/firefox.gif?t=2024-07-22T15%3A40%3A02.004Z',
			link: content.firefoxStoreLink,
			instructions_list: [
				`Go to the <a class="underline" href=${content.firefoxStoreLink} target="_blank">GreenCheck Add-on page in the Firefox Add-ons library</a>`,
				"Click the 'Add to Firefox' button",
				"Open the extension popup by clicking the puzzle icon in the Firefox browsers search bar",
				`Access <a class="underline" href=${content.gumroadLink} target="_blank">GreenCheck Plus</a> features in the extension popup by switching to the Carbon Analysis tab, and entering your license key, emailed to you from Gumroad.`
			]
		},
		{
			name: 'Edge',
			logo: EdgeLogo,
			image: 'https://vhzqiumeoyudnxmuhyvz.supabase.co/storage/v1/object/public/marketing/edge.gif?t=2024-07-22T15%3A39%3A54.700Z',
			link: content.edgeStoreLink,
			instructions_list: [
				`Go to the <a class="underline" href=${content.edgeStoreLink} target="_blank">GreenCheck Add-on in the Edge Add-ons library</a>`,
				"Click the 'Get' button",
				"Open the extension popup by clicking the puzzle icon in the Edge browsers search bar",
				`Access <a class="underline" href=${content.gumroadLink} target="_blank">GreenCheck Plus</a> features in the extension popup by switching to the Carbon Analysis tab, and entering your license key, emailed to you from Gumroad.`
			]
			
		}
	];
</script>

<svelte:head>
	<title>Instructions | GreenCheck</title>
</svelte:head>

<main class="flex flex-1 flex-col">
	<Header />
	<section class="flex flex-1 flex-col gap-4 space-y-16 py-16 pt-32 sm:pt-16">
		<div class="flex flex-col items-center justify-center gap-4">
			<h1 class="text-center text-3xl font-semibold sm:text-4xl">Thank you!</h1>
			<p class="text-center max-w-xl text-muted-foreground">Thank you for using GreenCheck! Since this extension is supported by multiple web browsers, we have instructions for each browser below. If your browser is not on the list, reach out to <a href="mailto:greenchecksupport@proton.me">greenchecksupport@proton.me</a> to request it!</p>
		</div>
		<Tabs tabs={browserList} />
	</section>
</main>
