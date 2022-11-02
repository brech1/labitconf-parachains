/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,md}"],
    theme: {
        extend: {
            fontFamily: {
                unbounded: ["Unbounded"],
            },
            colors: {
                polkadot: "#e6007a",
            },
        },
    },
    plugins: [],
};
