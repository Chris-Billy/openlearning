<!-- Template de la page d'accueil publique -->
<template>
	<div>
		<NuxtLink to="/home">HOME</NuxtLink>
		<NuxtLink to="/login">Connexion</NuxtLink>
		<NuxtLink to="/signup">INSCRIPTION</NuxtLink>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios }) {}
}
</script>
