<template>
	<div class="nologin-page example bg-primary w-screen">
		<Nuxt />
	</div>
</template>

<script>
export default {}
</script>

<style>
.nologin-page {
	height: 2800px;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
</style>
