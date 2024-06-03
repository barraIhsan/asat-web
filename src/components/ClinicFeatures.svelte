<script>
	export let features;
</script>

<ol class="space-y-10">
	{#each features as feature}
		<li class="flex flex-col lg:flex-row gap-5 lg:py-10">
			<h2 class="text-dark font-bold text-4xl lg:w-1/2">{feature.title}</h2>
			<p class="text-xl lg:w-1/2">{feature.desc}</p>
		</li>
	{/each}
</ol>
