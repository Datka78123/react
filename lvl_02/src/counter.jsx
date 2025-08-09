import React,{useState} from "react"


function Counter(){

    const [count, setCount] = useState(0)

    const add = () =>{
        setCount(c=> c + 1)
    }

    
    const decrease = () =>{
        setCount(c=> c - 1)
    }

    const zero = () =>{
        setCount(0)
    }

    return(
        <div className="m-auto w-[350px] h-[300px] rounded-[18px] text-center mt-[350px] bg-[#0f172a] text-[#f8fafc]">
            <h1 className="text-[45px] font-bold pt-[30px]">{count}</h1>
            <div className="mt-[60px]">
                <button onClick={add} className="w-[80px] h-[80px] text-[40px] bg-[#22c55e] rounded-[18px] m-[5px]">+</button>
                <button onClick={decrease} className="w-[80px] h-[80px] text-[40px] bg-[#ef4444] rounded-[18px] m-[5px]">-</button>
                <button onClick={zero} className="w-[80px] h-[80px] text-[40px] bg-[#f97316] rounded-[18px] m-[5px]">c</button>
            </div>
        </div>
    )
}

export default  Counter