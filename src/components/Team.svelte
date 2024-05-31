<script>
	export let role, name;
</script>

<div class="flex flex-col gap-3 text-dark">
	<img src="/img/icon-staff.png" alt="Staff Profile" class="rounded-2xl h-80 object-cover">
	<p class="text-xl">{role}</p>
	<p class="text-3xl font-bold">{name}</p>
</div>