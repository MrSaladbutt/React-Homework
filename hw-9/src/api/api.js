import axios from 'axios';

axios.defaults.baseURL = 'https://tododb-ee39f480207e.herokuapp.com/';

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
