<template>
	<div class="container">
		<div class="container_top">
			<div class="content">
				<div class="pfp_title">
					<img id="profile_picture" src="@/static/stock_avatar.png" alt="" />
					<div class="p_title">
						<p class="wb">Heureux de vous revoir,</p>
						<p class="names">{{ users[3].prenom }} {{ users[3].nom }}</p>
					</div>
				</div>
				<img
					class="bell"
					src="https://static.overlay-tech.com/assets/f3fc08bb-c5e6-4f6f-a256-165bc6b4ab73.svg"
					alt=""
				/>
			</div>
		</div>
		<div class="container_bottom">
			<CourseProgression
				:CardTitle="'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet'"
				:Percentage="'10%'"
			/>
			<div class="recommanded"><p>Recommandations</p></div>
			<RecommandedCards />
		</div>

		<Navigation />
	</div>
</template>

<script>
import CourseProgression from '~/components/Course_in_progress.vue'
import Navigation from '~/components/Navigation.vue'
import RecommandedCards from '~/components/Card_courses.vue'

export default {
	name: 'LoginPage',
	components: {
		CourseProgression,
		Navigation,
		RecommandedCards
	},
	async asyncData({ $axios }) {
		// Appel ajax simple via axios à notre api backend express
		const users = await $axios.$get('/users')
		return {
			users
		}
	}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap');
/* div {
  background: rgb(117, 117, 117);
} */
@media only screen and (max-width: 500px) {
	.container {
		height: 100vh;
		width: 100vw;
		background: rgb(117, 117, 117);
	}
	.container_top {
		display: flex;
		height: 30%;
		width: 100vw;
	}
	.container_bottom {
		display: flex;
		height: 70%;
		flex-direction: column;
		width: 100vw;
		background: #e6e6e6;
		border-radius: 30px 30px 0 0;
	}
	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 70%;
		width: 100%;
		padding: 30px;
	}
	.pfp_title {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
	.p_title {
		margin-left: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	#profile_picture {
		height: 50px;
		width: 50px;
		border-radius: 9000px;
	}
	.wb {
		color: white;
		font-size: small;
		font-family: 'DM Sans', sans-serif;
		font-size: 11px;
	}
	.names {
		color: white;
		font-family: 'DM Sans', sans-serif;
		font-size: 18px;
	}
	.recommanded {
		height: 10%;
		width: 80vw;
		display: flex;
		align-items: center;
		padding-left: 5%;
		font-size: 18px;
		font-family: 'DM Sans', sans-serif;
	}
}
</style>
