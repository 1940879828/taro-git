import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import json from "@rollup/plugin-json";

const plugins = [
    typescript({
        tsconfig: './tsconfig.prod.json',
    }),
    json(),
    commonjs(),
    resolve({
        extensions: ['.ts', '.js']
    })
]

export default {
    input: './src/extension.ts',
    output: { 
        dir: './out/extension',
        format: 'cjs',
        sourcemap: true,
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'src'
    },
    plugins,
    watch: process.env.WATCH === 'true' ? {
        include: 'src/**',
        clearScreen: false
    } : false
}