import { BookHeart } from "lucide-react";
import React, { useEffect, useState } from "react";
import useToDoStore from "../stores/todoStore";
import { toast } from "react-toastify";
import { ApiDeleteToDo, ApiEditToDo } from "../apis/todoApi";

function MyToDo() {
  const initialInput = {
    taskName: "",
    userId: 43,
  };
  const ToDos = useToDoStore((state) => state.ToDos);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(initialInput);
  const actionCreateToDo = useToDoStore((state) => state.actionCreateToDo);
  const [isEdit, setIsEdit] = useState(false);
  const actionGetTodo = useToDoStore((state) => state.actionGetTodo);

  useEffect(() => {
    actionGetTodo();
  }, []);

  const addTodo = async (input) => {
    try {
      if (input.taskName.trim()) {
        await actionCreateToDo(input);
        await actionGetTodo();
        setInput("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await ApiDeleteToDo(id);
      await actionGetTodo();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheck = async (id,completed) => {
    const newStatus = !completed;
    try {
      await ApiEditToDo(id,newStatus);
      await actionGetTodo();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    console.log(input);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  console.log(ToDos);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-500 to-slate-800">
      <div className="bg-white shadow-lg rounded-2xl p-12">
        <h1 className="mb-4 text-3xl text-center font-bold flex justify-between items-center">
          MY TO DO <BookHeart className="text-sm" />
        </h1>

        <div className="mb-4 flex">
          <input
            name="taskName"
            type="text"
            value={input.taskName}
            onChange={handleChange}
            placeholder="new task"
            className="flex-grow px-2 border rounded-l-lg"
          />

          <button
            onClick={() => addTodo(input)}
            className="bg-slate-600 text-white rounded-r-lg px-4 py-2"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {ToDos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center p-2 rounded-lg bg-slate-100 gap-2"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheck(todo.id,todo.completed)}
              />

              <span
                className={`flex-grow ${
                  todo.check ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {todo.taskName}
              </span>

              <button
                onClick={() => handleDelete(todo.id)}
                className="flex items-center bg-red-500 px-2 rounded text-white"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyToDo;
