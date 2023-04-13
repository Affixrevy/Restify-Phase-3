/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        BACKGROUND_COLOR_1: 'rgb(48, 45, 49)',
        BACKGROUND_COLOR_2: 'rgb(53, 55, 57)',
        POPUP_BACKGROUND_COLOR: 'rgb(50, 50, 55)',
        ACCENT_COLOR: 'rgb(31, 128, 235)',
        FONT_COLOR_1: 'rgb(232, 236, 239)',
        FONT_COLOR_2: 'rgb(185, 190, 193)',
        TEXT_FIELD_COLOR: 'rgb(36, 36, 40)',
        BUTTON_COLOR: 'rgb(87, 89, 90)',
        HYPERLINK_COLOR: 'rgb(140, 200, 250)',
        STROKE_COLOR: 'rgb(30, 30, 30)'
      }
    },
  },
  plugins: [],
}