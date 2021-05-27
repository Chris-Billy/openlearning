<template>
	<div class="flex flex-col h-full w-full overflow-hidden">
		<div class="h-2/6 w-full flex flex-col justify-evenly">
			<div class="w-full flex items-center ml-7" @click="$router.go(-1)">
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
				<h1 class="text-white ml-7">Cours</h1>
			</div>
		</div>
		<div
			class="h-4/6 w-full bg-bg-card rounded-t-large flex flex-col items-center p-7"
		>
			<div
				class="h-full w-11/12 flex flex-col flex items-center scrollbars flex overflow-x-auto"
			></div>
		</div>
	</div>
</template>

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
