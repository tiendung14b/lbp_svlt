<script>
	let ismaller = '/smaller.svg';
	let clients = [
		'/client01.png',
		'/client02.png',
		'/client03.png',
		'/client04.png',
		'/client05.png',
		'/client06.png',
		'/client07.png',
		'/client08.png',
		'/client09.png'
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
