import { useState } from 'react';
import AllTodos from './AllTodos';

const TodoList = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthName = monthNames[month - 1];
    let year = newDate.getFullYear();
    const newTodo = {
      date: `${date}-${monthName}-${year}`,
      title: data
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
    setData("");
  };

  return (
    <>
      <div>
        <div><p className='text-3xl font-bold'>My To Do Lists</p></div>
        <div className='bg-[#AA00D9] mt-4 h-28 items-center flex justify-center'>
          <div>
            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row'>
              <input onChange={handleInput} value={data} type='text' placeholder='Title...' className='h-[40px] w-[250px] text-xl p-3'/>
              <button type='submit' className='btn border border-x-0 border-y-0 text-white px-[10px] h-[40px] border-black bg-sky-500 hover:bg-sky-700'>ADD</button>
            </form>
          </div>
        </div>
      </div>
      <AllTodos todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoList;
