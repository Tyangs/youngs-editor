const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	env: {
		es6: true,
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
	extends: ['prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
	},
});
