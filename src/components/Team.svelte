<script>
	export let role, name;
</script>

<div class="flex flex-col gap-3 text-dark">
	<img src="/img/icon-staff.png" alt="Staff Profile" class="rounded-2xl h-60 xs:h-80 object-cover">
	<p class="text-lg xs:text-xl">{role}</p>
	<p class="text-2xl xs:text-3xl font-bold">{name}</p>
</div>