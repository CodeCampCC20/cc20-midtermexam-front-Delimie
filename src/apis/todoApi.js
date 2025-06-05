import axios from "axios";

const baseURL = "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com"

export const fetchLogin = async (input) => {
  const res = await axios.post(`${baseURL}/api/V1/auth/login`, input);
  console.log(res)
  return res.data;
};

export const ApiCreateToDo = async (input) => {
  const res = await axios.post(`${baseURL}/api/V1/todos`, input);
  return res.data;
};

export const ApiGetToDo = async () => {
  const res = await axios.get(`${baseURL}/api/V1/todos/43`);
  return res.data;
};

export const ApiDeleteToDo = async (id) => {
  await axios.delete(`${baseURL}/api/V1/todos/${id}/43`);
};

export const fetchUpdateToDo = async (id, data) => {
  await axios.patch(`${baseURL}/${id}`, data);
};
