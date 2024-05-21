<script>
	let lead01 = '/lead01.png';
	let lead02 = '/lead02.png';
	let lead03 = '/lead03.png';
	let lead04 = '/lead04.png';
	let lead05 = '/lead05.png';
	let lead06 = '/lead06.png';
	let ismaller = '/smaller.svg';
	import { register } from 'swiper/element';

	let clientWidth;
	$: numSlides = clientWidth / 300;

	register();

	//var
	let leaders = [
		{ image: lead01, name: 'Nguyễn Văn A', position: 'Giám đốc' },
		{ image: lead02, name: 'Nguyễn Văn B', position: 'Phó giám đốc' },
		{ image: lead03, name: 'Nguyễn Văn C', position: 'Trưởng phòng' },
		{ image: lead04, name: 'Nguyễn Văn D', position: 'Trưởng phòng' },
		{ image: lead05, name: 'Nguyễn Văn E', position: 'Trưởng phòng' },
		{ image: lead06, name: 'Nguyễn Văn F', position: 'Trưởng phòng' }
	];
</script>

<div
	id="about_eng"
	class="p-[20px] pb-0 mb-[268px] max-h-[450px] lg:px-[60px] pt-[66px] bg-[#212163]"
>
	<div class="content">
		<h2 class="flex flex-col gap-4 min-[300px]:flex-row text-[40px] text-white font-[600]">
			Đội ngũ <span class="text-[#FB342E]">lãnh đạo</span>
		</h2>
		<p class="text-white text-[14px] font-[400] max-w-[770px] mt-7 text-justify">
			Đội ngũ ENCO chính là tập hợp của những con người phù hợp nhất: đồng tâm hiệp lực trong mọi
			hoạt động, tinh thần trách nhiệm, cách ứng xử phù hợp. Từ đó, chúng tôi luôn tìm được hướng đi
			thống nhất và hiệu quả cho các yêu cầu xây dựng riêng biệt, để cùng chung sức tiến đến mục
			tiêu cuối cùng. Hơn cả một doanh nghiệp thông thường, ENCO tự hào là một tập thể gắn kết với
			tình cảm gia đình được duy trì nhờ văn hóa đồng lòng và trách nhiệm với khách hàng, công việc
			và đồng nghiệp.
		</p>
		<div>
			<div class="flex gap-4 mt-3 justify-end">
				<button
					on:click={() => {}}
					class="bg-[#777E90] hover:bg-[#FB342E] size-[44px] flex justify-center items-center rounded-[50%] transition-all"
				>
					<img src={ismaller} alt="" />
				</button>
				<button
					on:click={() => {}}
					class="bg-[#777E90] hover:bg-[#FB342E] size-[44px] flex justify-center items-center rounded-[50%] transition-all rotate-180"
				>
					<img src={ismaller} alt="" />
				</button>
			</div>
		</div>
		<div bind:clientWidth class="mt-8">
			<swiper-container loop={true} slides-per-view={numSlides}>
				{#each leaders as { image, name, position }}
					<swiper-slide>
						<div class="relative w-[270px] h-[330px]">
							<img src={image} alt="" class="object-cover" />
							<div
								class="absolute bottom-0 left-0 flex flex-col gap-[6px] py-6 pl-7 w-[90%] bg-[url(/leader_bg.svg)] bg-[100%] bg-cover text-white"
							>
								<strong class="text-5 font-[600]">{name}</strong>
								<span class="text-[14px] font-[400]">{position}</span>
							</div>
						</div>
					</swiper-slide>
				{/each}
			</swiper-container>
		</div>
	</div>
</div>
