import { create } from "zustand";
import { ApiCreateToDo, ApiGetToDo, ApiDeleteToDo } from "../apis/todoApi";
import { persist } from "zustand/middleware";

const useToDoStore = create((set) => ({
  ToDos: [],
  ToDo: null,
  actionGetTodo : async() => {
    const res = await ApiGetToDo()
    set({ToDos : res.todos})
  },
  actionCreateToDo: async (input) => {
    try {
      const res = await ApiCreateToDo(input);
     
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useToDoStore;
