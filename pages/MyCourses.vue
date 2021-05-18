<template>
	<div class="h-full w-full overflow-hidden">
		<div class="flex h-1/6 w-full justify-center flex-col">
			<div class="w-full flex items-center ml-7">
				<NuxtLink to="home">
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M13.0893 4.41083C13.4148 4.73626 13.4148 5.2639 13.0893 5.58934L8.67859 10.0001L13.0893 14.4108C13.4148 14.7363 13.4148 15.2639 13.0893 15.5893C12.7639 15.9148 12.2363 15.9148 11.9108 15.5893L6.91083 10.5893C6.58539 10.2639 6.58539 9.73626 6.91083 9.41083L11.9108 4.41083C12.2363 4.08539 12.7639 4.08539 13.0893 4.41083Z"
							fill="#FCFCFF"
						/>
					</svg>
				</NuxtLink>
				<p class="text-white ml-7">Mes Cours</p>
			</div>
		</div>
		<div class="h-5/6 w-full bg-bg-card rounded-t-large">
			<div class="h-16 w-full flex flex-row">
				<button
					class="
						text-gray-400
						focus:outline-none
						h-full
						w-1/2
						flex
						justify-center
						items-center
					"
					:class="{ 'not-focus': !actualTab }"
					@click="actualTab = true"
				>
					<div>
						<p :class="{ 'font-bold text-gray-600': actualTab }">En cours</p>
					</div>
				</button>
				<button
					class="
						text-gray-400
						focus:outline-none
						h-full
						w-1/2
						flex
						justify-center
						items-center
					"
					:class="{ 'not-focus': !actualTab }"
					@click="actualTab = false"
				>
					<div>
						<p :class="{ 'font-bold text-gray-600': !actualTab }">Terminés</p>
					</div>
				</button>
			</div>
			<div
				v-if="actualTab"
				class="mt-5 h-full w-full flex overflow-scroll flex-col"
			>
				<CardCourses
					v-for="course in unfinishedCourses"
					:key="course.id"
					:card-title="course.title"
					:nb-star="course.star"
					:owner="course.source"
					:category="course.category"
				/>
			</div>
			<div
				v-if="!actualTab"
				class="mt-5 h-full w-full flex overflow-scroll flex-col"
			>
				<div v-if="false" class="flex justify-center items-center">
					<p>Vous n'avez encore terminé aucun cours.</p>
				</div>
				<div v-else>
					<CardCourses
						v-for="course in doneCourses"
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
export default {
	data() {
		return {
			actualTab: true
		}
	},
	name: 'LoginPage',
	middleware: 'auth',
	async asyncData({ $axios }) {
		// Appel ajax simple via axios à notre api backend express
		const user = await $axios.$get('/user')
		const mycourses = await $axios.$get('/user/' + user.id + '/courses')
		const unfinishedCourses = await $axios.$post(
			'/courses/actuals',
			user.myfavoritecoursesId
		)
		const doneCourses = await $axios.$post(
			'/courses/done',
			user.myfavoritecoursesId
		)
		return {
			user,
			mycourses,
			unfinishedCourses,
			doneCourses
		}
	}
}
</script>
