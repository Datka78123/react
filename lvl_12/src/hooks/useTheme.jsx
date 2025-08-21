import { useState, useEffect } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.style.background = theme === "light" ? "#fff" : "#111";
        document.body.style.color = theme === "light" ? "#111" : "#fff";
    }, [theme]);

    const toggleTheme = () =>
        setTheme((t) => (t === "light" ? "dark" : "light"));

    return { theme, toggleTheme };
}
