<script>
	let ads01 = '/ads01.svg';
	let ads02 = '/ads02.svg';
	let ads03 = '/ads03.svg';
	let ads04 = '/ads04.svg';
	let ad_poster = '/ads_poster.png';
	let ad_poster02 = '/ads_poster02.png';
	let openQuote = '/openQuote.svg';
	let closeQuote = '/closeQuote.svg';

	let ads = [
		{
			image: ads01,
			desc: 'Đội ngũ chuyên gia có trình độ cao, kinh nghiệm và kiến thức chuyên môn vững chắc.'
		},
		{
			image: ads02,
			desc: 'Cam kết mang đến cho khách hàng các giải pháp thiết kế và xây dựng hiệu quả, chất lượng và an toàn.'
		},
		{
			image: ads03,
			desc: 'Cung cấp các giải pháp kỹ thuật tiên tiến để giảm thiểu chi phí và tối ưu hóa hiệu quả cho khách hàng.'
		},
		{
			image: ads04,
			desc: 'Đảm bảo dự án được thực hiện đúng tiến độ và chất lượng'
		}
	];
</script>

<!-- part01 -->
<div
	class="lg:mb-[200px] lg:h-[550px] px-[20px] lg:px-[60px] pt-[66px] pb-[66px] lg:pb-0 bg-[#212163]"
>
	<div class="content">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:divide-x">
			{#each ads as ad}
				<div class="flex flex-col gap-10 items-center px-8">
					<div class="h-[100px] flex items-center">
						<img src={ad.image} alt="" class="max-w-[100%]" />
					</div>
					<p class="text-[13px] font-[600] text-white text-center">{ad.desc}</p>
				</div>
			{/each}
		</div>
		<div class="relative mt-[80px]">
			<div
				class="absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-[72px]"
			>
				<img src={openQuote} alt="" class="absolute top-0 left-0" />
				<img src={closeQuote} alt="" class="absolute bottom-0 right-0" />
				<p class="py-8 text-[14px] md:text-[20px] w-[80vw] md:w-[500px] font-[600] text-center">
					Mỗi con người đều có giá trị và tiềm năng riêng, và chúng tôi cam kết tạo ra một môi
					trường làm việc thân thiện, động viên sự phát triển cá nhân và đề cao tinh thần đồng đội.
				</p>
			</div>
			<img src={ad_poster} class="lg:mt-[150px]" alt="" />
		</div>
	</div>
</div>

<!-- part02 -->
<div class="px-[20px] lg:px-[60px] pt-[66px]">
	<div class="content grid grid-cols-1 md:grid-cols-2">
		<img src={ad_poster02} alt="" class="w-[100%]" />
		<div
			class="flex flex-col gap-4 items-center *:text-[14px] *:font-[400] *:text-[#353945] *:text-justify mt-8 *:w-[80%]"
		>
			<p>
				Ngoài ra, ENCO cũng đảm nhiệm vai trò quản lý dự án và giám sát thi công để đảm bảo dự án
				được thực hiện đúng tiến độ và chất lượng. Quá trình quản lý dự án của ENCO bao gồm lập kế
				hoạch, phân công công việc, giám sát tiến độ, kiểm tra chất lượng và đưa ra các giải pháp
				giải quyết vấn đề nếu cần thiết.
			</p>
			<p>
				Với kinh nghiệm và chuyên môn trong lĩnh vực tổng thầu Design & Build Xây dựng & Cơ điện,
				ENCO cam kết mang đến cho khách hàng các giải pháp thiết kế và xây dựng hiệu quả, chất lượng
				và an toàn.
			</p>
		</div>
	</div>
</div>
