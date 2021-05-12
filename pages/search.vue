<template>
	<div class="w-screen h-screen overflow-hidden">
		<div class="flex h-1/6 w-full justify-center flex-col">
			<div class="w-full flex items-center ml-7">
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
				<p class="text-white ml-7">Explorer</p>
			</div>
		</div>
		<div
			class="flex h-5/6 w-full flex-col rounded-t-large bg-bg-card items-center"
		>
			<form class="w-10/12 items-center mt-5" action="">
				<div class="flex h-14 w-full rounded-lg bg-white items-center">
					<input
						class="h-full w-full border-none ml-5 outline-none bg-transparent"
						type="text"
						placeholder="Métier ou compétences"
					/>
					<svg
						class="mr-5 ml-5"
						width="19"
						height="20"
						viewBox="0 0 19 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M9.16675 3.33341C5.94509 3.33341 3.33341 5.94509 3.33341 9.16675C3.33341 12.3884 5.94509 15.0001 9.16675 15.0001C12.3884 15.0001 15.0001 12.3884 15.0001 9.16675C15.0001 5.94509 12.3884 3.33341 9.16675 3.33341ZM1.66675 9.16675C1.66675 5.02461 5.02461 1.66675 9.16675 1.66675C13.3089 1.66675 16.6667 5.02461 16.6667 9.16675C16.6667 13.3089 13.3089 16.6667 9.16675 16.6667C5.02461 16.6667 1.66675 13.3089 1.66675 9.16675Z"
							fill="black"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M13.2858 13.2858C13.6113 12.9604 14.1389 12.9604 14.4643 13.2858L18.0893 16.9108C18.4148 17.2363 18.4148 17.7639 18.0893 18.0893C17.7639 18.4148 17.2363 18.4148 16.9108 18.0893L13.2858 14.4643C12.9604 14.1389 12.9604 13.6113 13.2858 13.2858Z"
							fill="black"
						/>
					</svg>
				</div>
			</form>
			<div class="w-full h-full flex flex-col">
				<div>
					<p class="font-md">Explorer</p>
				</div>
				<div>
					<p class="font-md">Compétences</p>
				</div>
				<div class="scrollbars flex overflow-x-auto">
					<div class="flex flex-row">
						<div class="ml-2 mr-2 h-52 w-52 bg-white rounded-large text-center">
							<p>test1</p>
						</div>
						<div class="ml-2 mr-2 h-52 w-52 bg-white rounded-large text-center">
							<p>test2</p>
						</div>
						<div class="ml-2 mr-2 h-52 w-52 bg-white rounded-large text-center">
							<p>test3</p>
						</div>
						<div class="ml-2 mr-2 h-52 w-52 bg-white rounded-large text-center">
							<p>test4</p>
						</div>
						<div class="ml-2 mr-2 h-52 w-52 bg-white rounded-large text-center">
							<p>test5</p>
						</div>
						<div class="ml-2 mr-2 h-52 w-52 bg-white rounded-large text-center">
							<p>test6</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbars::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbars {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
</style>
