import { defineConfig } from '@solidjs/start/config';

// Icons
import Icons from 'unplugin-icons/vite'; // Existing Icon Library (icones.js)
import solidSvg from 'vite-plugin-solid-svg'; // Custom Icons (SVG)

// Vite
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig as viteConfig } from 'vite';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '.');

export default defineConfig({
  vite: viteConfig({
    plugins: [solidSvg({ defaultAsComponent: true }), Icons({ compiler: 'solid' })],
    resolve: {
      alias: {
        '@': resolve(root, 'src'),
      },
    },
    envPrefix: 'PUBLIC_ENV__',
  }),
});
