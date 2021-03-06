module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-text': 'var(--primary-text)',
        'secondary-text': 'var(--secondary-text)',
        accent: 'var(--accent)',
        'light-accent': 'var(--light-accent)',
    },
      animation: {
        'spin-once': 'spin 1s linear',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
      cursor: ['hover'],
    },
  },
  plugins: [],
}
