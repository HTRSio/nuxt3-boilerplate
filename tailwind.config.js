//
// const defaults = require('tailwindcss/defaultTheme')

// Settings
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')

module.exports = {
  content: [],
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
}
