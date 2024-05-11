import axios from "axios";

axios.defaults.baseURL = "https://database-8c79.onrender.com/";

export const getTodoList = async () => {
  const list = await axios.get("todos");
  return list.data;
};

export const getSingleTodo = async (id) => {
  const list = await axios.get(`todos/${id}`);
  return list.data;
};

export const putTodoList = async (payload) => {
  const putList = await axios.post("todos", payload);
  return putList.data;
};

export const deleteTodoList = async (id) => {
  const deleteList = await axios.delete(`todos/${id}`);
  return deleteList.data;
};

export const editTodoList = async (id, payload) => {
  const editList = await axios.put(`todos/${id}`, payload);
  return editList.data;
};

export const getUsers = async () => {
  const users = await axios.get("auth");
  return users.data;
};

export const putUsers = async (payload) => {
  const putUser = await axios.post("auth", payload);
  return putUser.data;
};
