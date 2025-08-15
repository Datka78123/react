import { useContext } from "react";
import { ThemeOfPage } from './App'
import heroimg from './img/daniele-levis-pelusi-Vey6fioB1eI-unsplash.jpg'
function Header() {
    const { theme, setTheme } = useContext(ThemeOfPage);

    return (
        <div className={ theme === 'light' ? "flex justify-around bg-[#CED4DA] text-[#212529] font-bold": "flex justify-around bg-[#212529] text-[#F8F9FA] font-bold"}>
            <h1 className={ theme === 'light' ? "m-4 ": "m-4 "}>hello</h1>
            <nav>
                <ul className="flex">
                    <a href="#"><li className="m-4">home</li></a>
                    <a href="#"><li className="m-4">about</li></a>
                    <a href="#"><li className="m-4">contanct</li></a>
                </ul>
            </nav>
            <button  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>toggle theme</button>
        </div>
    );
}

export default Header;
