<script>
	let logo = '/logo.png';
	let qr_zalo = '/qr_zalo.png';
	let qr_line = '/qr_line.png';
	let qr_wechat = '/qr_wechat.png';
	let izalo = '/izalo.svg';
	let iline = '/iline.svg';
	let iwechat = '/iwechat.svg';
	let ifacebook = '/ifacebook.svg';
	let iyoutube = '/iyoutube.svg';
	let ismaller = '/smaller.svg';
</script>

<footer class="p-[20px] pt-[70px] bg-[#212163]">
	<div class="flex flex-col justify-between items-center md:flex-row gap-8 content">
		<!-- logo part -->
		<div class="flex flex-col gap-14 items-center md:items-start">
			<img src={logo} alt="" class="md:w-[123px]" />
			<p class="text-white font-[400] text-center md:text-left w-[165px] text-[14px]">
				Copyright © 2023 ENCO. <br />All Rights Reserved. <br />Developed by Tien Dung.
			</p>
		</div>
		<!-- information part -->
		<div class="mx-auto flex flex-col divide-y md:border-l-[1px]">
			{#each [{ label: 'Địa chỉ', content: 'Lô S1, tầng 10 tòa nhà VIWASEEN, số 48 phố Tố Hữu, phường Trung Văn, quận Nam Từ Liêm, thành phố Hà Nội', url: null }, { label: 'Hotline', content: '(84-4) 3562 7566', url: 'tel:035627566' }, { label: 'Email', content: 'info@enco-industry.com', url: 'mailto:info@enco-industry.com' }] as info}
				<a href={info.url}>
					<div class="px-6 py-5">
						<span class="text-white opacity-70 text-[14px] font-[400]">{info.label}</span>
						<p class="text-[14px] text-white font-[600] mt-1 max-w-[347px]">{info.content}</p>
					</div>
				</a>
			{/each}
		</div>
		<!-- social media part -->
		<div class="flex flex-col gap-8 md:border-l-[1px] md:pl-6">
			<div>
				<span class="text-white opacity-70 text-[14px] font-[400]">Quét mã QR để kết nối:</span>
				<div class="flex gap-8 mt-3">
					{#each [{ src: qr_zalo, alt: 'Zalo' }, { src: qr_line, alt: 'Line' }, { src: qr_wechat, alt: 'Wechat' }] as qr}
						<div class="flex flex-col gap-2 items-center">
							<img src={qr.src} alt={qr.alt} />
							<span class="text-[14px] text-white font-[600]">{qr.alt}</span>
						</div>
					{/each}
				</div>
			</div>
			<div>
				<span class="text-white opacity-70 text-[14px] font-[400]">Kết nối với chúng tôi:</span>
				<div class="flex flex-col lg:flex-row lg:items-center justify-between items-start">
					<div class="flex gap-4 mt-2">
						{#each [{ src: izalo, alt: 'Zalo' }, { src: iline, alt: 'Line' }, { src: iwechat, alt: 'Wechat' }, { src: ifacebook, alt: 'Facebook' }, { src: iyoutube, alt: 'Youtube' }] as icon}
							<a href="#!"><img src={icon.src} alt={icon.alt} /></a>
						{/each}
					</div>
					<button class=" bg-[#FB342E] rounded-[50%] flex mt-5 rotate-90">
						<a href="#top" class="p-2"><img src={ismaller} alt="" /></a>
					</button>
				</div>
			</div>
		</div>
	</div>
</footer>
