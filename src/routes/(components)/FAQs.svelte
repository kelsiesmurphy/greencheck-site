<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import content from '$lib/content.json';

	const faqList = [
		{
			id: 0,
			question: 'How does it work?',
			answer:
				'We use multiple data sources for various features. To see if your website runs on green energy, we rely on data from <a class="underline" href="https://www.thegreenwebfoundation.org" target="_blank">The Green Web Foundation</a>, which has a dataset of organisations that can demonstrate they are taking steps to avoid, reduce or offset the greenhouse gas emissions caused by using electricity to provide their services. If the website you are checking uses one of these organisations to host their website, it will show as green energy. We also use yearly average grid intensity data from <a class="underline" href="https://ember-climate.org/data/data-tools/data-explorer/" target="_blank">Ember</a>, marginal intensity data from the <a class="underline" href="https://unfccc.int/" target="_blank">UNFCCC</a>, Lighthouse metrics about your website from Google, and CO2.js as data sources for our calculations.'
		},
		{
			id: 1,
			question:
				'Your tool shows that my website does not run on green energy, how can I change this?',
			answer: `We recommend looking through the list of green hosting providers listed at <a class="underline" href="https://www.thegreenwebfoundation.org/directory/" target="_blank">The Green Web Foundation's Green Web Directory</a>, and identifying a suitable host to switch to. Here at GreenCheck, we use <a class="underline" href="https://pages.cloudflare.com/" target="_blank">Cloudflare</a>. If you suspect your website hosting provider should be within the Green Web Foundation's dataset, you can encourage them to <a class="underline" href="https://admin.thegreenwebfoundation.org/provider-portal/">get verified with them</a>.`
		},
		{
			id: 2,
			question: `Does this work for search engines other than Google Search?`,
			answer: `At this moment in time, we only support Google Search, although we do have plans to support other search engines in future. If you would like to see a specific search engine, reach out to <a href="mailto:greenchecksupport@proton.me">greenchecksupport@proton.me</a> to request it, and we'll look into building it!`
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
					<Accordion.Content class="pt-4 text-base">
						{@html faq.answer}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
