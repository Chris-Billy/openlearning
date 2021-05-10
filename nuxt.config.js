export default {
	server: {
		port: 8000 // default: 3000
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'openlearning',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		// https://auth.nuxtjs.org/
		'@nuxtjs/auth-next'
	],

	serverMiddleware: [
		{
			path: '/api',
			handler: '~/backend/api.js'
		}
	],

	axios: {
		baseURL: 'http://localhost:8000/api/'
	},

	auth: {
		localStorage: false,
		redirect: {
			login: '/login',
			logout: '/login',
			callback: '/login',
			home: '/home'
		},
		strategies: {
			local: {
				token: {
					property: 'access_token',
					required: true,
					type: 'Bearer'
				},
				endpoints: {
					login: { url: 'login', method: 'post' },
					user: { url: 'user', method: 'get', property: 'user' },
					logout: false
				}
			}
		}
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en'
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
