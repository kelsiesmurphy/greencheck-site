<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { FileBarChart2 } from 'lucide-svelte';
	import ChromeLogo from '$lib/assets/chrome.svg';
	import FirefoxLogo from '$lib/assets/firefox.svg';
	import EdgeLogo from '$lib/assets/edge.svg';
	import content from '$lib/content.json';
	import Tabs from './Tabs.svelte';

	const browserList = [
		{
			name: 'Chrome',
			image: ChromeLogo,
			link: content.chromeStoreLink,
			instructions: `If you are using Chrome for your web browser, go to the <a class="underline" href=${content.chromeStoreLink} target="_blank">GreenCheck Extension page in the Chrome Web Store</a> and click the 'Add to Chrome' button. Once done, GreenCheck will immediately start running in your Google Search results to identify websites that are green, and you can open the extension popup by clicking the puzzle icon in your browsers search bar. If you have <a class="underline" href=${content.gumroadLink} target="_blank">purchased GreenCheck Plus</a>, you can access your additional functionality in the extension popup by switching to the Carbon Analysis tab, and entering your license key, which will have been emailed to you from Gumroad. This will allow you to scan the website you are on to get details on the website's carbon output. Please note that if you switch browsers, or clear your browser settings, you may have to re-enter this license key.`
		},
		{
			name: 'Firefox',
			image: FirefoxLogo,
			link: content.firefoxStoreLink,
			instructions: `If you are using Firefox for your web browser, go to the <a class="underline" href=${content.firefoxStoreLink} target="_blank">GreenCheck Add-on page in the Firefox Browser Add-ons library</a> and click the 'Add to Firefox' button. Once done, GreenCheck will immediately start running in your Google Search results to identify websites that are green, and you can open the extension popup by clicking the puzzle icon in your browsers search bar. If you have <a class="underline" href=${content.gumroadLink} target="_blank">purchased GreenCheck Plus</a>, you can access your additional functionality in the extension popup by switching to the Carbon Analysis tab, and entering your license key, which will have been emailed to you from Gumroad. This will allow you to scan the website you are on to get details on the website's carbon output. Please note that if you switch browsers, or clear your browser settings, you may have to re-enter this license key.`
		},
		{
			name: 'Edge',
			image: EdgeLogo,
			link: content.edgeStoreLink,
			instructions: `If you are using Edge for your web browser, go to the <a class="underline" href=${content.edgeStoreLink} target="_blank">GreenCheck Add-on page in the Edge Add-ons library</a> and click the 'Get' button. Once done, GreenCheck will immediately start running in your Google Search results to identify websites that are green, and you can open the extension popup by clicking the puzzle icon in your browsers search bar. If you have <a class="underline" href=${content.gumroadLink} target="_blank">purchased GreenCheck Plus</a>, you can access your additional functionality in the extension popup by switching to the Carbon Analysis tab, and entering your license key, which will have been emailed to you from Gumroad. This will allow you to scan the website you are on to get details on the website's carbon output. Please note that if you switch browsers, or clear your browser settings, you may have to re-enter this license key.`
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
