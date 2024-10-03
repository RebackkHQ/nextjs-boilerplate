import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
		viewportWidth: 1920,
		viewportHeight: 1080,
		screenshotOnRunFailure: true,
		video: true,
		videoCompression: 32,
	},
});
