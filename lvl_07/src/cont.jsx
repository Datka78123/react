import { useContext } from "react";
import { ThemeOfPage } from './App';
import Blog from './blog'

function Cont(){
    const { theme, setTheme } = useContext(ThemeOfPage);
    return(
        <div className={ theme ==='light'? "m-auto w-[100wv] h-[100vh] bg-[#C77DFF] p-5" : 'w-[100wv] h-[100vh] bg-[#240046] p-5'}>
            <h1 className="text-center text-[#fff] font-bold text-[30px]">blogs</h1>
            <div className="flex">
                <div className="flex flex-col m-auto">
                <Blog
                title = "Why the BMW E46 Will Always Be a Legend" 
                text = 'There’s something timeless about the E46. It’s not just a car — it’s an era. From the smooth inline-six to the perfect proportions, it’s the kind of ride that makes you fall in love with driving all over again.'
                />
                <Blog
                title = "How I Learned to Code Without Losing My Mind"
                text = 'Coding felt like learning a new language… except the teacher was my laptop and it kept yelling at me in red error messages. But after sticking with it, I realized every bug is just a puzzle waiting to be solved.'
                />
                <Blog
                title =  "The Magic of Late-Night Drives"
                text = 'City lights, empty roads, music on blast — there’s nothing like a 2 AM cruise to clear your head. Some nights are meant for speed, others just for the vibe.'
                />   
            </div>
            <div className="flex flex-col">
                <Blog
                title =  "Top 5 JavaScript Tricks You Didn’t Know You Needed"
                text = 'From optional chaining to array destructuring, JavaScript is like that friend who always has a hidden trick up their sleeve. Here’s 5 features that’ll make your code cleaner instantly.'
                />      
                <Blog
                title = "How Basketball Made Me Better at Life"
                text = 'The court taught me more than just dribbling. Teamwork, patience, resilience — and yeah, the occasional trash talk. Life’s a game, and you’ve gotta play it smart.'
                />      
                <Blog
                title =  "The Rise of Dark Mode Design"
                text = 'Dark mode isn’t just a trend — it’s a whole vibe. It’s easier on the eyes, looks modern, and makes colors pop in a way light mode just can’t match.'
                />            
            </div>
            </div>
        </div>
    )
}


export default Cont