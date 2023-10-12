import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "gpgp-blue" : "#86B8D1",
        "gpgp-navtext": "#8C0222",
        "gpgp-navhover": "#D9D9D9",
        "gpgp-darkblue": "#1F2D5A",
        "txt-blue": "#1F2D5A",
        "bg-start": "#86B8D1",
        'bg-button': "#BAA628",
        'bg-footer': "#497591",
      },
      backgroundImage: {
        'hero-back': "url('/images/gpgp-bg.png')",
        'hero-logo': "url('/images/gpgp-logo.png')",
      }
    },
  },
  plugins: [],
}
export default config
