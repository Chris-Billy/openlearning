<template>
	<div class="w-screen h-screen">
		<div
			class="flex h-2/5 w-screen justify-center flex-col items-center text-center"
		>
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
			<div
				class="flex mt-5 flex-col items-center text-center text-white justify-evenly"
			>
				<h1 class="text-3xl">OpenLearning</h1>
				<p class="mt-5 text-sm w-3/4">
					L'accès au savoir n'importe où, n'importe quand et gratuitement.
				</p>
			</div>
		</div>
		<div
			class="flex h-3/5 w-screen flex-col items-center rounded-t-large p-7 bg-bg-card"
		>
			<form class="flex flex-col w-full" method="POST" @submit.prevent="login">
				<div class="flex relative h-14 rounded-lg mb-4 bg-white">
					<svg
						class="absolute top-1/2 ml-2.5 transform -translate-y-1/2"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="20" height="20" fill="white" />
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3.33325 4.16667C2.87682 4.16667 2.49992 4.54357 2.49992 5V15C2.49992 15.4564 2.87682 15.8333 3.33325 15.8333H16.6666C17.123 15.8333 17.4999 15.4564 17.4999 15V5C17.4999 4.54357 17.123 4.16667 16.6666 4.16667H3.33325ZM0.833252 5C0.833252 3.6231 1.95635 2.5 3.33325 2.5H16.6666C18.0435 2.5 19.1666 3.6231 19.1666 5V15C19.1666 16.3769 18.0435 17.5 16.6666 17.5H3.33325C1.95635 17.5 0.833252 16.3769 0.833252 15V5Z"
							fill="#FFD260"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.983964 4.52208C1.24789 4.14504 1.7675 4.05335 2.14454 4.31728L9.99999 9.81609L17.8554 4.31728C18.2325 4.05335 18.7521 4.14504 19.016 4.52208C19.2799 4.89913 19.1882 5.41873 18.8112 5.68266L10.4779 11.516C10.1909 11.7168 9.80904 11.7168 9.52211 11.516L1.18877 5.68266C0.81173 5.41873 0.720035 4.89913 0.983964 4.52208Z"
							fill="#FFD260"
						/>
					</svg>
					<input
						v-model="email"
						class="h-full w-full border-none ml-10 outline-none bg-transparent pr-4"
						type="text"
						placeholder="Email"
					/>
				</div>
				<div class="flex relative h-14 rounded-lg mb-4 bg-white">
					<svg
						class="absolute top-1/2 ml-2.5 transform -translate-y-1/2"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M4.16675 9.99998C3.70651 9.99998 3.33341 10.3731 3.33341 10.8333V16.6666C3.33341 17.1269 3.70651 17.5 4.16675 17.5H15.8334C16.2937 17.5 16.6667 17.1269 16.6667 16.6666V10.8333C16.6667 10.3731 16.2937 9.99998 15.8334 9.99998H4.16675ZM1.66675 10.8333C1.66675 9.4526 2.78604 8.33331 4.16675 8.33331H15.8334C17.2141 8.33331 18.3334 9.4526 18.3334 10.8333V16.6666C18.3334 18.0474 17.2141 19.1666 15.8334 19.1666H4.16675C2.78604 19.1666 1.66675 18.0474 1.66675 16.6666V10.8333Z"
							fill="#FFD260"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M10 2.49998C9.11594 2.49998 8.2681 2.85117 7.64298 3.47629C7.01786 4.10141 6.66667 4.94926 6.66667 5.83331V9.16665C6.66667 9.62688 6.29357 9.99998 5.83333 9.99998C5.3731 9.99998 5 9.62688 5 9.16665V5.83331C5 4.50723 5.52678 3.23546 6.46447 2.29778C7.40215 1.3601 8.67392 0.833313 10 0.833313C11.3261 0.833313 12.5979 1.3601 13.5355 2.29778C14.4732 3.23546 15 4.50723 15 5.83331V9.16665C15 9.62688 14.6269 9.99998 14.1667 9.99998C13.7064 9.99998 13.3333 9.62688 13.3333 9.16665V5.83331C13.3333 4.94926 12.9821 4.10141 12.357 3.47629C11.7319 2.85117 10.8841 2.49998 10 2.49998Z"
							fill="#FFD260"
						/>
					</svg>
					<input
						v-model="password"
						class="h-full w-full border-none ml-10 outline-none bg-transparent pr-4"
						type="password"
						placeholder="Mot de passe"
					/>
				</div>
				<div v-if="error" class="text-red-500">
					{{ error }}
				</div>
				<button
					class="border-none bg-button-yellow mb-5 rounded-lg text-base h-14"
					type="submit"
				>
					Se connecter
				</button>
			</form>
			<button
				class="border-none bg-button-google mb-5 rounded-lg text-base text-white w-full h-14"
			>
				Se connecter avec Google
			</button>
			<NuxtLink to="/signup" class="w-4/6">
				<button
					class="border-none bg-button-no-account mb-5 rounded-lg text-xs text-white w-full h-14"
				>
					Je n'ai pas encore de compte
				</button>
			</NuxtLink>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			error: ''
		}
	},
	methods: {
		async login() {
			try {
				await this.$auth.loginWith('local', {
					data: {
						email: this.email,
						password: this.password
					}
				})
				this.$router.push('/home')
			} catch (e) {
				this.error = e.response.data.message
			}
		}
	}
}
</script>
