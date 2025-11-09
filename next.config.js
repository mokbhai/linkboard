/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	compiler: {
		styledComponents: {
			pure: true,
			displayName: true,
		},
	},
	images: {
		remotePatterns: [
			{
				hostname: 'api.qrserver.com',
				protocol: 'https',
			}
		],
		unoptimized: true, // Required for static export
	},
};

module.exports = nextConfig;
