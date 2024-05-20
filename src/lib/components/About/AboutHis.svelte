<script>
	import { cn } from '$lib/modules/cn.js';
	const data = [
		{
			time: `2019 - nay`,
			title: 'Đẩy mạnh hoạt động trong các lĩnh vực',
			content:
				'Đẩy mạnh hoạt động trong các lĩnh vực Tư vấn đầu tư, thiết kế, thi công và bàn giao các dự án vốn FDI với vai trò Tổng thầu D&B.'
		},
		{
			time: '2018',
			title: 'Từng bước hoàn thiện bộ máy',
			content:
				'Thay đổi nhận diện thương hiệu, thành lập phòng Kinh doanh, phòng Kỹ Thuật, từng bước hoàn thiện bộ máy trên hành trình trở thành Tổng thầu D&B với khẩu hiệu “YOUR MASTER BUILDER”.'
		},
		{
			time: '2017',
			title: 'Dự án Cảng hàng không Quốc tế Viêng Chăn – Lào',
			content:
				'Thi công, bàn giao dự án Cảng hàng không Quốc tế Viêng Chăn – Lào, khẳng định về uy tín và chất lượng công trình của Nhà thầu Việt Nam đạt tiêu chuẩn quốc tế.'
		},
		{
			time: '2016',
			title: 'Thành lập Công ty Cổ phần Enco Industry',
			content:
				'Thành lập Công ty Cổ phần Enco Industry, lĩnh vực hoạt động chủ yếu là các dự án thi công, xây lắp do Tổng thầu Nhật Bản chủ trì.'
		}
	];
</script>

<div id="about_his" class="p-[20px] lg:px-[60px] pb-[66px]">
	<div class="content flex flex-col gap-10">
		<h2 class="text-[40px] font-[600] mx-auto text-[#212163]">
			Lịch sử <span class="text-[#FB342E]">hình thành</span>
		</h2>
		<!-- timeline box -->
		<div class="relative max-w-[100%] pl-28 md:pl-0">
			<!-- line -->
			<div class="absolute w-[2px] h-full bg-[#FB342E] left-[40px] md:left-1/2 -z-1"></div>
			<!-- item of timeline -->
			{#each data as { time, title, content }, idx}
				<div
					class={cn(
						'box-border relative py-2 md:w-[50%]',
						idx % 2 != 0 ? 'md:left-1/2 md:pl-16' : 'md:pr-16'
					)}
				>
					<!-- time marker  -->
					<div
						class={cn(
							'absolute top-1/2 -translate-y-1/2 z-10 flex justify-center items-center size-[80px] rounded-[50%] bg-[#FB342E]',
							idx % 2 != 0 ? '-left-28 md:left-[-40px]' : '-left-28 md:left-auto md:right-[-40px]'
						)}
					>
						<span class="text-white text-[16px] font-[600] p-5 text-center">{time}</span>
					</div>
					<!-- content -->
					<div
						class={cn(
							'relative p-7 bg-[#F0F3F6] border-[#FB342E] hover:bg-[#212163] *:hover:text-white',
							idx % 2 != 0 ? 'border-l-4' : 'border-l-4 md:border-l-0 md:border-r-4'
						)}
					>
						<!-- arrow -->
						<div
							class={cn(
								'absolute top-1/2 -translate-y-1/2 border-y-[15px] border-y-transparent border-[#FB342E] z-50',
								idx % 2 != 0
									? 'border-r-[15px] -left-[15px]'
									: 'border-r-[15px] -left-[15px] md:left-auto md:border-r-0 md:border-l-[15px] md:-right-[15px]'
							)}
						></div>
						<strong class="text-[#141416] text-[16px] font-[600]">{title}</strong>
						<p class="text-[#777E90] text-[14px] font-[400] mt-4">{content}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
