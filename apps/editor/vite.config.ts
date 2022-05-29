import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const joinPath = (dir: string) => path.join(__dirname, dir);

export default defineConfig({
	plugins: [react()],
	server: {
		open: true,
	},
	resolve: {
		alias: {
			'@': joinPath('src'),
		},
	},
});
