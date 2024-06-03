<script>
	import Plan from './DaycarePlan.svelte';

	export let name, plans, color;
</script>

<div class="flex flex-col gap-3">
	<h2 class="text-dark font-bold text-4xl">Paket {name}</h2>
	<div class="flex flex-col md:flex-row gap-8 mb-8">
		{#each plans as plan}
			<Plan title={plan.title} price={plan.price} desc={plan.desc} color={color} />
		{/each}
	</div>
	<a href="https://wa.me/62812345678910" target="_blank" class="flex justify-center items-center gap-3 rounded-full text-white bg-green hover:bg-greenHover transition py-6">
		<img src="/img/whatsapp.svg" alt="WhatsApp Logo" class="size-6 xs:size-8">
		<p class="text-xl xs:text-2xl font-semibold">Reservasi Sekarang</p>
	</a>
</div>