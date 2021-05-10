<template lang="">
	<div class="card_container"><div class="card"> <div class="card_title"> <p
	class="card_text">{{ cardTitle }}</p> <img id="card_image"
	src="~/static/template_image.png" alt="" /> </div> <div
	class="advancement_card"> <img id="medal_card" src="~/static/medal.png"/> <div
	class="medal_text"> <p id="avancement">Avancement</p> <p id="percentage">{{
		percentage
	}}</p> </div> </div> <div class="advancement_bar"> <div class="bar_bg"> <div
	class="bar_bar"> </div> </div> </div></div></div>
</template>

<script>
export default {
	name: 'CourseProgression',
	props: ['cardTitle', 'percentage']
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {
	.card_container {
		display: flex;
		justify-content: center;
	}
	.card {
		background: #fcfcff;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		width: 90%;
		height: 200px;
		border-radius: 20px;
		margin-top: -20%;
		font-family: 'DM Sans', sans-serif;
	}
	.card_title {
		font-size: 13px;
		width: 100%;
		height: 20%;
		padding-top: 2%;
		display: flex;
		justify-content: space-around;
		flex-direction: row;
	}
	.card_text {
		width: 65%;
	}
	#card_image {
		height: 60px;
		width: 60px;
		border-radius: 15px;
	}
	.advancement_card {
		display: flex;
		width: 50%;
		padding-left: 3%;
		justify-content: space-evenly;
		align-items: center;
	}
	.medal_text {
		display: flex;
		flex-direction: column;
	}
	#medal_card {
		border-radius: 10px;
	}
	#avancement {
		font-size: 14px;
		color: #91919f;
	}
	#percentage {
		color: black;
	}
	.advancement_bar {
		height: 6%;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.bar_bg {
		background: #f1f1fa;
		width: 90%;
		border-radius: 50px;
	}
	.bar_bar {
		background: green;
		width: 10%;
		height: 100%;
		border-radius: 900px;
	}
}
</style>
