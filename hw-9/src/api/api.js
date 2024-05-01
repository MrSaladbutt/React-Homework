import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://mrsaladbutt.github.io/React-Homework/hw-9/db.json/'
    : 'http://localhost:3030';

axios.defaults.baseURL = baseURL;

export const getTodoList = async () => {
  const list = await axios.get('todos');
  return list.data;
};

export const putTodoList = async payload => {
  const putList = await axios.post('todos', payload);
  return putList.data;
};

export const deleteTodoList = async id => {
  const deleteList = await axios.delete(`todos/${id}`);
  return deleteList.data;
};

export const editTodoList = async (id, payload) => {
  const editList = await axios.put(`todos/${id}`, payload);
  return editList.data;
};
