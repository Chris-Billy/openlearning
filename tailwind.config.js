module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		borderRadius: {
			none: '0',

			sm: '0.125rem',

			DEFAULT: '0.25rem',

			DEFAULT: '4px',

			md: '0.375rem',

			lg: '0.6rem',

			full: '9999px',

			large: '30px',

			lg2: '1rem'
		},
		backgroundColor: (theme) => ({
			...theme('colors'),

			primary: '#757575',

			'bg-card': '#f1f1fa',

			'bg-dark-card': '#161719',

			'button-yellow': '#ffd260',

			'button-google': '#FF8181',

			'button-no-account': '#A0A0A0',

			'card-course': '#FCFCFF'
		}),
		maxWidth: {
			'1/4': '25%',

			'1/2': '50%',

			'3/4': '75%',

			'80/100': '80%'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
