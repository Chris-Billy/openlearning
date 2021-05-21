<template>
	<div class="flex flex-col h-full w-full">
		<div class="h-1/2 w-full flex flex-col justify-center">
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
						src="~/static/stock_avatar.png"
						alt=""
					/>
				</div>
				<div class="h-1/4 w-full flex flex-col justify-center items-center">
					<p class="font-bold text-white">
						{{ user.firstname }} {{ user.lastname }}
					</p>
					<p class="text-gray-300">{{ user.email }}</p>
				</div>
			</div>
		</div>
		<div
			class="h-3/4 w-full bg-bg-card rounded-t-large flex flex-col items-center"
		>
			<div class="h-1/2 w-11/12 flex flex-col flex items-center justify-center">
				<div class="text-gray-400 flex flex-col justify-center w-full text-sm">
					<p>Paramètres du compte</p>
				</div>
				<div class="h-1/5 w-full flex items-center">
					<div class="w-full flex items-center justify-between">
						<NuxtLink to="account"><p>Modifier mon compte</p></NuxtLink>
						<svg
							width="8"
							height="12"
							viewBox="0 0 8 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.5 11L6.5 6L1.5 1"
								stroke="#91919F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
				<div class="h-1/5 w-full flex items-center">
					<div class="w-full flex items-center justify-between">
						<p>Préférences e-mail</p>
						<svg
							width="8"
							height="12"
							viewBox="0 0 8 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.5 11L6.5 6L1.5 1"
								stroke="#91919F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
				<div class="h-1/5 w-full flex items-center">
					<div class="w-full flex items-center justify-between">
						<p>Notifications</p>
						<svg
							width="8"
							height="12"
							viewBox="0 0 8 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.5 11L6.5 6L1.5 1"
								stroke="#91919F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div class="h-1/2 w-11/12 flex flex-col flex items-center">
				<div class="text-gray-400 flex flex-col justify-center w-full text-sm">
					<p>Support</p>
				</div>
				<div class="h-1/5 w-full flex items-center">
					<div class="w-full flex items-center justify-between">
						<p>A Propos</p>
						<svg
							width="8"
							height="12"
							viewBox="0 0 8 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.5 11L6.5 6L1.5 1"
								stroke="#91919F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
				<div class="h-1/5 w-full flex items-center">
					<div class="w-full flex items-center justify-between">
						<p>Questions Fréquentes</p>
						<svg
							width="8"
							height="12"
							viewBox="0 0 8 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.5 11L6.5 6L1.5 1"
								stroke="#91919F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
				<div class="h-1/5 w-full flex items-center">
					<div class="w-full flex items-center justify-between">
						<p>Partager l'application</p>
						<svg
							width="8"
							height="12"
							viewBox="0 0 8 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.5 11L6.5 6L1.5 1"
								stroke="#91919F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
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
