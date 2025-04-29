/** @type {import('tailwindcss').Config} */
import { CustomSpacing } from '~/types/Spacing';

const size: CustomSpacing = {};

/**
 * The for loop that will add 1px to 200px as values we can use like so; gap-5px.
 * The applied (px) value will be returned in rem, the rem calculation is based on a base value of 16px.
 */
for (let i = 1; i <= 200; i++) {
  size[`${i}px`] = `${i * 0.0625}rem`;
}
export default {
  content: [],
  theme: {
    extend: {
      spacing: (() => size)(),
      fontSize: (() => size)(),
      lineHeight: (() => size)(),
      borderRadius: (() => size)(),
      strokeWidth: (() => size)(),
    },
  },
  plugins: [],
}

