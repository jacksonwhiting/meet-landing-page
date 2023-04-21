/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			textColor: {
				skin: {
					"hdg-pri": "#28283D",
					"content-pri": "#87879D",
					"accent-pri": "#4D96A9",
					"accent-sec": "#855FB1",
					"accent-pri-hover": "#8FE3F9",
					"accent-sec-hover": "#D9B8FF",
				},
			},
			backgroundColor: {
				skin: {
					"canvas-pri": "#FAFAFA",
					"fill-pri": "#4D96A9",
					"fill-sec": "#855FB1",
				},
			},
			fontFamily: {
				fraunces: ["Fraunces", "serif"],
				manrope: ["Manrope", "sans-serif"],
			},
			fontSize: {
				hdgL: ["80px", "80px"],
				hdgM: ["56px", "64px"],
				hdgS: ["32px", "40px"],
				bodyPri: ["18px", "32px"],
			},
		},
	},
	plugins: [],
};
