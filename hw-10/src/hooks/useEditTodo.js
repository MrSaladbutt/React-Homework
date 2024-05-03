import { useMutation, useQueryClient } from 'react-query';
import { editTodoList } from '../api/api';

const useEditTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(updatedTodo => editTodoList(updatedTodo.id, updatedTodo), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
};

export default useEditTodo;
