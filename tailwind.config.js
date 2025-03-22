import defaultTheme from "tailwindcss/defaultTheme";



/** @type {import('tailwindcss').Config} */
export default {

    theme: {
        extend: {
            backgroundImage: {
                "chat-one": "url('/public/assets/images/background/chat1.png')",
            },
            zIndex: {
                10001: 10001,
                10000: 10000,
                999: 999,
            },
            fontFamily: {
                inter: ["inter", ...defaultTheme.fontFamily.sans],
                kalam: ["Kalam", ...defaultTheme.fontFamily.sans],
                calistoga: ["Calistoga", ...defaultTheme.fontFamily.sans],
                Arimo: ["Arimo", ...defaultTheme.fontFamily.sans],
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                primary: {
                    DEFAULT: "#ffc000",
                    50: "#fff8e1",
                    100: "#ffecb3",
                    200: "#ffe082",
                    300: "#ffd54f",
                    400: "#ffca28",
                    500: "#ffc000",
                    600: "#ffb300",
                    700: "#ffa000",
                    800: "#ff8f00",
                    900: "#ff6f00",
                    dark: "#ffb300",
                },
                secondary: {
                    DEFAULT: "#272a33",
                    50: "#e6e8ea",
                    100: "#ccd1d4",
                    200: "#b3b9bf",
                    300: "#99a2aa",
                    400: "#808b95",
                    500: "#666e78",
                    600: "#4d525a",
                    700: "#33363d",
                    800: "#272a33",
                    900: "#1b1d22",
                    dark: "#1b1d22",
                },
            }
        },

        fontSize: {
            xs: ["12px", "14px"],
            sm: ["14px", "20px"],
            tiny: ["16px", "24px"],
            base: ["18px", "28px"],
            lg: ["20px", "28px"],
            xl: ["20px", "24px"],
            "2xl": ["24px", "28px"],
            "3xl": ["32px", "36px"],
            "4xl": ["40px", "48px"],
            "5xl": ["48px", "56px"],
            "6xl": ["60px", "64px"],
            "7xl": "5rem",
        },
    },
};
