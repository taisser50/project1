import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {

       fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      animation: {
        "clip-from-top-animation": "clip 3.5s ease-in-out forwards",
      },
      keyframes: {
        "clip": {
          "0%": { 'clip-path': "ellipse(100% 100% at 50% 50%)" },
          "100%": { 'clip-path': "ellipse(160% 160% at 50% 160%)" },
        },
      },

 
    },
  },
});
