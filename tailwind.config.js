module.exports = {
    mode: "jit",
    importance: true,
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                "autoFit": "repeat(auto-fit, minmax(15rem, 1fr))",
            },
        },
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
                primary: "#eceff1",
            },
            red: {
                light: "#faa2b0",
                DEFAULT: "#f00",
                primary: "#ff0266",
            },
            black: {
                // overlay: "rgba(0, 0, 0, 0.8)",
                DEFAULT: "#000",
                primary: "#222222",
            },
            orange: {
                DEFAULT: "#f09022",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
