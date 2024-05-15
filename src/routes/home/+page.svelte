<script>
	import '../../app.css';
	import Header from '$lib/components/Header.svelte';
	import PageMarker from '../../lib/components/PageMarker.svelte';
	// import image
	import iviewmore_white from '$lib/assets/iviewmore_white.png';
	import iviewmore from '$lib/assets/iviewmore.png';
	import iaddr from '$lib/assets/iaddr.svg';
	import hero00 from '$lib/assets/hero00.png';
	import hero01 from '$lib/assets/hero01.jpg';
	import hero02 from '$lib/assets/hero02.jpg';
	import aboutVid from '$lib/assets/aboutVid.gif';
	import ismaller from '$lib/assets/smaller.svg';
	import { onDestroy, onMount } from 'svelte';
	import stat01 from '$lib/assets/stat01.png';
	import stat02 from '$lib/assets/stat02.png';
	import stat03 from '$lib/assets/stat03.png';
	import stat04 from '$lib/assets/stat04.png';
	import act01 from '$lib/assets/activity01.png';
	import act02 from '$lib/assets/activity02.png';
	import careerImg from '$lib/assets/career.png';
	import careerDeco from '$lib/assets/career_deco.svg';
	import openQuote from '$lib/assets/openQuote.svg';
	import closeQuote from '$lib/assets/closeQuote.svg';
	import viewDetails from '$lib/assets/arrow01.svg';
	import client01 from '$lib/assets/client01.png';
	import client02 from '$lib/assets/client02.png';
	import client03 from '$lib/assets/client03.png';
	import client04 from '$lib/assets/client04.png';
	import client05 from '$lib/assets/client05.png';
	import client06 from '$lib/assets/client06.png';
	import client07 from '$lib/assets/client07.png';
	import client08 from '$lib/assets/client08.png';
	import client09 from '$lib/assets/client09.png';
	import { cn } from '$lib/modules/cn.js';
	import { register } from 'swiper/element/bundle';

	register();
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

	let projectSlider;
	let projects = [
		{ image: hero00, title: 'shit', addr: 'i dont care' },
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
			image: aboutVid,
			genre: 'Tin nội bộ',
			title: 'Lễ khởi công dự án nhà máy công nghệ bao bì xanh Hiệp Phú',
			briefDesc:
				'Ngày 13/04/2022, ENCO cùng chủ đầu tư Công ty TNHH Công nghệ Bao bì xanh Hiệp Phú đã tổ chức Lễ khởi công dự án xây dựng nhà máy Công nghệ Bao bì xanh Hiệp Phú tại TP. Bắc Ninh.',
			date: new Date('16/10/2022')
		}
	];

	let clients = [
		client01,
		client02,
		client03,
		client04,
		client05,
		client06,
		client07,
		client08,
		client09
	];

	onMount(() => {
		onChangeHeroImg = () => {
			document.querySelector('#heroCtn').scroll({ left: currHeroImg * windowWidth });
		};
		projectSlider = document.querySelector('.project_slider').swiper;
	});
	onDestroy(() => {
		clearInterval(intervalHeroImg);
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="relative overflow-x-hidden">
	<Header isHome={true} />
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
			class="ml-2 lg:block hidden p-[0.5%] bg-slate-500 hover:bg-[#FB342E] transition-all absolute left-0 top-[50vh] -translate-y-[50%]"
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
		class="box-border grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 *:h-[505px] min-[500px]:*:h-[405px]"
	>
		<img src={aboutVid} alt="about vid" class="object-cover w-[100vw]" />
		<div
			class="flex flex-col justify-between px-[20px] lg:px-[60px] min-[1200px]:px-[100px] py-[46px] bg-[url($lib/assets/aboutIsu.png)] bg-cover"
		>
			<h2 class="text-[#212163] text-[32px] font-[600]">Về chúng tôi</h2>
			<p class="max-w-[720px] text-[14px] font-[400] text-[#353945] text-justify">
				ENCO Industry là doanh nghiệp uy tín hàng đầu miền Bắc trong lĩnh vực xây dựng các công
				trình nhà xưởng công nghiệp có vốn đầu tư nước ngoài. Thành lập từ năm 2011, ENCO đã trải
				qua quá trình hoạt động và phát triển gần một thập kỷ với các dự án xây dựng hợp tác cùng
				Nhật Bản, Trung Quốc, Đài Loan,... Kết hợp với nhiều năm kinh nghiệm làm việc với các tổng
				thầu lớn của Nhật Bản trước đó, ENCO từ một nhà thầu phụ chuyên nghiệp đã vươn lên trở thành
				tổng thầu chính cho các dự án nhà xưởng công nghiệp lớn.
			</p>
			<div
				class="max-w-[500px] flex flex-col gap-2 text-center min-[500px]:flex-row justify-between *:bg-[#35368B] *:text-white *:p-4 min-[500px]:*:py-5 min-[500px]:*:px-10 *:text-[16px] *:font-[600] *:uppercase"
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
	<div class="flex flex-col gap-20 bg-[#212163] px-[20px] py-[66px]">
		<div class="content">
			<div class="flex flex-col gap-4 md:flex-row md:justify-between">
				<h2 class="text-[40px] font-[600] text-white">
					Lĩnh Vực <span class="text-[#FB342E]">Hoạt Động</span>
				</h2>
				<div class="flex items-center gap-6">
					<span class="text-[20px] font-[600] text-white">Xem thêm</span>
					<img src={iviewmore} alt="view more" />
				</div>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 *:h-[370px] gap-7 mt-8">
				{#each [{ image: act01, desc: `Tổng thầu Design & Build Xây dựng & Cơ điện` }, { image: act02, desc: `Tổng thầu thi công xây dựng` }] as act, idx}
					<div class="relative bg-[#35368B] hover:bg-[#FB342E]">
						<div
							class="flex flex-col gap-5 absolute z-10 top-5 left-5 min-[500px]:top-12 min-[500px]:left-12"
						>
							<div class="flex items-center gap-2">
								<div class="w-[24px] h-1 bg-white"></div>
								<span class="text-[20px] font-[600] text-white">{'0' + (idx + 1) + '.'}</span>
							</div>
							<p
								class="text-[26px] min-[500px]:text-[26px] font-[600] underline text-white max-w-[200px] min-[500px]:max-w-[240px]"
							>
								{act.desc}
							</p>
						</div>
						<img src={act.image} alt="" class="absolute h-[60%] bottom-0 right-0 md:h-[100%]" />
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
						<img src={iviewmore} alt="view more" />
					</div>
				</div>
				<swiper-container
					loop="true"
					controller-control=".project_slider"
					class="mt-8 project_slider"
				>
					{#each projects as project}
						<swiper-slide>
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
						<img src={iviewmore} alt="view more" />
					</div>
				</div>
				<div class="mt-8 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
					{#each [{ image: hero00, title: 'shit', addr: 'i dont care' }, { image: hero01, title: 'sheet', addr: 'google docs excel' }, { image: hero02, title: 'sheep', addr: 'farm' }, { image: aboutVid, title: 'tired', addr: 'life' }] as project}
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
					<img src={iviewmore} alt="view more" />
				</div>
			</div>
			<div class="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 lg:grid-cols-4 mt-8">
				{#each news as newsItem, idx}
					<div
						class={cn(
							'md:p-[16px] lg:border-t-[1px]',
							idx < news.length - 1 && 'lg:border-r-[1px]'
						)}
					>
						<div class="relative">
							<img src={newsItem.image} alt="news" class="md:h-[200px] lg:h-[170px] object-cover" />
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
					<img src={iviewmore} alt="view more" />
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
							<div class="flex flex-col gap-4 py-2 px-2 md:max-w-[350px] bg-white">
								<span class="text-[#FB342E] text-[14px] font-[600]">Chuyên viên / Nhân viên</span>
								<strong class="text-[#141416] text-[20px] font-[600]"
									>[Tuyển dụng 2023] Nhân viên kinh doanh làm việc tại Hà Nội</strong
								>
								<div class="flex justify-between items-center">
									<span class="text-[14px] font-[400] text-[#777E90]">16 / 10 / 2022</span>
									<img src={viewDetails} alt="view details" />
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- === client section === -->
	<div class=" p-[20px] lg:px-[60px] py-[66px]">
		<div class="content grid grid-cols-1 md:grid-cols-2 gap-28">
			<!-- khach hang -->
			<div>
				<div class="flex flex-col min-[350px]:flex-row gap-2 justify-between">
					<h2 class="text-[32px] font-[600] text-[#212163]">Khách hàng</h2>
					<div class="flex gap-4">
						<button
							on:click={() => {
								document.querySelector('.client_slider').swiper.slidePrev();
							}}
							class="bg-[#777E90] hover:bg-[#FB342E] size-[44px] flex justify-center items-center rounded-[50%] transition-all"
						>
							<img src={ismaller} alt="" />
						</button>
						<button
							on:click={() => {
								document.querySelector('.client_slider').swiper.slideNext();
							}}
							class="bg-[#777E90] hover:bg-[#FB342E] size-[44px] flex justify-center items-center rounded-[50%] transition-all rotate-180"
						>
							<img src={ismaller} alt="" />
						</button>
					</div>
				</div>
				<div>
					<swiper-container
						loop="true"
						controller-control=".client_slider"
						class="mt-8 client_slider"
					>
						{#each Array.from(Array(Math.ceil(clients.length / 6)).keys()) as idx}
							<swiper-slide>
								<div class="grid grid-cols-2 sm:grid-cols-3">
									{#each clients.slice(idx, idx + 6) as client}
										<div class="bg-white shadow-sm flex justify-center border-[1px] p-2">
											<img src={client} alt="client" class="aspect-video object-cover" />
										</div>
									{/each}
								</div>
							</swiper-slide>
						{/each}
					</swiper-container>
				</div>
			</div>
			<!-- doi tac -->
			<div>
				<div>
					<div class="flex flex-col min-[350px]:flex-row gap-2 justify-between">
						<h2 class="text-[32px] font-[600] text-[#212163]">Đối tác</h2>
						<div class="flex gap-4">
							<button
								on:click={() => {
									document.querySelector('.comp_slider').swiper.slidePrev();
								}}
								class="bg-[#777E90] hover:bg-[#FB342E] size-[44px] flex justify-center items-center rounded-[50%] transition-all"
							>
								<img src={ismaller} alt="" />
							</button>
							<button
								on:click={() => {
									document.querySelector('.comp_slider').swiper.slideNext();
								}}
								class="bg-[#777E90] hover:bg-[#FB342E] size-[44px] flex justify-center items-center rounded-[50%] transition-all rotate-180"
							>
								<img src={ismaller} alt="" />
							</button>
						</div>
					</div>
					<div>
						<swiper-container
							loop="true"
							controller-control=".comp_slider"
							class="mt-8 comp_slider"
						>
							{#each Array.from(Array(Math.ceil(clients.length / 6)).keys()) as idx}
								<swiper-slide>
									<div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
										{#each clients.slice(idx, idx + 6) as client}
											<div class="bg-white shadow-sm flex justify-center border-[1px] p-2">
												<img src={client} alt="client" class="aspect-video object-cover" />
											</div>
										{/each}
									</div>
								</swiper-slide>
							{/each}
						</swiper-container>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- footer -->
</div>
