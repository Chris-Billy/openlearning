<template>
	<div class="flex justify-between items-center py-2">
		<div class="max-w-80/100">
			<p>{{ title }}</p>
			<p class="text-xs">
				<span class="capitalize">{{
					category == 'video' ? 'vidéo' : category
				}}</span>
				- 5 min
			</p>
		</div>
		<input class="w-6 h-6 mr-2" type="checkbox" />
	</div>
</template>

<script>
export default {
	name: 'SectionCourse',
	props: ['title', 'category']
}
</script>
