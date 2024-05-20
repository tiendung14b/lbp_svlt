<script>
	import img01 from '$lib/assets/ability01.png';
	import img02 from '$lib/assets/ability02.png';
	import img03 from '$lib/assets/ability03.png';
	import { cn } from '$lib/modules/cn.js';
	let slideWidth;
	let currSlide = 0;
	import { register } from 'swiper/element';
	register();
</script>

<div
	id="about_cer"
	class="flex flex-col p-[20px] lg:px-[60px] py-[66px] bg-[url($lib/assets/ability.png)] bg-cover"
>
	<div class="content">
		<div class="flex flex-col items-center">
			<h2 class="text-[40px] font-[600] text-[#212163]">
				Năng lực <span class="text-[#FB342E]">thi công</span>
			</h2>
			<p class="mt-7 text-[14px] font-[400] max-w-[783px] text-center">
				ENCO đáp ứng được các tiêu chuẩn về hệ thống quản lý chất lượng, an toàn, sức khoẻ môi
				trường trong quá trình xây dựng. Khách hàng của ENCO có thể yên tâm về chất lượng sản phẩm
				và dịch vụ đáp ứng được các tiêu chuẩn quốc tế và đáp ứng các yêu cầu khắt khe của khách
				hàng.
			</p>
		</div>
		<div bind:clientWidth={slideWidth} class="mt-7">
			<swiper-container loop={true} class="slider" clasconcontroller-control=".slider">
				<swiper-slide>
					<div class="flex flex-col md:flex-row items-center gap-4 justify-between *:max-w-[253px]">
						<img src={img01} alt="" />
						<img src={img02} alt="" />
						<img src={img03} alt="" />
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="flex flex-col md:flex-row items-center gap-4 justify-between *:max-w-[253px]">
						<img src={img03} alt="" />
						<img src={img02} alt="" />
						<img src={img01} alt="" />
					</div>
				</swiper-slide>
			</swiper-container>
		</div>
	</div>
	<div class="flex mt-16 gap-2 mx-auto">
		<button
			on:click={() => {
				document.querySelector('.slider').swiper.slideTo(0);
				currSlide = 0;
			}}
			class={cn('w-[40px] h-[5px]', currSlide == 0 ? 'bg-[#FB342E]' : 'bg-[#0005]')}
		></button>
		<button
			on:click={() => {
				document.querySelector('.slider').swiper.slideTo(1);
				currSlide = 1;
			}}
			class={cn('w-[40px] h-[5px]', currSlide == 1 ? 'bg-[#FB342E]' : 'bg-[#0005]')}
		></button>
	</div>
</div>
