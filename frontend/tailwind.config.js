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
                cardPrimary: 'var(--card-bg-primary)',
                cardSecondary: 'var(--card-bg-secondary)',
                buttonSecondary: 'var(--button-bg-secondary)',
            },
            colors: {
                primary: 'var(--text-primary)',
                dark: 'var(--text-dark)',
                secondary: 'var(--text-info)',
            },
            borderColor: {
                primary: 'var(--text-primary)',
            },
        },
    },
    plugins: [],
};
