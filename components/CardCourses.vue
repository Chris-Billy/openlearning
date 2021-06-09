<template>
	<router-link :to="'/course/' + id">
		<div class="flex flex-row justify-center">
			<div class="w-11/12 h-32 mb-5 flex rounded-lg bg-white flex-row">
				<div class="h-full w-9/12 flex justify-center items-center flex-col">
					<div class="text-sm w-11/12 h-1/5">
						<p class="whitespace-nowrap overflow-x-auto">{{ cardTitle }}</p>
					</div>
					<div class="flex flex-row w-full">
						<div class="flex justify-evenly flex-row w-1/4 items-center">
							<img class="h-3 w-3" src="~/static/star.png" />
							<p>{{ nbStar }}</p>
						</div>
						<div class="flex flex-row justify-center items-center">
							<div class="h-1 w-1 rounded-full bg-gray-400 mr-1"></div>
							<div
								class="text-xs text-gray-400 flex flex-row whitespace-nowrap overflow-x-auto"
							>
								<p>Par {{ owner }}</p>
							</div>
							<div class="h-1 w-1 rounded-full bg-gray-400 ml-1 mr-1"></div>
						</div>
						<div clas="flex justify-center items-center">
							<div
								class="text-xs text-gray-400 flex flex-row justify-center items-center"
							>
								<p class="mt-1">{{ category }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="h-full w-1/6 flex justify-center items-center">
					<img
						class="h-15 w-15 rounded-lg"
						src="~/static/template_image2.png"
					/>
				</div>
			</div>
		</div>
	</router-link>
</template>
<script>
export default {
	name: 'RecommandedCards',
	props: {
		cardTitle: { type: String, default: '' },
		nbStar: { type: Number, default: 0 },
		owner: { type: String, default: '' },
		category: { type: String, default: '' },
		id: { type: String, default: '' }
	}
}
</script>
<style scoped></style>
