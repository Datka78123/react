import { useContext } from "react";
import { ThemeOfPage } from './App';

function Blog(props){
    const { theme, setTheme } = useContext(ThemeOfPage);

    return(
        <div className={theme === "light" ? 'bg-[#9D4EDD] rounded-xl p-4 text-[#fff] w-[40vw] my-4' :'bg-[#5A189A] rounded-xl p-4 text-[#fff] w-[40vw] m-4'}>
            <h1 className="font-bold text-[20px]">{props.title}</h1>
            <p>{props.text}</p>
            <a href="#" className="text-[#0096c7]">view more</a>
        </div>
    )
}


export default Blog