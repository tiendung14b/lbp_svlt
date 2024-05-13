<script>
	import '../../app.css';
	import Header from '$lib/components/Header.svelte';
	import PageMarker from '../../lib/components/PageMarker.svelte';
	// import image
	import iviewmore_white from '$lib/assets/iviewmore_white.png';
	import iviewmore from '$lib/assets/iviewmore.png';
	import hero00 from '$lib/assets/hero00.png';
	import hero01 from '$lib/assets/hero01.jpg';
	import hero02 from '$lib/assets/hero02.jpg';
	import aboutVid from '$lib/assets/aboutVid.gif';
	import ismaller from '$lib/assets/smaller.svg';
	import { onDestroy, onMount, tick } from 'svelte';
	import stat01 from '$lib/assets/stat01.png';
	import stat02 from '$lib/assets/stat02.png';
	import stat03 from '$lib/assets/stat03.png';
	import stat04 from '$lib/assets/stat04.png';
	import act01 from '$lib/assets/activity01.png';
	import act02 from '$lib/assets/activity02.png';
	import { cn } from '$lib/modules/cn.js';
	////// var
	//when client scroll down at specific point, header will spread
	// this effect just appears in home, not another page
	// list of hero image
	let windowWidth;
	const heroImgs = [hero00, hero01, hero02];

	let currHeroImg = 0;
	let intervalHeroImg = setInterval(() => {
		currHeroImg = (currHeroImg + 1) % heroImgs.length;
		if (onChangeHeroImg) onChangeHeroImg();
	}, 8000);
	let onChangeHeroImg;

	let projects = [{ image: hero00, title: 'shit', addr: 'i dont care' }];

	onMount(() => {
		onChangeHeroImg = () => {
			document.querySelector('#heroCtn').scroll({ left: currHeroImg * windowWidth });
		};
	});
	onDestroy(() => {
		clearInterval(intervalHeroImg);
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="relative">
	<Header isHome={true} />
	<!-- ========= hero section ========= -->
	<div>
		<div
			class="*:max-w[300px] *:p-8 relative -z-1 flex gap-[27px] max-w-[1170px] mx-auto h-[100vh] flex-col justify-center *:text-white"
		>
			<h1 class=" text-[32px] lg:p-0 lg:w-[549px] font-[600] text-white">
				Doanh nghiệp uy tín hàng đầu trong lĩnh vực xây dựng nhà xưởng công nghiệp tại Việt Nam
			</h1>
			<p class="text-[20px] text-[400] lg:p-0 lg:w-[563px]">
				ENCO Industry là doanh nghiệp uy tín hàng đầu miền Bắc trong lĩnh vực xây dựng các công
				trình nhà xưởng công nghiệp có vốn đầu tư nước ngoài
			</p>
			<div class="flex items-center gap-6 lg:p-0 lg:w-[563px]">
				<strong class="text-[20px] font-[600]">Xem thêm</strong>
				<img src={iviewmore_white} alt="" />
			</div>
			<div class="lg:flex hidden absolute bottom-[10%] w-[100%]">
				<PageMarker
					bind:intervalSlide={currHeroImg}
					bind:numPage={currHeroImg}
					onChange={onChangeHeroImg}
					len={heroImgs.length}
				/>
			</div>
		</div>
		<!-- this is bunch of images to slide hihih -->
		<div
			id="heroCtn"
			class="absolute -z-10 left-0 top-0 flex w-[100vw] h-[100vh] overflow-x-auto no-scrollbar"
		>
			{#each heroImgs as image}
				<img src={image} alt="about company" class="shrink-0 object-cover w-[100%]" />
			{/each}
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => {
				if (currHeroImg == 0) currHeroImg = heroImgs.length;
				currHeroImg = (currHeroImg - 1) % heroImgs.length;
				onChangeHeroImg();
			}}
			class="lg:block hidden p-[0.5%] bg-slate-500 hover:bg-[#FB342E] transition-all absolute left-0 top-[50vh] -translate-y-[50%]"
		>
			<img src={ismaller} alt="" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => {
				currHeroImg = (currHeroImg + 1) % heroImgs.length;
				onChangeHeroImg();
			}}
			class="lg:block hidden p-[0.5%] bg-slate-500 hover:bg-[#FB342E] transition-all absolute rotate-180 right-4 top-[50vh] -translate-y-[50%]"
		>
			<img src={ismaller} alt="" />
		</div>
	</div>
	<!-- === about section === -->
	<div
		class="box-border grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 *:h-[505px] min-[400px]:*:h-[405px]"
	>
		<img src={aboutVid} alt="about vid" class="object-cover w-[100vw]" />
		<div
			class="flex flex-col justify-between px-[60px] lg:px-[60px] min-[1200px]:px-[100px] py-[46px] bg-[url($lib/assets/aboutIsu.png)]"
		>
			<h2 class="text-[#212163] text-[32px] font-[600]">Về chúng tôi</h2>
			<p class="text-[14px] font-[400] text-[#353945] text-justify">
				ENCO Industry là doanh nghiệp uy tín hàng đầu miền Bắc trong lĩnh vực xây dựng các công
				trình nhà xưởng công nghiệp có vốn đầu tư nước ngoài. Thành lập từ năm 2011, ENCO đã trải
				qua quá trình hoạt động và phát triển gần một thập kỷ với các dự án xây dựng hợp tác cùng
				Nhật Bản, Trung Quốc, Đài Loan,... Kết hợp với nhiều năm kinh nghiệm làm việc với các tổng
				thầu lớn của Nhật Bản trước đó, ENCO từ một nhà thầu phụ chuyên nghiệp đã vươn lên trở thành
				tổng thầu chính cho các dự án nhà xưởng công nghiệp lớn.
			</p>
			<div
				class="flex flex-col gap-2 text-center min-[500px]:flex-row justify-between *:bg-[#35368B] *:text-white *:p-4 min-[500px]:*:py-5 min-[500px]:*:px-10 *:text-[16px] *:font-[600] *:uppercase"
			>
				<button class="hover:bg-[#FB342E]">TẢI PROFILE</button>
				<button class="hover:bg-[#FB342E]">TÌM HIỂU THÊM</button>
			</div>
		</div>
	</div>
	<!-- === stats section ===== -->
	<div class="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4">
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
	<!-- === activities section -->
	<div
		class="flex flex-col gap-20 bg-[#212163] px-[60px] lg:px-[60px] min-[1200px]:px-[113px] py-[66px]"
	>
		<div class="flex flex-col gap-4 md:flex-row md:justify-between">
			<h2 class="text-[40px] font-[600] text-white">
				Lĩnh Vực <span class="text-[#FB342E]">Hoạt Động</span>
			</h2>
			<div class="flex items-center gap-6">
				<span class="text-[20px] font-[600] text-white">Xem thêm</span>
				<img src={iviewmore} alt="view more" />
			</div>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-2 *:h-[370px] gap-7">
			{#each [{ image: act01, desc: `Tổng thầu Design & Build Xây dựng & Cơ điện` }, { image: act02, desc: `Tổng thầu thi công xây dựng` }] as act, idx}
				<div class="relative bg-[#35368B] hover:bg-[#FB342E]">
					<div class="absolute z-10 top-5 left-5 min-[500px]:top-12 min-[500px]:left-12">
						<div class="flex items-center gap-2">
							<div class="w-[24px] h-1 bg-white"></div>
							<span class="text-[20px] font-[600] text-white">{'0' + (idx + 1) + '.'}</span>
						</div>
						<p
							class="text-[20px] min-[500px]:text-[26px] font-[600] underline text-white max-w-[200px] min-[500px]:max-w-[247px]"
						>
							{act.desc}
						</p>
					</div>
					<img src={act.image} alt="" class="absolute h-[100%] right-0" />
				</div>
			{/each}
		</div>
	</div>
	<!-- === projects section ==== -->
	<div>
		<!-- processing project -->
		<div>
			<div>
				<div>
					<strong>Dự án</strong>
					<strong>Đang thực hiện</strong>
				</div>
				<div>
					<span>Xem thêm</span>
					<img src={iviewmore} alt="view more" />
				</div>
			</div>
			<div>
				<img src="" alt="" />
			</div>
		</div>
		<!-- finished project -->

		<div></div>
	</div>
</div>
