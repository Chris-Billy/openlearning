<template>
	<div class="flex flex-col h-full w-full justify-center overflow-hidden">
		<div class="flex h-1/6 w-full justify-center flex-col">
			<div
				class="flex h-1/6 items-center py-4 ml-7 cursor-pointer w-min"
				@click="$router.go(-1)"
			>
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
				<p class="ml-7 text-white">Cours</p>
			</div>
		</div>
		<div class="h-5/6 w-full bg-bg-card rounded-t-large pb-16">
			<div class="w-full h-56 bg-black hidden"></div>
			<div class="w-full h-16 flex rounded-t-large">
				<button
					class="w-1/2 flex justify-center items-center focus:outline-none rounded-tl-large text-gray-400"
					:class="{
						'font-bold text-gray-600': defaulttab
					}"
					@click="defaulttab = true"
				>
					Détails du cours
				</button>
				<button
					class="w-1/2 flex justify-center items-center focus:outline-none rounded-tr-large text-gray-400"
					:class="{
						'font-bold text-gray-600': !defaulttab
					}"
					@click="checkAccess"
				>
					Ressources cours
				</button>
			</div>

			<div
				v-if="defaulttab"
				class="h-full w-full flex flex-col px-6 overflow-scroll pb-14"
			>
				<div class="pb-4">
					<div class="relative h-48 flex justify-center items-end rounded-lg2">
						<div
							class="absolute h-full w-full rounded-lg2 bg-agile bg-cover filter brightness-50 z-0"
						></div>
						<h3
							class="relative w-full text-xl text-white text-center font-bold z-1 p-3"
						>
							{{ myCourse.title }}
						</h3>
					</div>

					<div class="flex justify-between py-3 px-1 font-medium">
						<p>{{ myCourse.theme }}</p>
						<div class="flex items-center">
							<p class="mr-2">{{ myCourse.star }}</p>
							<img
								v-if="myCourse.star >= 1"
								class="h-4 w-4"
								src="@/static/star.png"
							/>
							<img
								v-if="myCourse.star >= 2"
								class="h-4 w-4"
								src="@/static/star.png"
							/>
							<img
								v-if="myCourse.star >= 3"
								class="h-4 w-4"
								src="@/static/star.png"
							/>
							<img
								v-if="myCourse.star >= 4"
								class="h-4 w-4"
								src="@/static/star.png"
							/>
							<img
								v-if="myCourse.star == 5"
								class="h-4 w-4"
								src="@/static/star.png"
							/>
						</div>
					</div>

					<div class="flex flex-col">
						<h3 class="font-bold text-gray-800 py-3">Description du cours :</h3>
						<p>
							{{ myCourse.description }}
						</p>
					</div>

					<div class="mt-6">
						<p>
							<span class="font-bold text-gray-800">Mots-Clés :</span>
							{{ getKeywords() }}
						</p>
					</div>
				</div>
			</div>

			<div
				v-if="!defaulttab"
				class="h-full w-full flex flex-col px-4 overflow-y-scroll pb-14"
			>
				<div
					v-if="message"
					class="flex justify-center items-center w-full h-full text-3xl text-center"
				>
					{{ message }}
				</div>
				<div v-if="!message" class="flex flex-col justify-center items-center">
					<label for="lang" class="mb-2">Langue des cours à afficher</label>
					<select
						v-model="selectedLanguage"
						class="mb-6 w-2/4 rounded-sm"
						name="lang"
					>
						<option :value="'fr-en'">Français et Anglais</option>
						<option :value="'fr'">Français</option>
						<option :value="'en'">Anglais</option>
					</select>
				</div>

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
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	async asyncData({ params, $axios }) {
		const myCourse = await $axios.$get('/course/' + params.id)
		return {
			myCourse
		}
	},
	data() {
		return {
			defaulttab: true,
			allMedias: '',
			learnedMedias: '',
			message: false,
			selectedLanguage: 'fr-en',
			test: '<img class="h-4 w-4" src="@/static/star.png" />'
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
		},
		getKeywords() {
			let keywords = ''
			this.myCourse.keyWord.forEach((word, index) => {
				keywords += word
				if (index !== this.myCourse.keyWord.length - 1) {
					keywords += ', '
				}
			})
			return keywords
		}
	}
}
</script>

<style>
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
