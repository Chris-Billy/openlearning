<!-- Home Page for connected users -->
<template>
	<div class="h-full w-full overflow-hidden">
		<div class="h-1/4 flex justify-center items-center">
			<div class="content w-full h-1/2">
				<div class="pfp_title w-full flex justify-evenly">
					<div class="w-3/4 flex flex-row justify-evenly">
						<img
							class="h-14 w-14 rounded-full"
							src="@/static/stock_avatar.png"
							alt=""
						/>
						<div class="h-1/2">
							<p class="wb text-white">Heureux de vous revoir,</p>
							<p class="names text-white font-bold">
								{{ this.$auth.user.firstname }} {{ this.$auth.user.lastname }}
							</p>
						</div>
					</div>
					<div class="flex justify-center items-center">
						<button @click="logout">
							<img class="h-5 w-5" src="@/static/disconnect.png" alt="" />
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="h-3/4 bg-gray-100 rounded-t-large">
			<CourseInProgress
				:card-title="'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet'"
				:percentage="'10'"
			/>
			<div class="h-3/4 flex flex-col">
				<p class="text-lg font-medium m-5">Recommandations</p>
				<div class="h-3/4 w-full overflow-scroll flex flex-col">
					<CardCourses
						v-for="course in allCourses"
						:id="course._id"
						:key="course.id"
						:card-title="course.title"
						:nb-star="course.star"
						:owner="course.source"
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
	async asyncData({ store, $axios }) {
		// Appel ajax simple via axios à notre api backend express
		const mycourses = await $axios.$get(
			'/user/' + store.state.auth.user.userid + '/courses'
		)
		const allCourses = await $axios.$get('/courses')
		return {
			mycourses,
			allCourses
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

<style scoped></style>
