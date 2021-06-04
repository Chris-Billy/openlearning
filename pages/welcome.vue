<template>
	<div
		class="
			example
			h-full
			w-screen
			overflow-y-scroll overflow-x-hidden
			flex flex-col
		"
	>
		<div class="img-bg h-1/4 w-full">
			<div class="top_bar w-full h-1/5 flex flex-row justify-around">
				<div class="logo_part h-full w-1/3 flex items-center ml-3">
					<svg
						width="72"
						height="83"
						viewBox="0 0 72 83"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M54.584 37.8688C57.8724 41.5546 60.0078 46.1129 60.7289 50.9856C61.4499 55.8583 60.7253 60.8342 58.6438 65.3042C56.5622 69.7742 53.214 73.5444 49.0088 76.1535C44.8037 78.7626 39.924 80.0974 34.9671 79.9945C30.0102 79.8915 25.1909 78.3554 21.0992 75.574C17.0075 72.7927 13.8208 68.8867 11.9291 64.3342C10.0374 59.7817 9.52272 54.7801 10.4481 49.9416C11.3735 45.1031 13.6988 40.6375 17.1394 37.0913C17.4853 36.7377 54.2507 37.5001 54.584 37.8688Z"
							stroke="white"
							stroke-width="5"
						/>
						<path
							d="M15.0002 36.9417V24.7715C15.0005 24.6479 15.0273 24.5262 15.0784 24.4166C15.1294 24.3069 15.2032 24.2126 15.2936 24.1413C15.384 24.0701 15.4883 24.0242 15.5979 24.0073C15.7074 23.9904 15.819 24.0031 15.9233 24.0442L34.4078 31.727C34.4814 31.7588 34.5596 31.7754 34.6386 31.776H38.0309C38.1094 31.7757 38.1874 31.7609 38.2616 31.7322L56.0769 24.6735C56.1812 24.6323 56.2928 24.6196 56.4023 24.6365C56.5119 24.6534 56.6162 24.6994 56.7066 24.7706C56.797 24.8418 56.8708 24.9362 56.9218 25.0458C56.9729 25.1555 56.9997 25.2772 57 25.4008V36.9443C56.9997 37.0842 56.9654 37.2215 56.9008 37.3414C56.8361 37.4613 56.7436 37.5593 56.6331 37.6251C40.2901 47.2859 22.5832 41.7876 15.3602 37.6251C15.2491 37.5601 15.1565 37.4617 15.0928 37.3409C15.0292 37.2201 14.9971 37.0818 15.0002 36.9417Z"
							fill="white"
						/>
						<path
							d="M0.914466 14.8244C0.643206 14.7234 0.409921 14.5421 0.246324 14.3052C0.0827266 14.0682 -0.00324578 13.7871 9.37285e-05 13.5001C0.00343324 13.213 0.0959228 12.9339 0.264989 12.7008C0.434055 12.4676 0.671496 12.2917 0.945034 12.197L36.0036 0.079929C36.3079 -0.026643 36.6398 -0.026643 36.9441 0.079929L71.0715 12.2109C71.3406 12.3079 71.5735 12.4837 71.7394 12.715C71.9052 12.9462 71.996 13.222 71.9999 13.5056C72.0037 13.7892 71.9203 14.0673 71.7608 14.3029C71.6013 14.5384 71.3732 14.7203 71.1068 14.8244L36.977 27.9081C36.653 28.0306 36.2947 28.0306 35.9707 27.9081L0.914466 14.8244Z"
							fill="white"
						/>
						<path
							d="M67 34.3749C67 34.1537 67.0582 33.9359 67.1696 33.7398C67.281 33.5437 67.4424 33.3752 67.64 33.2486C67.8647 33.1043 68.1283 33.0194 68.402 33.0029C68.6757 32.9865 68.9491 33.0392 69.1924 33.1553C69.4357 33.2715 69.6397 33.4465 69.782 33.6616C69.9244 33.8766 69.9998 34.1233 70 34.3749V60.6242C70 60.9891 69.842 61.339 69.5607 61.5971C69.2794 61.8551 68.8978 62 68.5 62C68.1022 62 67.7206 61.8551 67.4393 61.5971C67.158 61.339 67 60.9891 67 60.6242V34.3749Z"
							fill="#FFD600"
						/>
						<path d="M67 24.0353L70 22V54H67V24.0353Z" fill="#FFD600" />
						<path
							d="M68.5 49C70.433 49 72 47.433 72 45.5C72 43.567 70.433 42 68.5 42C66.567 42 65 43.567 65 45.5C65 47.433 66.567 49 68.5 49Z"
							fill="#FFD600"
						/>
					</svg>
					<p class="font-semibold text-white text-3xl">OpenLearning</p>
				</div>
				<div class="login_search h-full w-1/3 flex items-center justify-center">
					<div
						class="
							search_btn
							rounded-full
							bg-white
							h-10
							w-10
							flex
							justify-center
							items-center
						"
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21 21.2882L15.9706 16.0074M18.5608 9.78039C18.5608 14.6297 14.6297 18.5608 9.78038 18.5608C4.93111 18.5608 1 14.6297 1 9.78039C1 4.93111 4.93111 1 9.78038 1C14.6297 1 18.5608 4.93111 18.5608 9.78039Z"
								stroke="#020B2A"
								stroke-width="2"
							/>
						</svg>
					</div>
					<div
						class="
							bg-white
							h-10
							w-60
							rounded-full
							ml-5
							flex
							justify-center
							items-center
						"
					>
						<p class="font-semibold">Connectez-vous !</p>
					</div>
				</div>
			</div>
			<div class="punchline h-4/5 w-full flex">
				<div class="left w-1/2 h-full flex flex-col justify-evenly ml-48">
					<p class="font-semibold text-6xl text-white w-1/2">
						L’accès au savoir n’aura jamais été aussi simple.
					</p>
					<p class="font-semibold text-xl text-white w-1/2">
						N’attendez plus pour enrichir votre savoir à l’aide de nos cours
						publiés par les plus grands experts.
					</p>
					<div
						class="
							h-24
							w-64
							rounded-lg
							bg-white
							flex
							items-center
							justify-center
						"
					>
						<p class="font-semibold text-xl text-center">
							Inscrivez-vous dès maintenant !
						</p>
					</div>
				</div>
				<div class="right w-1/2 h-full"></div>
			</div>
		</div>
		<div class="h-1/6 w-full flex flex-col space-y-5 items-center">
			<p class="font-semibold text-white text-4xl mt-5">
				Vous cherchez un cours ?
			</p>
			<p class="text-white text-xl">
				Vous souhaitez apprendre un métier ou une compétence et vous ne savez
				pas si le cours est disponible ? Faites une recherche !
			</p>
			<div class="w-2/5 h-12 bg-white rounded-full">
				<div
					class="input_search w-full h-full flex justify-between items-center"
				>
					<p class="ml-5 text-gray-400">Mots-Clés ou catégories</p>
					<svg
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21 21.2882L15.9706 16.0074M18.5608 9.78039C18.5608 14.6297 14.6297 18.5608 9.78038 18.5608C4.93111 18.5608 1 14.6297 1 9.78039C1 4.93111 4.93111 1 9.78038 1C14.6297 1 18.5608 4.93111 18.5608 9.78039Z"
							stroke="#020B2A"
							stroke-width="2"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'desktop'
}
</script>

<style>
.img-bg {
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-position-y: 80%;
	background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
		url('https://images.unsplash.com/photo-1612194558554-ab692b006563?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
}
.logo_part svg {
	height: 100px;
	width: 100px;
}
.search_btn svg {
	height: 17px;
	width: 17px;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
.input_search svg {
	margin-right: 2%;
}
</style>
