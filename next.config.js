/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['localhost'],
		// Add any other image domains you need
	},
	// Enable experimental features if needed
	// experimental: {
	//   serverActions: true,
	// },
};

module.exports = nextConfig;
