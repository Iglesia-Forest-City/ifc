module.exports = {
	extends: [
		'next',
		'next/core-web-vitals',
		'prettier',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['prettier', '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.eslint.json',
		tsConfigRootDir: __dirname,
	},
	rules: {
		'@typescript-eslint/consistent-type-exports': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
	},
};
