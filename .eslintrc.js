module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/display-name': [0],
		'react/prop-types': ['error', { ignore: ['navigation'] }]
	}
};
