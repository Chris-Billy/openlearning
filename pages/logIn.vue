<template>
	<div class="container">
		<div class="container_top">
			<img src="@/static/LogoOpenLearning2_1.png" alt="" />
			<div class="punchline">
				<h1>OpenLearning</h1>
				<p>L'accès au savoir n'importe où, n'importe quand et gratuitement.</p>
			</div>
		</div>
		<div class="container_bottom">
			<form @submit.prevent="login">
				<div class="style">
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="20" height="20" fill="white" />
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3.33325 4.16667C2.87682 4.16667 2.49992 4.54357 2.49992 5V15C2.49992 15.4564 2.87682 15.8333 3.33325 15.8333H16.6666C17.123 15.8333 17.4999 15.4564 17.4999 15V5C17.4999 4.54357 17.123 4.16667 16.6666 4.16667H3.33325ZM0.833252 5C0.833252 3.6231 1.95635 2.5 3.33325 2.5H16.6666C18.0435 2.5 19.1666 3.6231 19.1666 5V15C19.1666 16.3769 18.0435 17.5 16.6666 17.5H3.33325C1.95635 17.5 0.833252 16.3769 0.833252 15V5Z"
							fill="#FFD260"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.983964 4.52208C1.24789 4.14504 1.7675 4.05335 2.14454 4.31728L9.99999 9.81609L17.8554 4.31728C18.2325 4.05335 18.7521 4.14504 19.016 4.52208C19.2799 4.89913 19.1882 5.41873 18.8112 5.68266L10.4779 11.516C10.1909 11.7168 9.80904 11.7168 9.52211 11.516L1.18877 5.68266C0.81173 5.41873 0.720035 4.89913 0.983964 4.52208Z"
							fill="#FFD260"
						/>
					</svg>
					<input v-model="email" type="text" placeholder="Email" />
				</div>
				<div class="style">
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
							d="M4.16675 9.99998C3.70651 9.99998 3.33341 10.3731 3.33341 10.8333V16.6666C3.33341 17.1269 3.70651 17.5 4.16675 17.5H15.8334C16.2937 17.5 16.6667 17.1269 16.6667 16.6666V10.8333C16.6667 10.3731 16.2937 9.99998 15.8334 9.99998H4.16675ZM1.66675 10.8333C1.66675 9.4526 2.78604 8.33331 4.16675 8.33331H15.8334C17.2141 8.33331 18.3334 9.4526 18.3334 10.8333V16.6666C18.3334 18.0474 17.2141 19.1666 15.8334 19.1666H4.16675C2.78604 19.1666 1.66675 18.0474 1.66675 16.6666V10.8333Z"
							fill="#FFD260"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M10 2.49998C9.11594 2.49998 8.2681 2.85117 7.64298 3.47629C7.01786 4.10141 6.66667 4.94926 6.66667 5.83331V9.16665C6.66667 9.62688 6.29357 9.99998 5.83333 9.99998C5.3731 9.99998 5 9.62688 5 9.16665V5.83331C5 4.50723 5.52678 3.23546 6.46447 2.29778C7.40215 1.3601 8.67392 0.833313 10 0.833313C11.3261 0.833313 12.5979 1.3601 13.5355 2.29778C14.4732 3.23546 15 4.50723 15 5.83331V9.16665C15 9.62688 14.6269 9.99998 14.1667 9.99998C13.7064 9.99998 13.3333 9.62688 13.3333 9.16665V5.83331C13.3333 4.94926 12.9821 4.10141 12.357 3.47629C11.7319 2.85117 10.8841 2.49998 10 2.49998Z"
							fill="#FFD260"
						/>
					</svg>
					<input
						v-model="password"
						type="password"
						placeholder="Mot de passe"
					/>
				</div>
				<div v-if="error" class="text-red-500">
					{{ error }}
				</div>
				<button class="buttons" type="submit">Se connecter</button>
			</form>
			<button class="buttons google">Se connecter avec Google</button>
			<button class="buttons newAcc">Je n'ai pas encore de compte</button>
			<p class="copyright">© OpenLearning</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			error: ''
		}
	},
	methods: {
		async login() {
			try {
				await this.$auth.loginWith('local', {
					data: {
						email: this.email,
						password: this.password
					}
				})
				this.$router.push('/home')
			} catch (e) {
				this.error = e.response.data.message
			}
		}
	}
}
</script>

<style scoped>
.container {
	height: 100vh;
	width: 100vw;
	background: rgb(117, 117, 117);
}
.container_top {
	display: flex;
	height: 40%;
	width: 100vw;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: center;
}
.punchline {
	margin-top: 5%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: white;
	justify-content: space-evenly;
}
.punchline p {
	margin-top: 5%;
	font-size: 15px;
	width: 75%;
}
.container_bottom {
	display: flex;
	height: 60%;
	flex-direction: column;
	width: 100vw;
	background: #e6e6e6;
	border-radius: 30px 30px 0 0;
	align-items: center;
	padding: 25px 25px 0 25px;
	justify-content: center;
}
.container_bottom form {
	display: flex;
	flex-direction: column;
	width: 85%;
}
.style {
	position: relative;
	background-color: white;
	height: 55px;
	border: none;
	border-radius: 10px;
	margin-bottom: 20px;
}
.style input {
	width: 85%;
	height: 100%;
	border: none;
	margin-left: 50px;
	background-color: transparent;
	outline: none;
}
.style svg {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	margin-left: 15px;
}
.buttons {
	height: 55px;
	border: none;
	border-radius: 10px;
	margin-bottom: 20px;
	padding: 15px;
	background-color: #ffd260;
	color: #464646;
	font-size: medium;
	text-align: center;
}
.google {
	width: 85%;
	background-color: #ff8181;
	color: white;
}
.newAcc {
	background-color: #a0a0a0;
	font-size: small;
	color: white;
}
.copyright {
	color: #91919f;
	position: absolute;
	bottom: 1%;
	font-size: small;
}
</style>
