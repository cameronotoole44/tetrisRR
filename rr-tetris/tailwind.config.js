/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this according to your file structure
  ],
  theme: {
    extend: {
      colors: {
        'tetris-gray': '#808080',
        'tetris-dark': '#282c34',
        'tetris-orange': '#fc812f',
        'tetris-yellow': '#ffff00',
        'tetris-blue': '#2a2afc',
        'tetris-pink': '#ff41d0',
        'tetris-green': '#56ff56',
        'tetris-light-blue': '#56d5ff',
        'tetris-red': '#ff0000',
      },
      fontFamily: {
        mono: ["'Kode Mono'", 'monospace'],
      },
    },
  },
  plugins: [],
};
