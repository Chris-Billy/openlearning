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
				@click="checkAccess"
			>
				Ressources cours
			</button>
		</div>

		<div
			v-if="defaulttab"
			class="h-full w-full flex flex-col bg-card-course p-4 overflow-scroll pb-14"
		>
			<h1 class="font-bold text-3xl">DETAILS DU COURS CHOISI</h1>
			<pre>{{ myCourse }}</pre>
			<!-- <pre>{{ this.$route.params }}</pre> -->
		</div>

		<div
			v-if="!defaulttab"
			class="h-full w-full flex flex-col bg-card-course p-4 overflow-y-scroll pb-14"
		>
			<div
				v-if="message"
				class="flex justify-center items-center w-full h-full text-3xl text-center"
			>
				{{ message }}
			</div>
			<div>
				<label for="lang">Langue des cours à afficher</label>
				<select v-model="selectedLanguage" class="mb-4" name="lang">
					<option :value="'fr-en'">Français et Anglais</option>
					<option :value="'fr'">Français</option>
					<option :value="'en'">Anglais</option>
				</select>
			</div>

			<p>id cours checked = {{ learnedMedias.data }}</p>
			<p class="mb-4">selected langue = {{ selectedLanguage }}</p>

			<div v-for="(medias, key) in allMedias" :key="medias.id">
				<div
					v-if="medias != false && displayCategorie(medias, selectedLanguage)"
					class="mb-6"
				>
					<CategoryMedia :name="key + 's'" />
					<SectionCourse
						v-for="media in medias"
						:key="media.id"
						:title="media.title"
						:category="key"
						:id-media="media.id"
						:learned-medias="learnedMedias.data"
						:language="media.language"
						:selected-language="selectedLanguage"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			defaulttab: true,
			allMedias: '',
			learnedMedias: '',
			message: false,
			selectedLanguage: 'fr-en'
		}
	},
	async asyncData({ params, $axios }) {
		const myCourse = await $axios.$get('/course/' + params.id)
		return {
			myCourse
		}
	},
	computed: {
		...mapGetters(['isAuthenticated', 'loggedInUser'])
	},
	methods: {
		async checkAccess() {
			if (this.defaulttab !== false) {
				if (this.isAuthenticated) {
					this.allMedias = await this.$axios.$post(
						'/medias',
						this.myCourse.mediasId
					)
					this.learnedMedias = await this.$axios.get('/user/150/courses')
				} else {
					this.message =
						'Merci de vous connecter pour accéder aux détails du cours.'
				}
				this.defaulttab = false
			}
		},
		displayCategorie(medias, selectedLanguage) {
			let display = false
			medias.forEach((media) => {
				if (selectedLanguage.includes(media.language)) {
					display = true
				}
			})
			return display
		}
	}
}
</script>

<style>
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
