<!-- Home Page for connected users -->
<template>
	<div class="container">
		<div class="container_top">
			<div class="content">
				<div class="pfp_title">
					<img id="profile_picture" src="@/static/stock_avatar.png" alt="" />
					<div class="p_title">
						<p class="wb">Heureux de vous revoir,</p>
						<p class="names">
							{{ loggedInUser.firstname }} {{ loggedInUser.lastname }}
						</p>
					</div>
					<div><button @click="logout">logout</button></div>
				</div>
				<img
					class="bell"
					src="https://static.overlay-tech.com/assets/f3fc08bb-c5e6-4f6f-a256-165bc6b4ab73.svg"
					alt=""
				/>
			</div>
		</div>
		<div class="container_bottom">
			<CourseInProgress
				:card-title="'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet'"
				:percentage="'10%'"
			/>
			<div class="recommanded">
				<p>Recommandations</p>
				<div class="scrollable_part">
					<CardCourses
						v-for="course in mycourses"
						:key="course.title"
						:card-title="course.title"
						:nb-star="course.star"
						:owner="loggedInUser.firstname + ' ' + loggedInUser.lastname"
						:category="course.category"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex' // vuex here only used for nuxt auth, otherwise, we use composition api for global store
export default {
	name: 'LoginPage',
	middleware: 'auth',
	data() {
		return {
			mycourses: [
				{
					title: 'How to learn Agile with André',
					star: '4.7',
					category: 'Agile'
				},
				{ title: 'The Basics of IOS dev', star: '4.5', category: 'Swift' }
			]
		}
	},
	computed: {
		...mapGetters(['isAuthenticated', 'loggedInUser'])
	},
	methods: {
		async logout() {
			try {
				await this.$auth.logout()
			} catch (e) {
				this.error = e.response.data.message
			}
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
		height: 80%;
		width: 80vw;
		display: flex;
		flex-direction: column;
		font-size: 18px;
		font-family: 'DM Sans', sans-serif;
	}
	.recommanded p {
		padding: 5% 0 5% 10%;
	}
	.scrollable_part {
		height: 80%;
		width: 100vw;
		overflow: scroll;
		display: flex;
		flex-direction: column;
	}
}
</style>
