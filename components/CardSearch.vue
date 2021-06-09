<template>
	<router-link :to="'/course/' + id">
		<div
			class="h-52 w-52 bg-white rounded-large text-center justify-evenly mr-3"
		>
			<div class="h-4/6 flex justify-center items-center">
				<img class="rounded-lg" src="@/static/template_image2.png" alt="" />
			</div>
			<div class="h-2/6">
				<div class="h-1/2 leading-none">
					<h3>{{ title }}</h3>
				</div>
				<div class="flex justify-center h-1/2">
					<img class="h-3.5 w-3.5" src="@/static/star.png" alt="" />
					<h4 class="text-xs ml-3 mr-3">{{ stars }}</h4>
					<p class="text-xs">Par {{ source }}</p>
				</div>
			</div>
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		id: { type: String, default: '' },
		title: { type: String, default: '' },
		stars: { type: Number, default: 0 },
		source: { type: String, default: '' }
	}
}
</script>
