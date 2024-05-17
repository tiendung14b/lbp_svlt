<script>
	import mis01 from '$lib/assets/mis01.png';
	import mis02 from '$lib/assets/mis02.png';
	import mis_deco01 from '$lib/assets/mis_deco01.svg';
	import mis_deco02 from '$lib/assets/mis_deco02.svg';
	import about_deco02 from '$lib/assets/about_deco02.svg';
</script>

<div id="about_his" class="p-[20px] lg:px-[60px] py-[66px] bg-[#F0F3F6]">
	<div class="flex flex-col justify-between md:flex-row content text-white">
		{#each [{ image: mis01, title: 'Tầm nhìn', content: 'Trở thành doanh nghiệp uy tín hàng đầu trong lĩnh vực xây dựng nhà xưởng công nghiệp tại Việt Nam', deco: mis_deco01 }, { image: mis02, title: 'Sứ mệnh', content: 'Khẳng định với nhà đầu tư nước ngoài về uy tín và chất lượng công trình đạt tiêu chuẩn quốc tế của các tổng thầu xây dựng công nghiệp Việt Nam', deco: mis_deco02 }] as { image, title, content, deco }}
			<div class="md:w-[49%]">
				<img src={image} alt="" class="w-[90%] object-cover" />
				<div
					class="relative bg-[#FB342E] h-[260px] flex flex-col gap-[27px] w-[90%] px-[44px] py-[37px] ml-auto -translate-y-16"
				>
					<div class="relative z-10 flex justify-between items-center">
						<strong class="text-[32px] md:text-[40px] font-[600]">{title}</strong>
						<img src={deco} alt="" />
					</div>
					<p class="text-[16px] md:text-[20px] text-justify font-[600]">{content}</p>
					<img src={about_deco02} alt="" class="absolute top-0 left-0 -z-20" />
				</div>
			</div>
		{/each}
	</div>
</div>
