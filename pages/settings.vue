<template>
	<div class="flex flex-col h-full w-full overflow-hidden">
		<div class="h-2/6 w-full flex flex-col justify-evenly">
			<div class="w-full flex items-center ml-7" @click="$router.go(-1)">
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M13.0893 4.41083C13.4148 4.73626 13.4148 5.2639 13.0893 5.58934L8.67859 10.0001L13.0893 14.4108C13.4148 14.7363 13.4148 15.2639 13.0893 15.5893C12.7639 15.9148 12.2363 15.9148 11.9108 15.5893L6.91083 10.5893C6.58539 10.2639 6.58539 9.73626 6.91083 9.41083L11.9108 4.41083C12.2363 4.08539 12.7639 4.08539 13.0893 4.41083Z"
						fill="#FCFCFF"
					/>
				</svg>
				<h1 class="text-white ml-7">Cours</h1>
			</div>
			<div class="flex flex-col justify-center items-center w-full">
				<div class="w-full flex justify-center items-center">
					<img
						class="h-32 w-32 rounded-full"
						src="@/static/stock_avatar.png"
						alt=""
					/>
				</div>
			</div>
		</div>
		<div
			class="h-4/6 w-full bg-bg-card rounded-t-large flex flex-col items-center p-7"
		>
			<div
				class="h-full w-11/12 flex flex-col flex items-center scrollbars flex overflow-x-auto"
			>
				<form class="w-full h-full" action="">
					<div class="w-full">
						<div class="text-black flex flex-col justify-center w-full text-lg">
							<p>Paramètres du compte</p>
						</div>
						<div class="h-1/5 w-full flex items-center">
							<div
								class="h-3/4 bg-bg-card w-full rounded-t-large flex flex-col items-center"
							>
								<label class="w-full bg-transparent mt-4">Nom</label>
								<input
									class="w-full border-l border-r bg-transparent border-black outline-none p-2 mb-4"
									type="text"
									name="name"
									:placeholder="user.lastname"
								/>
								<label class="w-full bg-transparent mt-4">Prénom</label>
								<input
									class="w-full border-l border-r bg-transparent border-black outline-none p-2 mb-4"
									type="text"
									name="email"
									:placeholder="user.firstname"
								/>
								<select
									class="w-full border-l border-r bg-transparent border-black outline-none p-2 mb-4 mt-4"
								>
									<option value="">Langues</option>
									<option>Français</option>
									<option>Anglais</option>
									<option>Espagnol</option>
									<option>Chinois</option>
									<option>Allemand</option>
								</select>
							</div>
						</div>
					</div>
					<div class="w-full mt-6">
						<div class="text-black flex flex-col justify-center w-full text-lg">
							<p>Préférences e-mail</p>
						</div>
						<div class="w-full flex items-center">
							<div
								class="bg-bg-card w-full rounded-t-large flex flex-col items-center"
							>
								<label class="w-full bg-transparent mt-4">Mail</label>
								<input
									class="w-full border-l border-r bg-transparent border-black outline-none p-2 mb-4"
									type="text"
									name="e-mail"
									:placeholder="user.email"
								/>
							</div>
						</div>
					</div>
					<button
						class="border-none bg-button-yellow mb-5 rounded-lg text-base text-white w-full h-14 mt-6 mb-12"
						type="submit"
					>
						Enregistrer les modifications
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Settings',
	middleware: 'auth',
	async asyncData({ $axios }) {
		// Appel ajax simple via axios à notre api backend express
		const user = await $axios.$get('/user')
		return {
			user
		}
	}
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbars::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbars {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
</style>
