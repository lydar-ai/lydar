import baseConfig from '@lydar/ui/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [baseConfig],
}
export default config
