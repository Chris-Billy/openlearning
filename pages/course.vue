<template>
	<div class="flex flex-col h-full justify-center">
		<div class="flex items-end py-4 px-2.5">
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
					d="M13.0893 4.4107C13.4148 4.73614 13.4148 5.26378 13.0893 5.58922L8.67859 9.99996L13.0893 14.4107C13.4148 14.7361 13.4148 15.2638 13.0893 15.5892C12.7639 15.9147 12.2363 15.9147 11.9108 15.5892L6.91083 10.5892C6.58539 10.2638 6.58539 9.73614 6.91083 9.4107L11.9108 4.4107C12.2363 4.08527 12.7639 4.08527 13.0893 4.4107Z"
					fill="#FCFCFF"
				/>
			</svg>
			<p class="ml-2.5 text-white">Cours</p>
		</div>
		<div class="w-full h-96 bg-black"></div>
		<div class="w-full h-24 bg-card-course flex">
			<div class="w-1/2 flex justify-center items-center">
				<p>Détails du cours</p>
			</div>
			<div class="w-1/2 flex justify-center items-center">
				<p>Ressources cours</p>
			</div>
		</div>
		<div
			class="h-full w-full flex flex-col bg-card-course p-4 overflow-scroll pb-14"
		>
			<!-- SECTION 1 : VIDEOS -->
			<div>
				<div class="w-screen -mt-2 mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl ml-4">Section 1 : Vidéos</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Video - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Video - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Video - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" />
				</div>
			</div>

			<!-- SECTION 2 : COURS -->
			<div class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl ml-4">Section 2 : Cours</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Cours - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Cours - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Cours - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" />
				</div>
			</div>

			<!-- SECTION 3 : ARTICLES -->
			<div class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl ml-4">Section 3 : Articles</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Articles - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Articles - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Articles - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" />
				</div>
			</div>

			<!-- SECTION 4 : AUDIO -->
			<div class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl ml-4">Section 4 : Audio</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Audio - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Audio - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Audio - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" />
				</div>
			</div>

			<!-- SECTION 5 : IVY LEAGUE -->
			<div class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl ml-4">Section 5 : Ivy League</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Ivy League - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Ivy League - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Ivy League - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" />
				</div>
			</div>

			<!-- SECTION 6 : LIVRES -->
			<div class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl ml-4">Section 6 : Livres</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Livre - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Livre - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Livre - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" />
				</div>
			</div>

			<!-- SECTION 7 : EXERCICES -->
			<div class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl ml-4">Section 7 : Exercices</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Exercice - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Exercice - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Exercice - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" />
				</div>
			</div>

			<!-- SECTION 8 : CHEAT SHEET -->
			<div class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl ml-4">Section 8 : Cheat Sheet</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Cheat Sheet - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Cheat Sheet - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Cheat Sheet - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" />
				</div>
			</div>

			<!-- SECTION 9 : OUTILS / MATERIEL -->
			<div class="mt-4">
				<div class="w-screen mb-2 border-b-2 border-gray-300 -ml-4">
					<h4 class="text-xl ml-4">Section 9 : Outils - Matériel</h4>
					<p class="text-xs mb-2 ml-4">3 units - 15 min</p>
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Outils - Matériel - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Outils - Matériel - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" checked />
				</div>
				<div class="flex justify-between items-center py-2">
					<div>
						<p>1. Introduction</p>
						<p class="text-xs">Outils - Matériel - 5 min</p>
					</div>
					<input class="w-6 h-6 mr-2" type="checkbox" />
				</div>
			</div>
		</div>
	</div>
</template>
