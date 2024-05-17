<script>
	import { cn } from '$lib/modules/cn.js';

	import stat01 from '$lib/assets/stat01.png';
	import stat02 from '$lib/assets/stat02.png';
	import stat03 from '$lib/assets/stat03.png';
	import stat04 from '$lib/assets/stat04.png';
</script>

<div id="" class="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4">
	{#each [{ image: stat01, num: 15, desc: 'Hơn 15 năm kinh nghiệm' }, { image: stat02, num: 150, desc: 'Đội ngũ hơn 150 con người kinh nghiệm với văn hóa đồng lòng, chính trực, trách nhiệm' }, { image: stat03, num: 500000, desc: 'Hơn 500,000 giờ an toàn' }, { image: stat04, num: 100, desc: 'Hơn 100 dự án đã hoàn thành' }] as stat, idx}
		<div
			class={cn(
				'flex flex-col items-center gap-5 p-16 border-t-[1px]',
				idx < 3 && 'border-r-[1px] '
			)}
		>
			<img src={stat.image} alt="stat" class="size-[80px]" />
			<strong class="text-[40px] font-[700] text-[#FB342E]">{stat.num + '+'}</strong>
			<p class="text-center text-[14px] font-[600]">{stat.desc}</p>
		</div>
	{/each}
</div>
