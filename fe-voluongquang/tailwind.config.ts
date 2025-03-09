import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                cairo: ['Cairo', 'sans-serif'],
                playfair: 'var(--font-playfair)',
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                customGreen: 'rgb(10, 209, 0)',
            },
            keyframes: {
                bgChange: {
                    '0%': {
                        backgroundImage: "url('/home/green-slide-01.jpg')",
                    },
                    '100%': {
                        backgroundImage: "url('/home/green-slide-02.jpg')",
                    },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
