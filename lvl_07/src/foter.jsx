

import { useContext } from "react";
import { ThemeOfPage } from './App';

function Footer() {
    const { theme } = useContext(ThemeOfPage);

    return (
        <footer className={theme === 'light'  ? "bg-[#9D4EDD] text-white p-5 flex flex-col md:flex-row justify-between items-center" : "bg-[#10002B] text-white p-5 flex flex-col md:flex-row justify-between items-center"}>
            
            <p className="text-sm">&copy; 2025 Blog Web.training on react.</p>
            
            <div className="flex mt-2 md:mt-0 space-x-4">
                <a href="#" className="hover:underline hover:text-gray-300 transition">Home</a>
                <a href="#" className="hover:underline hover:text-gray-300 transition">Blogs</a>
                <a href="#" className="hover:underline hover:text-gray-300 transition">About</a>
                <a href="#" className="hover:underline hover:text-gray-300 transition">Contact</a>
            </div>
        </footer>
    )
}

export default Footer;
