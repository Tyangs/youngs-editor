import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: './src/index.ts',
			name: 'YoungsImage',
			fileName: 'y-image',
			formats: ['umd'],
		},
	},
});
