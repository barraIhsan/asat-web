<script>
	export let clinicData;
</script>

<ol class="space-y-10">
	{#each clinicData as clinic}
		<li class="flex flex-col lg:flex-row gap-5 lg:py-10">
			<h2 class="text-dark font-bold text-4xl lg:flex-1">{clinic.title}</h2>
			<p class="text-xl lg:flex-1">{clinic.desc}</p>
		</li>
	{/each}
</ol>
