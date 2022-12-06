/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'general-text-size': '14px',
      'item-title': '16px',
      'item-subtitle': '12px',
      'item-time': '12px',
      'item-payment': '16px',
    },
    extend: {
      colors: {
        'primary-color': '#f5f5fa',
        'secondary-color': '#155ed4',
        'title-color': '#17171a',
        'text-color': '#606066',
      },
      borderRadius: {
        'general-radius':'12px',
      },
    },
  },
  plugins: [],
}
