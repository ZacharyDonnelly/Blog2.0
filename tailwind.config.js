const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */ module.exports = {
  theme: {
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ],
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
