import { useMutation, useQueryClient } from 'react-query';

import { deleteTodoList } from '../api/api';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(id => deleteTodoList(id), {
    onSuccess: (data, id) => {
      queryClient.setQueryData('todos', prev =>
        prev.filter(item => item.id !== id),
      );
    },
  });
};

export default useDeleteTodo;
