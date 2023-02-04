// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: {
			pure: true,
			fileName: false,
		},
	},
	redirects: async () => [
		{
			source: '/donacion',
			destination: '/donar',
			permanent: true
		}
	],
	rewrites: async () => [
		{
			source: '/live-radio',
			destination: `${process.env.RADIO_SERVER}${process.env.RADIO_SERVER_NAME}`,
		},
		{
			source: '/get-country',
			destination: 'https://www.cloudflare.com/cdn-cgi/trace'
		}
	],
	output: 'standalone',
	productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
