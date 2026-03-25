import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 bottom-4 right-2 fixed rounded-full border border-gray-300 hover:cursor-pointer dark:border-gray-600 
                 bg-white dark:bg-gray-800 hover:scale-110 transition-all"
    >
      {theme === "light" ? (
        <Moon size={20} className="text-white-700" />
      ) : (
        <Sun size={20} className="text-yellow-300" />
      )}
    </button>
  );
}
