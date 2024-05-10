<script>
	import { cn } from '$lib/modules/cn.js';
	export let onClick;
	export let text;
	export let bg;
</script>

<button
	on:click={onClick}
	class={`bg-[${bg}] text-[white] text-[16px] font-bold pt-[20px] pb-[20px] pl-[40px] pr-[40px]`}
>
	{text}
</button>
