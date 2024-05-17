<script>
	export let dir = [];
	import black_right from '$lib/assets/black_right.svg';
</script>

<div>
	<div class="flex items-center gap-[10px] content p-6 *:text-[14px] *:font-[400] *:text-[#777e90]">
		{#each dir as page}
			<a href={page.url}>
				<span>{page.name}</span>
			</a>
			<img src={black_right} alt="" />
		{/each}
	</div>
</div>
