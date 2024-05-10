<script>
	export let len = 0;
	export let numPage = 0;
	export let intervalSlide = null;
	import { cn } from '$lib/modules/cn.js';
	import { onDestroy } from 'svelte';

	const handleChangeSlide = (num) => {
		numPage = num % len;
		if (intervalSlide) clearInterval(intervalSlide);
		intervalSlide = setInterval(() => {
			numPage = (numPage + 1) % len;
		}, 4000);
	};
</script>

<div class="flex flex-row gap-3">
	{#each Array.from(Array(len).keys()) as item}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={handleChangeSlide.bind(null, item)}
			class={cn(
				'w-[40px] h-[5px] transition-all duration-300',
				item == numPage ? 'bg-[#FB342E]' : 'bg-[#0002] hover:bg-[#0005]'
			)}
		></div>
	{/each}
</div>
