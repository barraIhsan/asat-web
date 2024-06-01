<script>
	export let imgSrc, imgAlt, direction, title, desc;
</script>

<div class="flex flex-col lg:flex-{direction} gap-8 items-center">
	<img src={imgSrc} alt={imgAlt} class="rounded-2xl size-full flex-1">
	<div class="flex flex-col gap-3 flex-1">
		<h2 class="text-dark font-bold text-4xl">{title}</h2>
		<p class="text-lg xs:text-xl">{desc}</p>
	</div>
</div>