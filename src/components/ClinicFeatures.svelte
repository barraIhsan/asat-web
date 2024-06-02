<script>
	export let features;
</script>

{#each features as feature}
	<div class="flex flex-col lg:flex-row gap-5 lg:py-10">
		<h2 class="text-dark font-bold text-4xl lg:w-1/2">{feature.title}</h2>
		<p class="text-xl lg:w-1/2">{feature.desc}</p>
	</div>
{/each}