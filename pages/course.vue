<template>
	<div class="flex flex-col h-full justify-center">
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
		<div class="w-full h-96 bg-black hidden"></div>
		<div class="w-full h-20 bg-card-course flex">
			<button
				class="w-1/2 flex justify-center items-center focus:outline-none"
				:class="{ 'not-focus': !defaulttab, 'font-bold': defaulttab }"
				@click="defaulttab = true"
			>
				Détails du cours
			</button>
			<button
				class="w-1/2 flex justify-center items-center focus:outline-none"
				:class="{ 'not-focus': defaulttab, 'font-bold': !defaulttab }"
				@click="defaulttab = false"
			>
				Ressources cours
			</button>
		</div>

		<div
			v-if="defaulttab"
			class="
				h-full
				w-full
				flex flex-col
				bg-card-course
				p-4
				overflow-scroll
				pb-14
			"
		>
			<h1 class="font-bold text-3xl">DETAILS DU COURS CHOISI</h1>
			<pre>{{ myCourse }}</pre>
		</div>

		<div
			v-if="!defaulttab"
			class="
				h-full
				w-full
				flex flex-col
				bg-card-course
				p-4
				overflow-y-scroll
				pb-14
			"
		>
			<!-- SECTION 1 : VIDEOS -->
			<div v-if="medias.allTypesOfMedias.includes('video')">
				<div class="w-screen -mt-2 mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl font-semibold ml-4">Vidéos</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div v-for="media in medias.allMedias" :key="media.id">
					<div
						v-if="media.type === 'video'"
						class="flex justify-between items-center py-2"
					>
						<div class="max-w-80/100">
							<p>{{ media.title }}</p>
							<p class="text-xs">Video - 5 min</p>
						</div>
						<input class="w-6 h-6 mr-2" type="checkbox" />
					</div>
				</div>
			</div>

			<!-- SECTION 2 : COURS -->
			<div v-if="medias.allTypesOfMedias.includes('cours')" class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl font-semibold ml-4">Cours</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div v-for="media in medias.allMedias" :key="media.id">
					<div
						v-if="media.type === 'video'"
						class="flex justify-between items-center py-2"
					>
						<div class="max-w-80/100">
							<p>{{ media.title }}</p>
							<p class="text-xs">Cours - 5 min</p>
						</div>
						<input class="w-6 h-6 mr-2" type="checkbox" />
					</div>
				</div>
			</div>

			<!-- SECTION 3 : ARTICLES -->
			<div v-if="medias.allTypesOfMedias.includes('article')" class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl font-semibold ml-4">Articles</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div v-for="media in medias.allMedias" :key="media.id">
					<div
						v-if="media.type === 'article'"
						class="flex justify-between items-center py-2"
					>
						<div class="max-w-80/100">
							<p>{{ media.title }}</p>
							<p class="text-xs">Article - 5 min</p>
						</div>
						<input class="w-6 h-6 mr-2" type="checkbox" />
					</div>
				</div>
			</div>

			<!-- SECTION 4 : AUDIO -->
			<div v-if="medias.allTypesOfMedias.includes('audio')" class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl font-semibold ml-4">Audio</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div v-for="media in medias.allMedias" :key="media.id">
					<div
						v-if="media.type === 'video'"
						class="flex justify-between items-center py-2"
					>
						<div class="max-w-80/100">
							<p>{{ media.title }}</p>
							<p class="text-xs">Audio - 5 min</p>
						</div>
						<input class="w-6 h-6 mr-2" type="checkbox" />
					</div>
				</div>
			</div>

			<!-- SECTION 5 : IVY LEAGUE -->
			<div v-if="medias.allTypesOfMedias.includes('ivy league')" class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl font-semibold ml-4">Ivy League</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div v-for="media in medias.allMedias" :key="media.id">
					<div
						v-if="media.type === 'video'"
						class="flex justify-between items-center py-2"
					>
						<div class="max-w-80/100">
							<p>{{ media.title }}</p>
							<p class="text-xs">Ivy League - 5 min</p>
						</div>
						<input class="w-6 h-6 mr-2" type="checkbox" />
					</div>
				</div>
			</div>

			<!-- SECTION 6 : LIVRES -->
			<div v-if="medias.allTypesOfMedias.includes('livre')" class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl font-semibold ml-4">Livres</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div v-for="media in medias.allMedias" :key="media.id">
					<div
						v-if="media.type === 'video'"
						class="flex justify-between items-center py-2"
					>
						<div class="max-w-80/100">
							<p>{{ media.title }}</p>
							<p class="text-xs">Livre - 5 min</p>
						</div>
						<input class="w-6 h-6 mr-2" type="checkbox" />
					</div>
				</div>
			</div>

			<!-- SECTION 7 : EXERCICES -->
			<div v-if="medias.allTypesOfMedias.includes('exercice')" class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl font-semibold ml-4">Exercices</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div v-for="media in medias.allMedias" :key="media.id">
					<div
						v-if="media.type === 'video'"
						class="flex justify-between items-center py-2"
					>
						<div class="max-w-80/100">
							<p>{{ media.title }}</p>
							<p class="text-xs">Exercice - 5 min</p>
						</div>
						<input class="w-6 h-6 mr-2" type="checkbox" />
					</div>
				</div>
			</div>

			<!-- SECTION 8 : CHEAT SHEET -->
			<div v-if="medias.allTypesOfMedias.includes('cheat sheet')" class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl font-semibold ml-4">Cheat Sheet</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div v-for="media in medias.allMedias" :key="media.id">
					<div
						v-if="media.type === 'video'"
						class="flex justify-between items-center py-2"
					>
						<div class="max-w-80/100">
							<p>{{ media.title }}</p>
							<p class="text-xs">Cheat Sheet - 5 min</p>
						</div>
						<input class="w-6 h-6 mr-2" type="checkbox" />
					</div>
				</div>
			</div>

			<!-- SECTION 9 : OUTILS / MATERIEL -->
			<div v-if="medias.allTypesOfMedias.includes('outil')" class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl font-semibold ml-4">Outils - Matériel</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div v-for="media in medias.allMedias" :key="media.id">
					<div
						v-if="media.type === 'video'"
						class="flex justify-between items-center py-2"
					>
						<div class="max-w-80/100">
							<p>{{ media.title }}</p>
							<p class="text-xs">Outils - Matériel - 5 min</p>
						</div>
						<input class="w-6 h-6 mr-2" type="checkbox" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios }) {
		// Appel ajax simple via axios à notre api backend express
		const myCourse = await $axios.$get('/course/127')
		const medias = await $axios.$post('/medias', myCourse.mediasId)
		return {
			medias,
			myCourse
		}
	},
	data() {
		return {
			defaulttab: true
		}
	}
}
</script>

<style scoped>
.not-focus {
	background-color: #91919f7e;
	opacity: 0.5;
}
input[type='checkbox'] {
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;

	border: 2px solid #71e76e;
	border-radius: 5px;
	position: relative;
}
input[type='checkbox']:checked {
	background: #71e76e;
}
input[type='checkbox']:checked:before {
	content: '\2713';
	display: block;
	color: rgb(255, 255, 255);
	font-size: 1.2rem;
	font-weight: bold;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
