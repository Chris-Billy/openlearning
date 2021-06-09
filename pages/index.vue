<!-- Template de la page d'accueil publique -->
<template>
	<div>
		<NuxtLink to="/home">HOME</NuxtLink><br />
		<NuxtLink to="/login">Connexion</NuxtLink><br />
		<NuxtLink to="/signup">INSCRIPTION</NuxtLink><br />
		<NuxtLink to="/search">Recherche</NuxtLink><br />
		<NuxtLink to="/mycourses">mes cours</NuxtLink><br />
		<NuxtLink to="/course">cours</NuxtLink><br />
	</div>
</template>

<script>
export default {
	middleware({ store, redirect }) {
		// Si l'utilisateur n'est pas authentifié
		if (!store.state.isAuthenticated) {
			return redirect('/welcome')
		}
	}
}
</script>
