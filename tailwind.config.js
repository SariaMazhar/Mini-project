/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: This 'content' array tells Tailwind where your classes are.
  content: [
    // Scans your root HTML file (index.html)
    "./index.html", 
    // Scans all files in the 'src' folder with extensions js, ts, jsx, or tsx
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}