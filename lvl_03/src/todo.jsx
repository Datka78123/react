
import {useState} from "react"

function Todo(){

    const[active, setActive] = useState('add')
    const [task, setTask] = useState(""); 
    const [tasks, setTasks] = useState([]); 

    const addTask = () => {
        if (task === '')return;
        setTasks([...tasks,task]);
        setTask('')
        setActive('list')
    }

    const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    };

        const tabs={
        add:<div className="py-[12px] w-[70%] m-auto text-center bg-[#FEF3C7] text-[#1F2937] rounded-b-xl">
                <h1 className="font-bold text-[18px]">add task</h1>
                <p className="mr-[29%]">task*</p>
                <input type="text" className="focus:outline-none w-[250px] h-[30px] px-[12px]" onChange={(e) => setTask(e.target.value)}/> <br />
                <button className="mt-[12px] bg-[#D97706] text-[#FFF7ED] font-bold p-[12px] rounded-xl" onClick={addTask}>add to list</button>
            </div>,
        list:<div className="py-[12px] w-[70%] m-auto text-center bg-[#FEF3C7] text-[#1F2937] rounded-b-xl">
                <h1 className="font-bold text-[18px]">task list</h1>
                <div>
                {tasks.length > 0 ? (
            <ul className="list-disc list-inside">
            {tasks.map((t, i) => (
                <li key={i} className="flex justify-between items-center px-[12px] border-b-[1px] border-t-[1px] border-[#f0e7c2]">
                    <span>{t}</span>
                    <button onClick={() => removeTask(i)}  className="ml-4 bg-red-500 text-white px-3 my-3 py-1 rounded-lg hover:bg-red-600">Remove</button>
                </li>
            ))}
            </ul>) : (
            <p>No tasks yet...</p>
            )}
                </div>
            </div>
    }

    return(
        <div>
            <div className="py-[12px] w-[70%] m-auto text-center mt-[10%] bg-[#D97706] text-[#FFF7ED] rounded-t-xl"> 
                <h1 className="text-[20px] font-bold">TO DO LIST</h1>
                <div className="py-[12px]">
                    <button className="mx-[12px] bg-[#FEF3C7] text-[#1F2937] font-bold p-[12px] rounded-xl" onClick={() => setActive('list')}>view list</button>
                    <button className="mx-[12px] bg-[#FEF3C7] text-[#1F2937] font-bold p-[12px] rounded-xl" onClick={() => setActive('add')}>add task</button>
                </div>
            </div>
            {tabs[active]}
        </div>
        
    )
}

export default Todo

