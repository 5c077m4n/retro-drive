module.exports = {
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},
	globals: {
		env: 'readonly',
	},
	rules: {
		indent: ['warn', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['warn', 'single'],
		semi: ['error', 'always'],
	},
};
