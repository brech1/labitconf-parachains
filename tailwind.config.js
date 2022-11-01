/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,md}"],
    theme: {
        extend: {
            fontFamily: {
                neueMachina: ["NeueMachina"],
                unbounded: ["Unbounded"],
            },
            colors: {
                polkadot: "#e6007a",
            },
        },
    },
    plugins: [],
};
