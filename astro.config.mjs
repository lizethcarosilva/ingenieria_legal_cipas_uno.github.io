// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://lizethcarosilva.github.io',
	base: '/ingenieria_legal_cipas_uno.github.io/',
	vite: { plugins: [tailwind()] }
});
