<script>
	import Header from '../../lib/components/Header.svelte';
	import Direction from '../../lib/components/Direction.svelte';
	import AboutIntro from '../../lib/components/About/AboutIntro.svelte';
	import AboutStats from '../../lib/components/About/AboutStats.svelte';
	import AboutMessage from '../../lib/components/About/AboutMessage.svelte';
	import MasterBuilder from '../../lib/components/About/MasterBuilder.svelte';
	import AboutMis from '../../lib/components/About/AboutMis.svelte';
	import AboutHis from '../../lib/components/About/AboutHis.svelte';
	import AboutLeader from '../../lib/components/About/AboutLeader.svelte';
	import AboutAbility from '../../lib/components/About/AboutAbility.svelte';
	import AboutPartner from '../../lib/components/About/AboutPartner.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	let about_poster = '/about_poster.png';
</script>

<div id="#top">
	<Header currTab={'about'} />
	<!-- main content -->
	<div class="relative min-[1180px]:mt-8">
		<img src={about_poster} class="h-[330px] w-[100vw] object-cover" alt="" />
		<h1
			class="absolute top-[50%] -translate-y-1/2 -translate-x-1/2 left-1/2 text-white text-[24px] sm:text-[32px] md:text-[48px] font-[600] capitalize"
		>
			Về chúng tôi
		</h1>
	</div>
	<!-- route -->
	<Direction
		dir={[
			{ url: '/home', name: 'Trang chủ' },
			{ url: '/about', name: 'Về chúng tôi' }
		]}
	/>
	<AboutIntro
		title={'Giới Thiệu'}
		content={'ENCO Industry là doanh nghiệp uy tín hàng đầu miền Bắc trong lĩnh vực xây dựng các công trình nhà xưởng công nghiệp có vốn đầu tư nước ngoài. Thành lập từ năm 2011, ENCO đã trải qua quá trình hoạt động và phát triển gần một thập kỷ với các dự án xây dựng hợp tác cùng Nhật Bản, Trung Quốc, Đài Loan,... Kết hợp với nhiều năm kinh nghiệm làm việc với các tổng thầu lớn của Nhật Bản trước đó, ENCO từ một nhà thầu phụ chuyên nghiệp đã vươn lên trở thành tổng thầu chính cho các dự án nhà xưởng công nghiệp lớn.'}
	/>
	<AboutStats />
	<AboutMessage />
	<MasterBuilder />
	<AboutHis />
	<AboutMis />
	<AboutLeader />
	<AboutAbility />
	<AboutPartner />
	<Footer />
</div>
