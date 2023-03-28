import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/config/vitest/setup.ts',
    reporters: 'verbose',
    clearMocks: true,
    coverage: {
      provider: 'c8',
      all: true,
      exclude: [
        '**/src/@types/**',
        '**/src/stories/**',
        '**/.storybook/**',
        '**/src/tests/**',
        '**/dist/**',
        '**/node_modules/**',
        '**/src/config/**',
        '**/public/**',
        '**/server/**',
        '**/vite.config.ts',
        '**/src/App.tsx',
        '**/src/main.tsx',
        '**/src/vite-env.d.ts',
        '**/src/styles/**',
        '**/src/**/types.ts',
      ],
    },
  },
});
