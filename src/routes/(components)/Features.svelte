<script lang="ts">
	const featureList = [
		{
			title: 'See green-hosted websites at a glance',
			lottieLink: 'https://lottie.host/1f5a167c-e913-430a-acd2-6b6ca3a83ad8/Zmfp4UGK1M.json',
			description:
				'Google Search results will show an 🌱 icon next to websites hosted with green energy and provide supporting documentation from The Green Web Foundation.'
		},
		{
			title: 'Check to see if a website is hosted sustainably',
			lottieLink: 'https://lottie.host/b370d175-c82d-4546-8319-ab2fe671b727/sfl19Agj7T.json',
			description:
				"To check if a website runs on green energy, open the extension from your browser's navigation bar, and it will inform you."
		}
	];

	let currentTab = featureList[0];

	let lottiePlayer: { load: (arg: string) => void };

	$: if (lottiePlayer) {
		lottiePlayer.load(currentTab.lottieLink);
	}
</script>

<section class="space-y-16 py-24">
	<h2 class="text-3xl font-semibold md:text-4xl">Free Features</h2>
	<div class="flex flex-wrap justify-center gap-16">
		<ul class="max-w-xl">
			{#each featureList as feature}
				<li>
					<button
						on:click={() => (currentTab = feature)}
						class={`${currentTab == feature ? 'border-primary' : 'border-secondary'} outline-brand flex flex-col gap-2 border-l-4 px-6 py-8 transition-colors duration-300`}
					>
						<h3 class="text-lg font-semibold md:text-xl">{feature.title}</h3>
						<p class="text-left text-muted-foreground">{feature.description}</p>
					</button>
				</li>
			{/each}
		</ul>
		<div
			class="flex aspect-[592/528] min-w-[300px] max-w-xl flex-1 items-center justify-end bg-gray-100 p-4 sm:p-12"
		>
			<div class="overflow-hidden rounded-lg opacity-100 shadow-lg">
				<div>
					<script
						src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
						type="module"
					></script>
					<dotlottie-player
						bind:this={lottiePlayer}
						src={currentTab.lottieLink}
						background="transparent"
						loop
						autoplay
					></dotlottie-player>
				</div>
			</div>
		</div>
	</div>
</section>
