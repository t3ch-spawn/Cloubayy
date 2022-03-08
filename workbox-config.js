module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{css,js,gif,png,jpg}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};