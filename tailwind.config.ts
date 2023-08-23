import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.png')"
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace']
      }
    }
  },
  plugins: []
}
export default config
