module.exports = {
  safelist: [
    {
      pattern: /grid-cols-.+/,
    },
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
