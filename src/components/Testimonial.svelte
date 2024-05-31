<script>
	export let quote, author;
</script>

<div class="bg-white p-8 text-dark text-base sm:text-lg flex flex-col gap-5 rounded-2xl">
	<img src="/img/quote.svg" alt="Quote" class="w-8 sm:w-fit">
	<p>{quote}</p>
	<p class="font-bold list-item list-inside">{author}</p>
</div>