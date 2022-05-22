import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const { name, version, author, license } = pkg;

const banner = `/**
* ${name} v${version}
* (c) ${new Date().getFullYear()} ${author}
* @license ${license}
*/
`;

export default {
	input: 'src/index.ts',
	output: [
		{
			banner,
			file: 'dist/index.cjs',
			format: 'cjs',
		},
		{
			banner,
			file: 'dist/index.mjs',
			format: 'es',
		},
	],
	plugins: [commonjs(), typescript()],
};
