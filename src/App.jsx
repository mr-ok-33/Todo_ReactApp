// import { todo } from "node:test";
import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const change = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const handleAddorUpdate = () => {
    // console.log("Task added", task);
    if (input.trim() === '') return alert("Enter the task..!!");
    if (editIndex !== null) {
      const updateTodo = [...task];
      updateTodo[editIndex] = input;
      setTask(updateTodo);
      setEditIndex(null);
    } else {
      setTask([...task, input]);
      // console.log("Task Added", addTodo);
    }
    setInput('');

  }
  const handleEdit = (index) => {
    setInput(task[index]);
    setEditIndex(index);
  }
  const handleDelete = (index) => {
    const filterTask = task.filter((_, i) => i !== index)
    setTask(filterTask);

    if (editIndex !== null && editIndex === index) {
      setEditIndex(null);
      setInput('');
    }
  }

  return (
    <div className="">
      <div className="mt-[150px] flex justify-center text-center my-auto font-semibold text-black border rounded-sm max-w-[430px] h-[60px] mx-auto px-2 text-[20px]">
        <input
          type="text"
          placeholder="Enter Task"
          value={input}
          onChange={change}
          className="border outline-0 w-full mx-1 my-2 px-1"
        />
        <button className="border px-3 text-center my-2 cursor-pointer" onClick={handleAddorUpdate}>
          {editIndex !== null ? "UPDATE" : "ADD"}
        </button>
      </div>

      <div className="">
        {
          task.map((value, index) => {
            return (
              <div key={index} className="mt-2 flex justify-between items-center my-auto font-semibold text-black border rounded-sm max-w-[430px] h-[60px] mx-auto px-2 text-[20px]">
                <div className="text-[19px] border outline-0 w-full mx-1 my-3 px-1 h-[40px] text-start pt-1">{value}</div>
                <div className="flex gap-1">
                  <button className="text-[19px] border px-3 text-center my-2 cursor-pointer h-[40px]" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="text-[19px] border px-3 text-center my-2 cursor-pointer h-[40px]" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}

export default TodoApp;