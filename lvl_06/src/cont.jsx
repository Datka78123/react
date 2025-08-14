import { useContext } from "react";
import { ThemeOfPage } from './App';

function Content() {
    const { theme } = useContext(ThemeOfPage);

    return (
        <div className={theme === 'light'? "bg-[#F8F9FA] text-[343A40] p-4 roundedh-[93.5vw] w-[100%]":"bg-[#343A40] text-[#F8F9FA] p-4 rounded h-[93.5vw] w-[100%]"}>
            <p className="text-center">the current theme is: {theme}</p>
        </div>
    );
}

export default Content;
