<script>
	import '../../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageMarker from '../../lib/components/PageMarker.svelte';
	import AboutIntro from '../../lib/components/About/AboutIntro.svelte';
	import AboutStats from '../../lib/components/About/AboutStats.svelte';
	import AboutPartner from '../../lib/components/About/AboutPartner.svelte';
	// import image

	import { onDestroy, onMount } from 'svelte';
	import { cn } from '$lib/modules/cn.js';
	import { register } from 'swiper/element/bundle';
	import { goto } from '$app/navigation';

	let act01 = '/activity01.png';
	let act02 = '/activity02.png';
	let careerImg = '/career.png';
	let careerDeco = '/career_deco.svg';
	let openQuote = '/openQuote.svg';
	let closeQuote = '/closeQuote.svg';
	let viewDetails = '/arrow01.svg';
	let iviewmore_white = '/iviewmore_white.png';
	let iviewmore = '/iviewmore.png';
	let iaddr = '/iaddr.svg';
	let hero00 = '/hero00.png';
	let hero01 = '/hero01.jpg';
	let hero02 = '/hero02.jpg';
	let aboutVid = '/aboutVid.gif';
	let ismaller = '/smaller.svg';

	register();
	////// var
	//when client scroll down at specific point, header will spread
	// this effect just appears in home, not another page
	// list of hero image
	let windowWidth;

	const heroImgs = [hero00, hero01, hero02];
	let currHeroImg = 0;
	let onChangeHeroImg;

	let projectSlider;
	let projects = [
		{ image: hero00, title: 'abcxyz', addr: 'KCN Thanh Liêm – Hà Nam' },
		{ image: hero01, title: 'sheet', addr: 'google docs excel' },
		{ image: hero02, title: 'sheep', addr: 'farm' }
	];

	let news = [
		{
			image: hero00,
			genre: 'Tin nội bộ',
			title: 'Enco tổ chức chương trình du lịch hè 2022',
			briefDesc:
				'Để tăng cường sự kết nối, giao lưu giữa các bộ phận, các phòng ban và các thành viên trong Công ty, hàng năm ENCO đều tổ chức các chương trình du lịch hè kết hợp team building cho các CBNV.',
			date: new Date('16/10/2022')
		},
		{
			image: hero01,
			genre: 'Tin nội bộ',
			title: 'lorem jalsdkfjaajs;dkfj',
			briefDesc:
				'Ngày 13/04/2022, ENCO cùng chủ đầu tư Công ty TNHH Công nghệ Bao bì xanh Hiệp Phú đã tổ chức Lễ khởi công dự án xây dựng nhà máy Công nghệ Bao bì xanh Hiệp Phú tại TP. Bắc Ninh.',
			date: new Date('16/10/2022')
		},
		{
			image: hero02,
			genre: 'Tin nội bộ',
			title: 'Lễ khởi công dự án nhà máy công nghệ bao bì xanh Hiệp Phú',
			briefDesc:
				'Ngày 13/04/2022, ENCO cùng chủ đầu tư Công ty TNHH Công nghệ Bao bì xanh Hiệp Phú đã tổ chức Lễ khởi công dự án xây dựng nhà máy Công nghệ Bao bì xanh Hiệp Phú tại TP. Bắc Ninh.',
			date: Date.now().toLocaleString()
		},
		{
			image: hero01,
			genre: 'Tin nội bộ',
			title: 'Lễ khởi công dự án nhà máy công nghệ bao bì xanh Hiệp Phú',
			briefDesc:
				'Ngày 13/04/2022, ENCO cùng chủ đầu tư Công ty TNHH Công nghệ Bao bì xanh Hiệp Phú đã tổ chức Lễ khởi công dự án xây dựng nhà máy Công nghệ Bao bì xanh Hiệp Phú tại TP. Bắc Ninh.',
			date: new Date('16/10/2022')
		}
	];

	let slideInterval = null;

	onMount(() => {
		slideInterval = setInterval(() => {
			document.querySelector('.hero_slide').swiper.slideNext();
			currHeroImg = (currHeroImg + 1) % heroImgs.length;
		}, 4000);
		projectSlider = document.querySelector('.project_slider').swiper;
	});

	onDestroy(() => {
		clearInterval(slideInterval);
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="relative overflow-x-hidden" id="#top">
	<Header isHome={true} currTab={'home'} />
	<!-- ========= hero section ========= -->
	<div>
		<div
			class="lg:px-[65px] min-[1250px]:px-[20px] xl:p-0 *:max-w[300px] *:px-8 relative -z-1 flex gap-[27px] max-w-[1170px] mx-auto h-[100vh] flex-col justify-center *:text-white"
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
				<a href="#!"><img src={iviewmore_white} alt="" /></a>
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
		<div
			id="heroCtn"
			class="absolute -z-10 left-0 top-0 flex w-[100vw] h-[100vh] overflow-x-auto no-scrollbar"
		>
			<swiper-container class="hero_slide" controller-control=".hero_slide">
				{#each heroImgs as image}
					<swiper-slide>
						<img src={image} alt="about company" class={`shrink-0 object-cover h-full w-full`} />
					</swiper-slide>
				{/each}
			</swiper-container>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => {
				document.querySelector('.hero_slide').swiper.slidePrev();
				currHeroImg = document.querySelector('.hero_slide').swiper.realIndex;
			}}
			class="cursor-pointer ml-2 lg:block hidden p-[0.5%] bg-slate-500 hover:bg-[#FB342E] transition-all absolute left-0 top-[50vh] -translate-y-[50%]"
		>
			<img src={ismaller} alt="" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => {
				document.querySelector('.hero_slide').swiper.slideNext();
				currHeroImg = document.querySelector('.hero_slide').swiper.realIndex;
			}}
			class="cursor-pointer lg:block hidden p-[0.5%] bg-slate-500 hover:bg-[#FB342E] transition-all absolute rotate-180 right-4 top-[50vh] -translate-y-[50%]"
		>
			<img src={ismaller} alt="" />
		</div>
	</div>
	<!-- === about section === -->
	<AboutIntro
		title={'Về Chúng Tôi'}
		isHome={true}
		content={'ENCO Industry là doanh nghiệp uy tín hàng đầu miền Bắc trong lĩnh vực xây dựng các công trình nhà xưởng công nghiệp có vốn đầu tư nước ngoài. Thành lập từ năm 2011, ENCO đã trải qua quá trình hoạt động và phát triển gần một thập kỷ với các dự án xây dựng hợp tác cùng Nhật Bản, Trung Quốc, Đài Loan,... Kết hợp với nhiều năm kinh nghiệm làm việc với các tổng thầu lớn của Nhật Bản trước đó, ENCO từ một nhà thầu phụ chuyên nghiệp đã vươn lên trở thành tổng thầu chính cho các dự án nhà xưởng công nghiệp lớn.'}
	/>
	<!-- === stats section ===== -->
	<AboutStats />
	<!-- === activities section -->
	<div class="flex flex-col gap-20 bg-[#212163] px-[20px] py-[66px]">
		<div class="content">
			<div class="flex flex-col gap-4 md:flex-row md:justify-between">
				<h2 class="text-[40px] font-[600] text-white">
					Lĩnh Vực <span class="text-[#FB342E]">Hoạt Động</span>
				</h2>
				<div class="flex items-center gap-6">
					<span class="text-[20px] font-[600] text-white">Xem thêm</span>
					<img
						class="cursor-pointer"
						src={iviewmore}
						alt="view more"
						on:click={() => {
							throw goto('activity');
						}}
					/>
				</div>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 *:h-[280px] sm:*:h-[370px] gap-7 mt-8">
				{#each [{ image: act01, desc: `Tổng thầu Design & Build Xây dựng & Cơ điện`, url: '/activity/#act01' }, { image: act02, desc: `Tổng thầu thi công xây dựng`, url: '/activity/#act02' }] as act, idx}
					<div
						class="relative bg-[#35368B] hover:bg-[#FB342E] cursor-pointer"
						on:click={() => {
							throw goto(act.url);
						}}
					>
						<div
							class="flex flex-col gap-5 absolute z-10 top-5 left-5 min-[500px]:top-12 min-[500px]:left-12"
						>
							<div class="flex items-center gap-2">
								<div class="w-[24px] h-1 bg-white"></div>
								<span class="text-[20px] font-[600] text-white">{'0' + (idx + 1) + '.'}</span>
							</div>
							<p
								class="text-[20px] sm:text-[26px] font-[600] underline text-white max-w-[200px] min-[500px]:max-w-[240px]"
							>
								{act.desc}
							</p>
						</div>
						<img src={act.image} alt="" class="absolute bottom-0 right-0 h-full" />
					</div>
				{/each}
			</div>
		</div>
	</div>
	<!-- === projects section ==== -->
	<div class="flex bg-[#F0F3F6] px-[20px] py-[66px]">
		<div class="grid gap-8 grid-cols-1 md:grid-cols-2 content">
			<!-- processing project -->
			<div class="relative">
				<!-- click to view next image -->
				<div class="opacity-[0] md:opacity-[1]">
					<button
						on:click={() => {
							projectSlider.slidePrev();
						}}
						class="absolute z-30 top-[50%] -translate-y-[50%] hover:bg-[#FB342E] bg-slate-500 p-2"
					>
						<img src={ismaller} alt="" />
					</button>
					<button
						on:click={() => {
							projectSlider.slideNext();
						}}
						class="absolute z-30 top-[50%] -translate-y-[50%] right-0 hover:bg-[#FB342E] bg-slate-500 p-2 rotate-180"
					>
						<img src={ismaller} alt="" />
					</button>
				</div>
				<div class="flex flex-col lg:flex-row gap-3 justify-between">
					<div class="flex flex-col *:text-[32px] *:font-[600]">
						<strong class="text-[#212163]">Dự án</strong>
						<strong class="text-[#FB342E]">Đang thực hiện</strong>
					</div>
					<div class="flex items-center gap-6">
						<span class="text-[20px] font-[600] text-[#777E90]">Xem thêm</span>
						<img src={iviewmore} alt="view more" class="cursor-pointer" />
					</div>
				</div>
				<swiper-container
					loop="true"
					controller-control=".project_slider"
					class="mt-8 project_slider"
				>
					{#each projects as project}
						<swiper-slide>
							<a href="#!">
								<div class=" bg-white shadow-sm">
									<div class="relative hover:*:opacity-[1]">
										<img src={project.image} alt="hello" class=" aspect-video object-cover" />
									</div>
									<div class="flex flex-col gap-[11px] px-7 py-8">
										<strong class="text-[32px] font-[600]">{project.title}</strong>
										<div class="flex items-center gap-2">
											<img src={iaddr} alt="" />
											<p class="text-[20px] font-[400] text-[#353945]">{project.addr}</p>
										</div>
									</div>
								</div>
							</a>
						</swiper-slide>
					{/each}
				</swiper-container>
			</div>
			<!-- finished project -->
			<div class="">
				<div class="flex flex-col lg:flex-row gap-3 justify-between">
					<div class="flex flex-col *:text-[32px] *:font-[600]">
						<strong class="text-[#212163]">Dự án</strong>
						<strong class="text-[#FB342E]">Đã hoàn thành</strong>
					</div>
					<div class="flex items-center gap-6">
						<span class="text-[20px] font-[600] text-[#777E90]">Xem thêm</span>
						<a href="#!"><img src={iviewmore} alt="view more" /></a>
					</div>
				</div>
				<div class="mt-8 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
					{#each [{ image: hero00, title: 'abcxyz', addr: 'lorem lorem lorem' }, { image: hero01, title: 'sheet', addr: 'google docs excel' }, { image: hero02, title: 'sheep', addr: 'farm' }, { image: hero01, title: 'company', addr: 'companycompanycompanycom' }] as project}
						<a href="#!">
							<div class=" bg-white shadow-sm">
								<div class="relative hover:*:opacity-[1]">
									<img src={project.image} alt="hello" class=" aspect-video object-cover" />
								</div>
								<div class="flex flex-col gap-[11px] px-5 py-[7px]">
									<strong class="text-[16px] font-[600]">{project.title}</strong>
									<div class="flex items-center gap-2">
										<img src={iaddr} alt="" />
										<p class="text-[12px] font-[400] text-[#353945]">{project.addr}</p>
									</div>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<!-- === news section ==== -->
	<div class="p-[20px] lg:px-[60px] py-[66px]">
		<div class="content">
			<div class="flex flex-col sm:flex-row gap-3 justify-between">
				<div class="*:text-[32px] *:font-[600]">
					<strong class="text-[#212163]">Tin tức <span class="text-[#FB342E]">nổi bật</span></strong
					>
				</div>
				<div class="flex items-center gap-6">
					<span class="text-[20px] font-[600] text-[#777E90]">Xem thêm</span>
					<a href="#!"><img src={iviewmore} alt="view more" /></a>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 lg:grid-cols-4 mt-8">
				{#each news as newsItem, idx}
					<a href="#!">
						<div
							class={cn(
								'md:pt-4 lg:border-t-[1px]',
								idx != 0 && 'md:px-4',
								idx == 0 && 'md:pr-4',
								idx == news.length - 1 && 'md:pb-0 md:pr-0',
								idx < news.length - 1 && 'lg:border-r-[1px]'
							)}
						>
							<div class="relative">
								<img
									src={newsItem.image}
									alt="news"
									class="md:h-[200px] w-[100%] lg:h-[170px] object-cover"
								/>
								<div
									class="absolute top-0 left-0 border-r-[21px] border-r-transparent border-t-[21px] border-t-white"
								></div>
								<div
									class="absolute bottom-0 right-0 border-t-[21px] border-t-transparent border-r-[21px] border-r-white"
								></div>
							</div>
							<div class="flex flex-col gap-4 py-2 px-2 md:max-w-[350px]">
								<span class="text-[#FB342E] text-[14px] font-[600]">{newsItem.genre}</span>
								<strong class="text-[#141416] text-[20px] font-[600]">{newsItem.title}</strong>
								<p class="text-[14px] font-[400]">{newsItem.briefDesc}</p>
								<div class="flex justify-between items-center">
									<span class="text-[14px] font-[400] text-[#777E90]">16 / 10 / 2022</span>
									<img src={viewDetails} alt="view details" />
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
	<!-- === career section === -->
	<div class="p-[20px] lg:px-[60px] py-[66px] bg-[#F0F3F6]">
		<div class="content">
			<div class="flex flex-col sm:flex-row gap-3 justify-between">
				<div class="*:text-[32px] *:font-[600]">
					<strong class="text-[#212163]"
						>Cơ hội <span class="text-[#FB342E]">nghề nghiệp</span></strong
					>
				</div>
				<div class="flex items-center gap-6">
					<span class="text-[20px] font-[600] text-[#777E90]">Xem thêm</span>
					<a href="#!"><img src={iviewmore} alt="view more" /></a>
				</div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-20 mt-8 justify-center">
				<div class="flex items-center justify-center md:justify-start">
					<img src={careerImg} alt="" />
				</div>
				<div class="flex flex-col gap-[112px]">
					<div class="relative z-20">
						<img src={openQuote} alt="" class="absolute top-0 left-0" />
						<img src={closeQuote} alt="" class="absolute bottom-0 right-0" />
						<img
							src={careerDeco}
							alt=""
							class="absolute -z-10 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"
						/>
						<p class="py-8 text-[28px] font-[600] text-center">
							Mỗi con người đều có giá trị và tiềm năng riêng, và chúng tôi cam kết tạo ra một môi
							trường làm việc thân thiện, động viên sự phát triển cá nhân và đề cao tinh thần đồng
							đội.
						</p>
					</div>
					<div class="flex flex-col lg:flex-row gap-8 justify-center items-center">
						{#each [1, 2] as item, idx}
							<a href="#!">
								<div class="flex flex-col gap-4 p-4 md:max-w-[350px] bg-white">
									<span class="text-[#FB342E] text-[14px] font-[600]">Chuyên viên / Nhân viên</span>
									<strong class="text-[#141416] text-[20px] font-[600]"
										>[Tuyển dụng 2023] Nhân viên kinh doanh làm việc tại Hà Nội</strong
									>
									<div class="flex justify-between items-center">
										<span class="text-[14px] font-[400] text-[#777E90]">16 / 10 / 2022</span>
										<img src={viewDetails} alt="view details" />
									</div>
								</div>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- === client section === -->
	<AboutPartner />
	<!-- footer -->
	<Footer />
</div>
