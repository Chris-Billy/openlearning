<template>
	<div
		v-if="selectedLanguage.includes(language)"
		class="flex justify-between items-center py-2"
	>
		<div class="max-w-80/100">
			<p>{{ title }}</p>
			<p class="text-xs">
				<span class="capitalize">{{
					category == 'video' ? 'vidéo' : category
				}}</span>
				- 5 min
			</p>
		</div>
		<input
			class="w-6 h-6 mr-2 cursor-pointer"
			type="checkbox"
			:checked="learnedMedias.includes(idMedia)"
			@click="changeStatus(idMedia)"
		/>
	</div>
</template>

<script>
export default {
	props: {
		title: { type: String, default: '' },
		category: { type: String, default: '' },
		idMedia: { type: Number, default: 0 },
		learnedMedias: { type: Array, default: null },
		language: { type: String, default: '' },
		selectedLanguage: { type: String, default: '' }
	},
	methods: {
		changeStatus(idMedia) {
			const learnedMedias = this.learnedMedias

			if (this.learnedMedias.includes(idMedia)) {
				learnedMedias.splice(this.learnedMedias.indexOf(idMedia), 1)
				this.$emit('update:learnedMedias', learnedMedias)
			} else {
				learnedMedias.push(idMedia)
				this.$emit('update:learnedMedias', learnedMedias)
			}
		}
	}
}
</script>
