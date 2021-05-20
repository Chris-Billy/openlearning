<template>
	<div class="flex flex-col h-full w-full">
		<div class="h-1/4 w-full flex flex-col pt-10">
			<div class="w-full flex items-center p-2">
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
				<h1 class="text-white">Paramètres</h1>
			</div>
		</div>
		<div
			class="h-3/4 bg-bg-card w-full rounded-t-large flex flex-col items-center"
		>
			<div class="h-full w-11/12 flex flex-col items-center">
				<div class="h-1/6 w-11/12 flex justify-center items-center">
					<p>Modifier le compte</p>
				</div>
				<div class="h-4/5 w-11/12 flex flex-col">
					<form class="w-full flex flex-col" action="">
						<input
							class="
								w-full
								border-none
								outline-none
								bg-white
								p-2
								mb-2
								rounded-md
							"
							type="text"
							name="name"
							placeholder="Modifier votre nom"
						/>
						<input
							class="
								w-full
								border-none
								outline-none
								bg-white
								p-2
								mb-2
								rounded-md
							"
							type="text"
							name="email"
							placeholder="Modifier votre email"
						/>
						<input
							class="
								w-full
								border-none
								outline-none
								bg-white
								p-2
								mb-2
								rounded-md
							"
							type="text"
							name="email"
							placeholder="Lien pour une image de profil"
						/>
					</form>
					<button
						class="
							bg-yellow-400
							h-9
							w-auto
							rounded-lg
							focus:bg-yellow-500
							focus:outline-none
						"
					>
						Modifier
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Account',
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
