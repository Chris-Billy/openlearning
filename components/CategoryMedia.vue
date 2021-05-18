<template>
	<div class="w-screen -mt-2 mb-2 border-b-2 border-gray-300 -ml-4">
		<h4 class="text-xl font-semibold ml-4 capitalize">
			{{ name == 'videos' ? 'vidéos' : name == 'courss' ? 'cours' : name }}
		</h4>
		<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
	</div>
</template>

<script>
export default {
	name: 'CategoryMedia',
	props: ['name']
}
</script>
