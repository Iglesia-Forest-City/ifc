// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: {
			displayName: true,
			pure: true,
			fileName: false,
		},
	},
	rewrites: async () => [
		{
			source: '/live-radio',
			destination: `${process.env.RADIO_SERVER}${process.env.RADIO_SERVER_NAME}`,
		},
	],
	output: 'standalone',
};

module.exports = nextConfig;
