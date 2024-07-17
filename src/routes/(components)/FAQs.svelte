<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import content from '$lib/content.json';

	const faqList = [
		{
			id: 0,
			question: 'How do I get a license key?',
			answer: `A license key is required to gain access to the Carbon Analysis tab of the extension. To do so, you can purchase one by following any of the links to <a class="underline" href=${content.gumroadLink} target="_blank">Get Plus</a>, and will receive a license key via the email you provide. You will be navigated to Gumroad, who we use as our payment provider. Simply enter the key into the Carbon Analysis tab to get access to the Plus features listed above. Whilst you can use the license as many time as you require, it should be noted that if the license key is made public, or used for any means other than your personal use, it may be revoked.`
		},
		{
			id: 1,
			question: 'How does it work?',
			answer:
				'We use multiple data sources for various features. To see if your website runs on green energy, we rely on data from <a class="underline" href="https://www.thegreenwebfoundation.org" target="_blank">The Green Web Foundation</a>, which has a dataset of organisations that can demonstrate they are taking steps to avoid, reduce or offset the greenhouse gas emissions caused by using electricity to provide their services. If the website you are checking uses one of these organisations to host their website, it will show as green energy. We also use yearly average grid intensity data from <a class="underline" href="https://ember-climate.org/data/data-tools/data-explorer/" target="_blank">Ember</a>, marginal intensity data from the <a class="underline" href="https://unfccc.int/" target="_blank">UNFCCC</a>, Lighthouse metrics about your website from Google, and CO2.js as data sources for our calculations.'
		},
		{
			id: 2,
			question: 'What exactly is free, and what is paid?',
			answer:
				'To use the free features of the extension, install it on either Chrome, Firefox or Edge from above, and you will have access to the Green Energy tab of the extension popup, which will tell you if the website you are currently on runs on green energy or not. If it does, it will provide supporting documentation on this. The other free feature is that when you use Google Search, your search results will also show the same information at a glance as you browse, by adding an 🌱 icon to any results that are green, and a dropdown with the supporting documentation. If you purchase <a class="underline" href=${content.gumroadLink} target="_blank">GreenCheck Plus</a>, you get access to the Carbon Analysis tab which has additional data on the websites you visit, from the calculated carbon cost each time the page loads, and additional information it learns about the website from the scan. You will also be supporting the project, and will have constant access to any additional features added in future, without additional cost.'
		},
		{
			id: 3,
			question:
				'I purchased a license key and entered it, but it is now asking me for my license key again?',
			answer:
				'The extension uses your browser\'s storage to confirm you have purchased the Plus features. If you have switched browsers, computers, or have cleared your browser settings, you may need to re-enter your license key again. If you have lost your license key, or it is no longer working, email us at <a class="underline" href="mailto:greenchecksupport@proton.me">greenchecksupport@proton.me</a>, including proof of your purchase, and we will be happy to assist you.'
		},
		{
			id: 4,
			question:
				'Your tool shows that my website does not run on green energy, how can I change this?',
			answer: `We recommend looking through the list of green hosting providers listed at <a class="underline" href="https://www.thegreenwebfoundation.org/directory/" target="_blank">The Green Web Foundation's Green Web Directory</a>, and identifying a suitable host to switch to. Here at GreenCheck, we use <a class="underline" href="https://pages.cloudflare.com/" target="_blank">Cloudflare</a>. If you suspect your website hosting provider should be within the Green Web Foundation's dataset, you can encourage them to <a class="underline" href="https://admin.thegreenwebfoundation.org/provider-portal/">get verified with them</a>.`
		}
	];
</script>

<section class="space-y-16 py-24">
	<div class="flex flex-col items-center justify-center gap-4">
		<h2 class="text-center text-3xl font-semibold md:text-4xl">Frequently asked questions</h2>
		<p class="text-center text-muted-foreground">
			Everything you need to know about the Greencheck Browser Extension
		</p>
	</div>

	<div class="flex justify-center">
		<Accordion.Root class="w-full max-w-3xl">
			{#each faqList as faq}
				<Accordion.Item value={faq.id.toString()} class="py-4">
					<Accordion.Trigger class="outline-brand">{faq.question}</Accordion.Trigger>
					<Accordion.Content class="pt-4">
						{@html faq.answer}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
