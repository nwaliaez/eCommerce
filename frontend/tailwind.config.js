/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                primary: 'var(--background-primary)',
                cardLight: 'var(--card-bg-light)',
                cardPrimary: 'var(--card-bg-primary)',
                cardSecondary: 'var(--card-bg-secondary)',
                buttonSecondary: 'var(--button-bg-secondary)',
                hoverPrimary: 'var(--hover-primary)',
                hoverSecondary: 'var(--hover-secondary)',
            },
            colors: {
                primary: 'var(--text-primary)',
                dark: 'var(--text-dark)',
                secondary: 'var(--text-info)',
                hoverPrimary: 'var(--hover-primary)',
            },
            borderColor: {
                primary: 'var(--text-primary)',
            },
        },
    },
    plugins: [],
};
