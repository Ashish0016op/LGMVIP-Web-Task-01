import { useState } from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const AllTodos = ({ todos, setTodos }) => {
    const [todoStates, setTodoStates] = useState(todos.map(() => false));

    const handleDone = (index) => {
        const newTodoStates = [...todoStates];
        newTodoStates[index] = !newTodoStates[index];
        setTodoStates(newTodoStates);
    }

    const handleDelete = (index) => {
        const filteredTodos = todos.filter((todo, id) => id !== index);
        setTodos(filteredTodos);
        setTodoStates(todoStates.filter((_, id) => id !== index));
    }

    return (
        <div className='bg-[#3A70F0] py-6 flex flex-col gap-5 px-8'>
            {todos.length===0 && <div className="text-white">please add todos... </div>}
            {
                todos.map((item, index) => {
                    return (
                        <div key={index} className={`${todoStates[index] ? "bg-green-300" : "bg-[#DDFDFD]"} flex justify-around px-6 py-3`}>
                            <div><p>{item.date}</p></div>
                            <p className={`text-2xl ${todoStates[index] && "line-through"}`}>{item.title}</p>
                            <div className='flex gap-1'>
                                {!todoStates[index] && <button onClick={() => handleDone(index)}><MdDone className='text-2xl' /></button>}
                                <button onClick={() => handleDelete(index)}><RxCross2 className='text-2xl' /></button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default AllTodos;
