<template>
	<div class="reco_card">
		<div class="card">
			<div class="left_card">
				<div class="card_title">
					<p>{{ CardTitle }}</p>
				</div>
				<div class="card_infos">
					<div class="card_stars">
						<img src="~/static/star.png" />
						<p>{{ nbStar }}</p>
					</div>
					<div class="card_owner">
						<div class="separator"></div>
						<div class="owner_text">
							<p>Par {{ Owner }}</p>
						</div>
						<div class="separator"></div>
					</div>
					<div clas="card_cat">
						<div class="catego">
							<p>{{ Category }}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="right_card">
				<img src="~/static/template_image2.png" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'RecommandedCards',
	props: ['CardTitle', 'nbStar', 'Owner', 'Category']
}
</script>
<style scoped>
.reco_card {
	display: flex;
	justify-content: center;
	flex-direction: row;
}
.card {
	width: 90%;
	height: 120px;
	margin-bottom: 5%;
	display: flex;
	border-radius: 20px;
	background: white;
	flex-direction: row;
}
.left_card {
	height: 100%;
	width: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.card_title {
	font-family: 'DM Sans', sans-serif;
	font-size: 14px;
	width: 90%;
	height: 20%;
	overflow: hidden;
}
.card_title p {
	font-family: 'DM Sans', sans-serif;
	font-size: 14px;
	white-space: nowrap;
	/* animation: scrollingText 5s linear infinite;
	animation-direction: alternate; */
}
.card_stars {
	display: flex;
	justify-content: space-evenly;
	flex-direction: row;
	width: 25%;
}
.card_stars img {
	height: 13px;
	width: 13px;
}
.card_stars p {
	font-size: 12px;
}
.separator {
	height: 5px;
	width: 5px;
	border-radius: 9000px;
	background: #91919f;
	margin-left: 5px;
	margin-right: 5px;
}
.card_owner {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin-left: -5px;
}
.owner_text {
	font-size: 12px;
	color: #91919f;
	display: flex;
	flex-direction: row;
}
.owner_text p {
	overflow: hidden;
	width: 100%;
}
.card_infos {
	display: flex;
	flex-direction: row;
	width: 100%;
}
.catego p {
	font-size: 12px;
	color: #91919f;
}
.right_card {
	height: 100%;
	width: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.right_card img {
	height: 75px;
	width: 75px;
	border-radius: 15px;
}

/* @keyframes scrollingText {
	0% {
		transform: translate(2%, 0);
	}
	100% {
		transform: translate(-30%, 0);
	}
} */
</style>
