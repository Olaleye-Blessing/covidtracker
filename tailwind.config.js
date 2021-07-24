module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            blue: {
                light: "#e8f5ff",
                lighter: "#abd6f7",
                DEFAULT: "#0c90f5",
            },
            green: {
                DEFAULT: "#0feb0c",
            },
            white: {
                DEFAULT: "#fff",
            },
            red: {
                light: "#faa2b0",
                DEFAULT: "#f00",
            },
            black: {
                overlay: "rgba(0, 0, 0, 0.8)",
                DEFAULT: "#000",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
