// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: '2025-05-24',

	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxt/test-utils',
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@pinia/nuxt',
		'@nuxtjs/i18n',
	],
	colorMode: {
		preference: 'system', // default theme
		dataValue: 'theme', // activate data-theme in <html> tag
		classSuffix: '',
	},
	tailwindcss: { exposeConfig: true },
});
