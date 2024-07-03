<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	const faqList = [
		{
			id: 0,
			question: 'How do I get a license key?',
			answer: 'Answer blah blah'
		},
		{
			id: 1,
			question: 'How do I get a license key?',
			answer: 'Answer blah blah'
		},
		{
			id: 2,
			question: 'How do I get a license key?',
			answer: 'Answer blah blah'
		},
		{
			id: 3,
			question: 'How do I get a license key?',
			answer: 'Answer blah blah'
		},
		{
			id: 4,
			question: 'How do I get a license key?',
			answer: 'Answer blah blah'
		}
	];
</script>

<section class="space-y-16 py-24">
	<div class="flex flex-col items-center justify-center gap-4">
		<h2 class="text-center text-3xl font-semibold md:text-4xl">Frequently asked questions</h2>
		<p class="text-muted-foreground text-center">
			Everything you need to know about the Greencheck Browser Extension
		</p>
	</div>

	<div class="flex justify-center">
        <Accordion.Root class="w-full max-w-3xl">
            {#each faqList as faq}
                <Accordion.Item value={faq.id.toString()} class="py-4">
                    <Accordion.Trigger>{faq.question}</Accordion.Trigger>
                    <Accordion.Content>{faq.answer}</Accordion.Content>
                </Accordion.Item>
            {/each}
        </Accordion.Root>
    </div>
</section>
