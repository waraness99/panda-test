import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  jsxFramework: 'react',
  include: ['./apps/**/*.{ts,tsx}', './libs/**/*.{ts,tsx}'],
  outdir: './libs/styled-system/src/lib/__generated__',
  exclude: [],
});
