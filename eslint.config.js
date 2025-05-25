import withNuxt from './.playground/.nuxt/eslint.config.mjs';

/**
 * Extend the Nuxt config with Prettier integration
 */
export default [
	...withNuxt(),
	{
		plugins: { prettier: require('eslint-plugin-prettier') },
		extends: ['plugin:prettier/recommended'],
		rules: {
			'prettier/prettier': 'error',
		},
	},
];
