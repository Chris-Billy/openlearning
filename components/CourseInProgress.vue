<template lang="">
	<div class="flex justify-center">
		<div
			class="bg-white flex flex-col justify-evenly w-11/12 h-52 rounded-lg"
			style="margin-top: -50px"
		>
			<div
				class="
					card_title
					text-sm
					w-full
					h-1/5
					pt-2
					flex flex-row
					justify-around
					items-center
				"
			>
				<p class="card_text w-4/6 whitespace-nowrap overflow-x-auto">
					{{ cardTitle }}
				</p>
				<img
					class="h-14 w-14 rounded-lg"
					src="~/static/template_image.png"
					alt=""
				/>
			</div>
			<div class="advancement_card flex w-1/2 pl-3 justify-evenly items-center">
				<img class="rounded-lg" src="~/static/medal.png" />
				<div class="medal_text flex flex-col">
					<p class="text-sm text-gray-400">Avancement</p>
					<p class="text-sm text-black">{{ percentage }} %</p>
				</div>
			</div>
			<div class="h-3 w-full flex justify-center">
				<div class="bg-gray-100 w-5/6 rounded-lg">
					<div class="bar_bar bg-green-500 h-full rounded-full"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CourseProgression',
	props: ['cardTitle', 'percentage']
}
</script>

<style scoped>
.bar_bar {
	width: 10%;
}
</style>
