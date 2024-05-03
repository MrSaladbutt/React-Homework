import listStyles from './toDoList.module.css';
import ToDoListItems from '../../components/ToDoListItems/ToDoListItems';
import { RingLoader } from 'react-spinners';
import { AddToDoInfo } from '../../components/AddToDoInfo/AddToDoInfo';
import { useQuery } from 'react-query';
import { getTodoList } from '../../api/api';

import { useEffect, useState } from 'react';

const ToDolist = () => {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodoList,
  });

  const [isPostLoading, setIsPostLoading] = useState(false);
  const [isTasks, setIsTasks] = useState(false);

  useEffect(() => {
    if (!isFetching && data && data.length === 0) {
      setIsTasks(false);
    }
  }, [isFetching, data]);

  const handleClick = () => {
    setIsTasks(true);
  };

  if (error) {
    return <div>Error: {error.message} </div>;
  }

  return (
    <div className={listStyles.container}>
      <h1 className="main-header">ToDo List</h1>
      {data && data.length > 0 ? (
        <>
          <AddToDoInfo
            refetch={refetch}
            isPostLoading={isPostLoading}
            setIsPostLoading={setIsPostLoading}
            error={error}
          />
          <ul className={listStyles.ul}>
            {isFetching ? (
              <RingLoader color="#DEB887" loading={isFetching} />
            ) : (
              data.map((task, index) => (
                <ToDoListItems
                  key={index}
                  task={task}
                  error={error}
                  refetch={refetch}
                  isPostLoading={isPostLoading}
                  setIsPostLoading={setIsPostLoading}
                />
              ))
            )}
          </ul>
        </>
      ) : isTasks ? (
        <AddToDoInfo
          refetch={refetch}
          isPostLoading={isPostLoading}
          setIsPostLoading={setIsPostLoading}
          error={error}
        />
      ) : (
        <div className={listStyles.notasks}>
          <p>Наразі у вас ще немає завдань</p>
          <button onClick={handleClick} className={listStyles.btn}>
            Додати завдання
          </button>
        </div>
      )}
    </div>
  );
};

export default ToDolist;
