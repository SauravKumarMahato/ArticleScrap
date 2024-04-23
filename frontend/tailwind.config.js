import withMT from "@material-tailwind/react/utils/withMT";/** @type {import('tailwindcss').Config} */

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['system-ui', 'ui-sans-serif' ],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
    }
  },
  plugins: [],
});