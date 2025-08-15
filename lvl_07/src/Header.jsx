import { useContext } from "react";
import { ThemeOfPage } from './App';
import heroimg from './img/daniele-levis-pelusi-Vey6fioB1eI-unsplash.jpg'
function Header(){
    const { theme, setTheme } = useContext(ThemeOfPage);
    return(
        <div>
            <div className={ theme === 'light' ? 'bg-[#9D4EDD] text-[#fff] h-15 p-5 flex justify-around sticky top-0 z-50 shadow-md' : 'shadow-md sticky top-0 z-50 bg-[#10002B] text-[#fff] h-15 p-5 flex justify-around'}>
            <h1>Blog Web</h1>
            <nav>
                <ul className='flex'>
                    <a href="#" className="mx-2 transform transition hover:scale-105"><li>Home</li></a>
                    <a href="#" className="mx-2 transform transition hover:scale-105"><li>Blogs</li></a>
                    <a href="#" className="mx-2 transform transition hover:scale-105" ><li>About</li></a>
                </ul>
            </nav>
            <button onClick={()=> setTheme(theme === 'light'? 'dark':'light')} className="cursor-pointer transition hover:scale-105">toggle theme</button>
        </div>
        <div>
            <img src={heroimg} alt="hero" className="w-[100vw] h-[500px] object-cover"/>
        </div>
        </div>
    )
}


export default Header