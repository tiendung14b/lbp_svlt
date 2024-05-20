<script>
	import client01 from '$lib/assets/client01.png';
	import client02 from '$lib/assets/client02.png';
	import client03 from '$lib/assets/client03.png';
	import client04 from '$lib/assets/client04.png';
	import client05 from '$lib/assets/client05.png';
	import client06 from '$lib/assets/client06.png';
	import client07 from '$lib/assets/client07.png';
	import client08 from '$lib/assets/client08.png';
	import client09 from '$lib/assets/client09.png';
	import ismaller from '$lib/assets/smaller.svg';
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
</script>

<div id="about_par" class="p-[20px] lg:px-[60px] py-[66px]">
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
					<swiper-container loop="true" controller-control=".comp_slider" class="mt-8 comp_slider">
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
