module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./styles/**/*.{css}"],
  theme: {
    extend: {
      colors: {
        creta: {
          900: '#0b0b0b',
          800: '#151515',
          700: '#2a2a2a',
          accent: '#cfc8c1'
        }
      },
      boxShadow: {
        glow: '0 6px 30px rgba(0,0,0,0.6)',
        soft: '0 8px 30px rgba(2,6,23,0.6)'
      }
    }
  },
  plugins: []
}
