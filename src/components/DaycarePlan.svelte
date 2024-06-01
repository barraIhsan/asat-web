<script>
	export let title, price, color, desc;

	$: descArray = Array.isArray(desc) ? desc : [desc];
</script>

<div class="bg-{color} p-5 rounded-2xl w-full">
	<h3 class="font-bold text-2xl xs:text-3xl">{title}</h3>
	<p class="text-2xl xs:text-3xl">Rp{price}</p>
	<hr class="my-3 border-fuschia">
	<ul class="list-disc ml-5">
		{#each descArray as item}
			<li class="text-lg xs:text-xl">{item}</li>
		{/each}
	</ul>
</div>