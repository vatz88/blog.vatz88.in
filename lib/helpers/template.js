// const { SITE_DOMAIN } = require('./constants');

module.exports = {
	meta: [
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1',
		},
		{
			property: 'twitter:card',
			content: 'summary_large_image',
		},
		{
			property: 'twitter:site:id',
			content: '@vatz88',
		},
		// {
		// 	property: 'twitter:image',
		// 	content: `./meta-image.jpg`,
		// },
		{
			property: 'og:type',
			content: 'website',
		},
		{
			property: 'og:image:width',
			content: '1200',
		},
		{
			property: 'og:image:height',
			content: '628',
		},
		// {
		// 	property: 'og:image',
		// 	// fb sharing debugger gives warning on relative paths
		// 	content: `./meta-image.jpg`,
		// },
		{
			name: 'author',
			content: 'Vatsal Joshi',
		},
		{
			name: 'theme-color',
			content: '#DD2C00',
		},
	],
	css: ['/static/css/highlight.css'],
	enableDisqus: true,
};
