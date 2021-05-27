<template>
	<div class="flex flex-col h-full w-full">
		<div class="h-2/6 w-full flex flex-col justify-center">
			<div class="flex items-end py-4 px-2.5">
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
						d="M13.0893 4.4107C13.4148 4.73614 13.4148 5.26378 13.0893 5.58922L8.67859 9.99996L13.0893 14.4107C13.4148 14.7361 13.4148 15.2638 13.0893 15.5892C12.7639 15.9147 12.2363 15.9147 11.9108 15.5892L6.91083 10.5892C6.58539 10.2638 6.58539 9.73614 6.91083 9.4107L11.9108 4.4107C12.2363 4.08527 12.7639 4.08527 13.0893 4.4107Z"
						fill="#FCFCFF"
					/>
				</svg>
				<p class="ml-2.5 text-white">Cours</p>
			</div>
			<div class="flex flex-col justify-center items-center h-3/4 w-full">
				<div class="h-3/4 w-full flex justify-center items-center">
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
			<form
				class="h-full w-11/12 flex flex-col flex items-center scrollbars flex overflow-x-auto"
				action=""
			>
				<div class="w-full">
					<div class="text-black flex flex-col justify-center w-full text-lg">
						<p>Paramètres du compte</p>
					</div>
					<div class="h-1/5 w-full flex items-center">
						<div
							class="h-3/4 bg-bg-card w-full rounded-t-large flex flex-col items-center"
						>
							<input
								class="w-full border-l border-r bg-transparent border-black outline-none p-2 mb-4 mt-4"
								type="text"
								name="name"
								:placeholder="user.lastname"
							/>
							<input
								class="w-full border-l border-r bg-transparent border-black outline-none p-2 mb-4 mt-4"
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
							<input
								class="w-full border-l border-r bg-transparent border-black outline-none p-2 mb-4 mt-4"
								type="text"
								name="e-mail"
								:placeholder="user.email"
							/>
						</div>
					</div>
				</div>
				<button
					class="border-none bg-button-google mb-5 rounded-lg text-base text-white w-full h-14 mt-6"
					type="submit"
				>
					enregistrer les modifications
				</button>
			</form>
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
