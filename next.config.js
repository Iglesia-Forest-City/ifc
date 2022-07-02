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
};

module.exports = nextConfig;
